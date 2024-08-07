/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';


export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['vitest.setup.ts'],
	},
	resolve: {
		alias: {
			'#components:': resolve(__dirname, './components/*'),
			'#utils:': resolve(__dirname, './utils/*'),
			'#constants:': resolve(__dirname, './constants/*'),
			'#styles:': resolve(__dirname, './styles/*'),
		},
	},
})
