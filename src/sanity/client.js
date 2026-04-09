import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "okzh8fed",
  dataset: "production",
  apiVersion: "2026-04-09",
  useCdn: true
});
