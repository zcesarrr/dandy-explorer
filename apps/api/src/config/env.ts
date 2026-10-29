import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]),
    PORT: z.string().transform(Number),
    DATABASE_URL: z.url(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error("Ìnvalid .env configuration:", z.treeifyError(parsed.error));
    process.exit(1);
}

export default parsed.data;
