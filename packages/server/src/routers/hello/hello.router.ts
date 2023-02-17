import { createRouter, publicProcedure } from '@acme/server/trpc';
import { z } from 'zod';

export const helloRouter = createRouter({
  greeting: publicProcedure
    .input(z.object({ name: z.string().optional() }).optional())
    .query(({ input }) => {
      return {
        message: `Hello ${input?.name ?? 'World'}`,
      };
    }),
});
