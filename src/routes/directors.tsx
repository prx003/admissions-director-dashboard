import { createFileRoute } from "@tanstack/react-router";
import DirectorsLayout from "@/components/directors/components/Layout";

// Directors module shell (skillai dashboard): sidebar + topbar + content outlet.
export const Route = createFileRoute("/directors")({
  component: DirectorsLayout,
});
