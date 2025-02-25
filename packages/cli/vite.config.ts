import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

import viteTsconfigPaths from 'vite-tsconfig-paths';

import dns from 'dns';
dns.setDefaultResultOrder('verbatim');

export default defineConfig({
    plugins: [react(), viteTsconfigPaths()],
    root: fileURLToPath(new URL('./src/dev-portal', import.meta.url)),
    build: {
        outDir: fileURLToPath(new URL('./bin/dev-portal', import.meta.url)),
        emptyOutDir: true,
        // minify: false,
        // terserOptions: {
        //     mangle: false,
        // },
    },
    // mode: 'development',
});
