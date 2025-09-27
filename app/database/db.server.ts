import { drizzle, type DrizzleD1Database } from "drizzle-orm/d1";
import * as schema from "~/database/schema/schema.server";
import { env } from "cloudflare:workers";

const { DB } = env || process.env;

export const db: DrizzleD1Database<typeof schema> = drizzle(DB, { schema });