"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useNodeEditorOptimized } from "./useNodeEditorOptimized";

/**
 * Custom hook that provides debounced validation for the node editor.
 * This prevents performance issues from validating on every change.
 *
 * @param delay - Debounce delay in milliseconds (default: 1000ms)
 * @returns isValid state and a manual validate function
 */
export function useDebouncedValidation(delay: number = 1000) {
  const [isValid, setIsValid] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { nodes, edges, monitorName, validateConfiguration } =
    useNodeEditorOptimized();

  // Use individual dependencies instead of JSON.stringify for better performance
  // This avoids expensive serialization on every render
  const nodeCount = nodes.length;
  const edgeCount = edges.length;
  const hasName = !!monitorName;

  // Only create nodeTypes string when nodes actually change
  const nodeTypes = useMemo(() => {
    return nodes
      .map((n) => n.type)
      .sort()
      .join(",");
  }, [nodes]);

  useEffect(() => {
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Don't validate if there's nothing to validate
    if (nodeCount === 0 && !hasName) {
      setIsValid(false);
      setIsValidating(false);
      return;
    }

    setIsValidating(true);

    // Set new timeout for validation
    timeoutRef.current = setTimeout(() => {
      const valid = validateConfiguration();
      setIsValid(valid);
      setIsValidating(false);
    }, delay);

    // Cleanup on unmount or dependency change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [nodeCount, edgeCount, hasName, nodeTypes, delay, validateConfiguration]);

  // Manual validation function (for immediate validation, e.g., on save)
  const validateNow = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const valid = validateConfiguration();
    setIsValid(valid);
    setIsValidating(false);
    return valid;
  };

  return { isValid, isValidating, validateNow };
}
