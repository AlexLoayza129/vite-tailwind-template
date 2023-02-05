import postcss from 'postcss';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 3000
    },
    plugins: [
        postcss(
            require('tailwindcss')
        )
    ]
});