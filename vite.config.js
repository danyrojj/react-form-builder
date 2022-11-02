import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel';

export default defineConfig({
  loader: { '.js': 'jsx' },
  plugins: [
    babel(),
    reactRefresh(),
  ]
});