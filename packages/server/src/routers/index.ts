import { createRouter } from '@acme/server/trpc';
import { helloRouter } from './hello/hello.router';

export const appRouter = createRouter({
  hello: helloRouter,
});

export type AppRouter = typeof appRouter;
