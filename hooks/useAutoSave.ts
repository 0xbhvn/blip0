"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import debounce from "lodash/debounce";
import { SaveStatus } from "@/components/monitors/flow/AutoSaveIndicator";
import { MonitorCreateInput } from "@/lib/types/monitors";

interface UseAutoSaveOptions<T = MonitorCreateInput> {
  onSave: (data: T) => Promise<void> | void;
  debounceMs?: number;
  enabled?: boolean;
  onError?: (error: Error) => void;
}

interface UseAutoSaveReturn<T = MonitorCreateInput> {
  saveStatus: SaveStatus;
  lastSaved: Date | undefined;
  triggerSave: (data: T) => void;
  forceSave: (data: T) => Promise<void>;
  hasUnsavedChanges: boolean;
}

export function useAutoSave<T = MonitorCreateInput>({
  onSave,
  debounceMs = 2000,
  enabled = true,
  onError,
}: UseAutoSaveOptions<T>): UseAutoSaveReturn<T> {
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [lastSaved, setLastSaved] = useState<Date | undefined>();
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const saveInProgressRef = useRef(false);
  const pendingDataRef = useRef<T | null>(null);

  // Check if we're online
  useEffect(() => {
    const handleOnline = () => setSaveStatus("idle");
    const handleOffline = () => setSaveStatus("offline");

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Check initial state
    if (!navigator.onLine) {
      setSaveStatus("offline");
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Core save function
  const performSave = useCallback(
    async (data: T) => {
      if (!enabled || saveInProgressRef.current) {
        pendingDataRef.current = data;
        return;
      }

      if (!navigator.onLine) {
        setSaveStatus("offline");
        setHasUnsavedChanges(true);
        return;
      }

      try {
        saveInProgressRef.current = true;
        setSaveStatus("saving");

        await onSave(data);

        setSaveStatus("saved");
        setLastSaved(new Date());
        setHasUnsavedChanges(false);

        // Reset to idle after a short delay
        setTimeout(() => {
          setSaveStatus("idle");
        }, 2000);

        // Check if there's pending data to save
        if (pendingDataRef.current) {
          const pendingData = pendingDataRef.current;
          pendingDataRef.current = null;
          setTimeout(() => performSave(pendingData), 100);
        }
      } catch (error) {
        setSaveStatus("error");
        setHasUnsavedChanges(true);
        onError?.(error as Error);

        // Reset to idle after showing error
        setTimeout(() => {
          setSaveStatus("idle");
        }, 3000);
      } finally {
        saveInProgressRef.current = false;
      }
    },
    [enabled, onSave, onError],
  );

  // Debounced save function
  const debouncedSave = useRef(
    debounce((data: T) => {
      performSave(data);
    }, debounceMs),
  ).current;

  // Trigger save (debounced)
  const triggerSave = useCallback(
    (data: T) => {
      setHasUnsavedChanges(true);
      debouncedSave(data);
    },
    [debouncedSave],
  );

  // Force immediate save (bypass debounce)
  const forceSave = useCallback(
    async (data: T) => {
      debouncedSave.cancel();
      await performSave(data);
    },
    [debouncedSave, performSave],
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      debouncedSave.cancel();
    };
  }, [debouncedSave]);

  // Warn about unsaved changes before leaving
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        const message =
          "You have unsaved changes. Are you sure you want to leave?";
        e.preventDefault();
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasUnsavedChanges]);

  return {
    saveStatus,
    lastSaved,
    triggerSave,
    forceSave,
    hasUnsavedChanges,
  };
}
