import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import date from "lume/plugins/date.ts";
import { base16Tailwind, base16Schemes } from "./src/base16-tailwind/lib.ts";
import typography from "npm:@tailwindcss/typography";
import Shiki from "@shikijs/markdown-it";
import footnote from "npm:markdown-it-footnote";
import katex from "lume/plugins/katex.ts";

// Configure base16 options
const base16Options = {
  customPath: "./src/base16-tailwind/schemes",
  system: "base24" as const,
  invert: true,
  withTypography: true,
  prefix: "base16",
};

// Get all available themes
const themes = base16Schemes(base16Options).map((scheme) => ({
  name: scheme.name,
  slug: scheme.slug,
  variant: scheme.variant,
}));

// Configure the markdown plugin
const markdown = {
  options: {
    breaks: false,
    html: true,
    typographer: true,
  },
  plugins: [
    footnote,
    await Shiki({
      themes: {
        dark: "gruvbox-dark-hard",
        light: "gruvbox-light-soft",
      },
    }),
  ],
  keepDefaultPlugins: true,
};

const site = lume(
  {
    src: "./src",
    dest: "./site",
  },
  { markdown },
);

site.use(
  tailwindcss({
    options: {
      safelist: [
        { pattern: /^base24-/ },
        { pattern: /^base16-/ },
      ],
      theme: {
        extend: {
          typography: () => ({
            DEFAULT: {
              css: {},
            },
          }),
        },
      },
      plugins: [
        typography,
        base16Tailwind(base16Options),
      ],
    },
  }),
);
site.use(postcss());
site.use(readingInfo());
site.use(date());
site.use(katex());

site.ignore("base16-tailwind/schemes");

// Add themes data for the theme picker
site.data("themes", themes);

// Generate themes.json for the theme picker
site.page({
  url: "/themes.json",
  content: JSON.stringify(themes),
});

site.data("defaultTheme", "base24-softstack-light");
site.data("defaultDarkTheme", "base24-softstack-dark");
site.data(
  "baseStyle",
  "font-mono scroll-smooth [scrollbar-width:thin] [scrollbar-gutter:stable] [scrollbar-color:rgb(var(--color-base16-300))_transparent]",
);
site.data(
  "bodyStyle",
  "flex flex-col m-auto p-6 max-w-4xl bg-base16-100 text-base16-700 min-h-screen",
);
site.data(
  "mainStyle",
  "flex flex-col basis-auto flex-auto bg-base16-200/45 mt-2 mb-6 rounded-2xl p-4 md:p-8 md:py-8 md:px-10",
);
site.data(
  "contentStyle",
  "basis-full text-base16-700 max-w-none leading-7 hyphens-manual text-sm prose " +
    "prose-code:rounded-xl " +
    "prose-p:text-base16-700/85 prose-p:mb-10 " +
    "prose-a:text-base16-blue prose-a:no-underline prose-a:italic " +
    "prose-ul:-ml-4 prose-ul:list-inside prose-ul:-mt-8 prose-ul:mb-8 prose-ul:leading-6 " +
    "prose-ol:-ml-4 prose-ol:list-inside prose-ol:-mt-4 prose-ol:mb-4 prose-ol:leading-6 " +
    "prose-li:marker:text-base16-blue/90",
);

site.copy("assets");
site.copy("CNAME");

export default site;
