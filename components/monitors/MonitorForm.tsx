"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { MonitorResponse } from "@/lib/types/monitors";
import { useMonitorForm } from "@/hooks";
import { JsonConfigEditor } from "./JsonConfigEditor";
import { cn } from "@/lib/utils";

interface MonitorFormProps {
  monitor?: MonitorResponse;
  className?: string;
}

interface DocumentationCardProps {
  title: string;
  fields: Array<{
    name: string;
    description: string;
    required?: boolean;
  }>;
}

function DocumentationCard({ title, fields }: DocumentationCardProps) {
  return (
    <Card className="bg-muted/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm space-y-1">
        {fields.map((field) => (
          <p key={field.name}>
            <code className="bg-background px-1">{field.name}</code> -{" "}
            {field.description}
            {field.required && <span className="text-destructive ml-1">*</span>}
          </p>
        ))}
      </CardContent>
    </Card>
  );
}

export function MonitorForm({ monitor, className }: MonitorFormProps) {
  const router = useRouter();
  const {
    configJson,
    setConfigJson,
    isSubmitting,
    error,
    setError,
    handleSubmit,
    isEditMode,
  } = useMonitorForm(monitor);

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>{isEditMode ? "Edit Monitor" : "New Monitor"}</CardTitle>
        <CardDescription>
          Configure your OpenZeppelin monitor. The configuration must include a
          name and at least one network.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <JsonConfigEditor
            value={configJson}
            onChange={(value) => {
              setConfigJson(value);
              setError(null);
            }}
            error={error}
            placeholder="Enter monitor configuration JSON..."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <DocumentationCard
              title="Required Fields"
              fields={[
                {
                  name: "name",
                  description: "Unique monitor identifier",
                  required: true,
                },
                {
                  name: "networks",
                  description: "Array of network slugs",
                  required: true,
                },
              ]}
            />

            <DocumentationCard
              title="Optional Fields"
              fields={[
                { name: "paused", description: "Whether monitor is paused" },
                {
                  name: "addresses",
                  description: "Contract addresses to monitor",
                },
                {
                  name: "match_conditions",
                  description: "Events, functions, transactions",
                },
                { name: "trigger_conditions", description: "Filter scripts" },
                { name: "triggers", description: "Notification channels" },
              ]}
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? "Saving..."
                : isEditMode
                  ? "Update Monitor"
                  : "Create Monitor"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
