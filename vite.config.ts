/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

import viteTsConfigPaths from 'vite-tsconfig-paths';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    build: {
      outDir: 'dist/client',
      reportCompressedSize: true,
      target: ['es2020'],
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }

            return;
          }
        }
      }
    },
    plugins: [
      analog({
        static: true,
        prerender: {
          routes: [
            '/',
            '/about',
            {
              contentDir: '/src/content/episodes',
              transform(file) {
                return `/episodes/${file.name}`;
              },
            }
          ]
        }
      }),
      viteTsConfigPaths(),
    ],
    server: {
      fs: {
        allow: ['.']
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
