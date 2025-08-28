"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";

interface JsonConfigEditorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string | null;
  minHeight?: string;
  placeholder?: string;
}

export function JsonConfigEditor({
  value,
  onChange,
  error,
  minHeight = "400px",
  placeholder = "Enter configuration JSON...",
}: JsonConfigEditorProps) {
  const formatJson = useCallback(() => {
    try {
      const parsed = JSON.parse(value);
      onChange(JSON.stringify(parsed, null, 2));
    } catch {
      // Formatting failed, keep original value
    }
  }, [value, onChange]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Label htmlFor="config">Monitor Configuration (JSON)</Label>
        <Button type="button" variant="ghost" size="sm" onClick={formatJson}>
          Format JSON
        </Button>
      </div>
      <Textarea
        id="config"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-mono text-sm"
        style={{ minHeight }}
        placeholder={placeholder}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
