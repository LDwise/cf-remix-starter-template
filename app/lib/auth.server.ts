import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "~/database/db.server";
import * as schema from "~/database/schema/schema.server";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "sqlite",
        schema
    })
});