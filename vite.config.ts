
import {defineConfig} from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'useResize'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    useResize: 'useResize'  // umd : amd cmd cjs(requeire('../), script src="../.js")   esm(import xx from xx )
                }
            }
        }

    }
});