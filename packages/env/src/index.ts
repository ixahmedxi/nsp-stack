import { parseEnv } from 'znv';
import { z } from 'zod';

export const env = parseEnv(process.env, {
  NODE_ENV: z.enum(['development', 'test', 'production']),
  DATABASE_URL: z.string().url().startsWith('mysql://'),
  GITHUB_CLIENT_ID: z.string().min(1),
  GITHUB_CLIENT_SECRET: z.string().min(1),
});
