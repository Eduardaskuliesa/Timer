"use server";
import { timers } from "db/schema";
import { drizzle } from "drizzle-orm/d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function getTimers() {
  const { env } = await getCloudflareContext({ async: true });
  const db = drizzle(env.DB);
  return await db.select().from(timers);
}
