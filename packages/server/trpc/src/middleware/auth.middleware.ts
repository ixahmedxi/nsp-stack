import { TRPCError } from '@trpc/server';
import { t } from '../trpc';

const authMiddleware = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

export const authProcedure = t.procedure.use(authMiddleware);
