// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import solidJs from "@astrojs/solid-js";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	site: "https://example.com",

	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "Zalando Sans",
				cssVariable: "--font-zalando-sans",
				weights: ["200 900"],
			},
			{
				provider: fontProviders.google(),
				name: "Zalando Sans Expanded",
				cssVariable: "--font-zalando-sans-expanded",
				weights: ["200 900"],
			},
		],
	},

	integrations: [mdx(), sitemap(), solidJs()],
	adapter: cloudflare(),
});

