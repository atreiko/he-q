import { z } from 'zod';

const privateConfigSchema = z.object({
  GOOGLE_ID: z.string().optional(),
  GOOGLE_SECRET: z.string().optional(),
});

export const privateConfig = privateConfigSchema.parse(process.env);
