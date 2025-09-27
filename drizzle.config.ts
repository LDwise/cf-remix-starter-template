import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  // out: './app/database/drizzle', // default value is ./drizzle
  schema: './app/database/schema/*.sql.server.ts',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
    token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
});
