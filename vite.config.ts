import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

import basicSsl from '@vitejs/plugin-basic-ssl'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [
      basicSsl(),
      react({
        babel: {
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                displayName: true,
                fileName: false,
              },
            ],
          ],
        },
      }),
      tsconfigPaths(),
      svgr(),
      legacy({
        targets: ['defaults', 'IE >= 10', 'Chrome >= 40', 'Firefox >= 44', 'Safari >= 0', 'iOS >= 9'],
      }),
    ],
    base: process.env.VITE_BASE_URL,
    server: {
      proxy: {
        '/s3-proxy': {
          target: 'https://s3.timeweb.cloud',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/s3-proxy/, ''),
        },
      },
    },
  })
}
