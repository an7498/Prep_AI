/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:vpXz7dIGSOM3@ep-snowy-water-a5kswgqp.us-east-2.aws.neon.tech/ai-mockinterview2?sslmode=require',
  },
};
