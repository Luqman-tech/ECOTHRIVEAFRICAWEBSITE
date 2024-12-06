import { defineStackbitConfig } from "@stackbit/types";
import { SanityContentSource } from "@stackbit/cms-sanity";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  contentSources: [
    new SanityContentSource({
      rootPath: __dirname,
      projectId: process.env.SANITY_PROJECT_ID,
      token: process.env.SANITY_ACCESS_TOKEN,
      dataset: process.env.SANITY_DATASET || "production"
    })
  ],
  // Other configuration options...
});
