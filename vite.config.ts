import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true
    },
    preview: {
      port: parseInt(process.env.PORT) || 4173,
      host: '0.0.0.0',
      allowedHosts: ['smi-web-1.onrender.com', 'localhost', '127.0.0.1']
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'terser'
    },
    base: command === 'build' ? env.VITE_BASE_PATH || '/' : '/'
  }
})

// https://vitejs.dev/config/
// export default defineConfig(({ command, mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   const basePath = env.VITE_BASE_PATH || '/connect/';

//   return {
//     plugins: [react()],
//     // Use root path for local dev and configurable subpath for production builds.
//     base: command === 'build' ? basePath : '/',
//   };
// });