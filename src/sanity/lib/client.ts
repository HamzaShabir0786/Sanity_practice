import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId: process.env.NEXT_PROJECT_SANITY_PROJECT_ID || "6izl5twg",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "v2024-12-24",
  token: process.env.MY_TOKEN_ACCCESS,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
