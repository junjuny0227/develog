import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/**', 'dist/**', 'example/**', '**/*.config.ts', '**/*.d.ts'],
    },
    include: ['src/**/*.{test,spec}.ts'],
  },
});
