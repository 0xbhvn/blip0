"use client";

import { useState, useCallback, useRef } from "react";

interface HistoryState<T> {
  past: T[];
  present: T;
  future: T[];
}

interface UseHistoryOptions<T> {
  maxHistorySize?: number;
  onStateChange?: (state: T) => void;
}

interface UseHistoryReturn<T> {
  state: T;
  setState: (newState: T | ((prevState: T) => T)) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  clearHistory: () => void;
  historySize: number;
}

export function useHistory<T>(
  initialState: T,
  options: UseHistoryOptions<T> = {},
): UseHistoryReturn<T> {
  const { maxHistorySize = 50, onStateChange } = options;

  const [history, setHistory] = useState<HistoryState<T>>({
    past: [],
    present: initialState,
    future: [],
  });

  const isInternalUpdate = useRef(false);

  const setState = useCallback(
    (newState: T | ((prevState: T) => T)) => {
      setHistory((prevHistory) => {
        const nextState =
          typeof newState === "function"
            ? (newState as (prevState: T) => T)(prevHistory.present)
            : newState;

        // Don't add to history if the state hasn't changed
        if (JSON.stringify(nextState) === JSON.stringify(prevHistory.present)) {
          return prevHistory;
        }

        // Add current state to past and clear future
        let newPast = [...prevHistory.past, prevHistory.present];

        // Limit history size
        if (newPast.length > maxHistorySize) {
          newPast = newPast.slice(newPast.length - maxHistorySize);
        }

        const newHistory = {
          past: newPast,
          present: nextState,
          future: [], // Clear future when new state is set
        };

        // Notify about state change if it's not an internal update (undo/redo)
        if (!isInternalUpdate.current && onStateChange) {
          onStateChange(nextState);
        }

        return newHistory;
      });
    },
    [maxHistorySize, onStateChange],
  );

  const undo = useCallback(() => {
    setHistory((prevHistory) => {
      if (prevHistory.past.length === 0) {
        return prevHistory;
      }

      const previous = prevHistory.past[prevHistory.past.length - 1];
      const newPast = prevHistory.past.slice(0, prevHistory.past.length - 1);

      const newHistory = {
        past: newPast,
        present: previous,
        future: [prevHistory.present, ...prevHistory.future],
      };

      isInternalUpdate.current = true;
      if (onStateChange) {
        onStateChange(previous);
      }
      setTimeout(() => {
        isInternalUpdate.current = false;
      }, 0);

      return newHistory;
    });
  }, [onStateChange]);

  const redo = useCallback(() => {
    setHistory((prevHistory) => {
      if (prevHistory.future.length === 0) {
        return prevHistory;
      }

      const next = prevHistory.future[0];
      const newFuture = prevHistory.future.slice(1);

      const newHistory = {
        past: [...prevHistory.past, prevHistory.present],
        present: next,
        future: newFuture,
      };

      isInternalUpdate.current = true;
      if (onStateChange) {
        onStateChange(next);
      }
      setTimeout(() => {
        isInternalUpdate.current = false;
      }, 0);

      return newHistory;
    });
  }, [onStateChange]);

  const clearHistory = useCallback(() => {
    setHistory((prevHistory) => ({
      past: [],
      present: prevHistory.present,
      future: [],
    }));
  }, []);

  return {
    state: history.present,
    setState,
    undo,
    redo,
    canUndo: history.past.length > 0,
    canRedo: history.future.length > 0,
    clearHistory,
    historySize: history.past.length + history.future.length + 1,
  };
}
