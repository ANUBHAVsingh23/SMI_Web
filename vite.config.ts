import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
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