import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://artisanal-avenue.example.com',
  integrations: [tailwind()],
  output: 'static',
});