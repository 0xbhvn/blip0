import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import { fetchQuery } from "convex/nextjs";
import { notFound } from "next/navigation";
import { MonitorForm } from "@/components/monitors";
import { PageHeader } from "@/components/PageHeader";

export default async function EditMonitorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const monitor = await fetchQuery(
    api.monitors.get,
    { id: id as Id<"monitors"> },
    { token: await convexAuthNextjsToken() },
  );

  if (!monitor) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title="Edit Monitor"
        description="Update your monitor configuration"
      />
      <MonitorForm monitor={monitor} />
    </>
  );
}
