import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
  ],
});
