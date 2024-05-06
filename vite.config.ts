import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      tsconfigPaths(),
      react(),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
          dev: {
            logLevel:
              process.env.VITE_MODE === 'development'
                ? ['error']
                : ['error', 'warning'],
          },
        },
      }),
    ],
    server: {
      open: true,
      port: 3000,
    },
    base: process.env.VITE_BASE_URL ? process.env.VITE_BASE_URL : undefined,
  });
};
