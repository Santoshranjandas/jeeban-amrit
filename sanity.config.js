import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "jeebanAmrit",
  title: "Jeeban Amrit",
  projectId: "okzh8fed",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes
  }
});
