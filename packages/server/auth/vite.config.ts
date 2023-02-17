/// <reference types="vitest" />
import { defineConfig } from 'vite';

import { join } from 'path';
import dts from 'vite-plugin-dts';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../../node_modules/.vite/server-auth',
  plugins: [
    dts({
      entryRoot: 'src',
      tsConfigFilePath: join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
    viteTsConfigPaths({
      root: '../../../',
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'server-auth',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        '@trpc/server',
        'zod',
        'superjson',
        'next-auth',
        '@prisma/client',
        '@next-auth/prisma-adapter',
        'next-auth/providers/github',
      ],
    },
  },
  test: {
    globals: true,
    cache: {
      dir: '../../../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
