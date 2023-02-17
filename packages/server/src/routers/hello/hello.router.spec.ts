import { createInnerContext } from '@acme/server/trpc';
import { helloRouter } from './hello.router';

describe('hello router', () => {
  it('should render the greeting', async () => {
    const ctx = createInnerContext({ session: null });

    const caller = helloRouter.createCaller(ctx);

    const result = await caller.greeting();

    expect(result).toStrictEqual({
      message: 'Hello World',
    });
  });
});
