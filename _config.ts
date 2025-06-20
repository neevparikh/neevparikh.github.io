import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import date from "lume/plugins/date.ts";
import { base16Tailwind } from "./src/base16-tailwind/lib.ts";
import typography from "npm:@tailwindcss/typography";
import Shiki from "@shikijs/markdown-it";
import footnote from "npm:markdown-it-footnote";
import katex from "lume/plugins/katex.ts";

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
        base16Tailwind({
          customPath: "./src/base16-tailwind/schemes",
          system: "base24",
          invert: true,
          withTypography: true,
          prefix: "base16",
        }),
      ],
    },
  }),
);
site.use(postcss());
site.use(readingInfo());
site.use(date());
site.use(katex());

site.ignore("base16-tailwind/schemes");

site.data(
  "overallSiteStyle",
  "base24-softstack-light dark:base24-softstack-dark font-mono scroll-smooth",
);
site.data(
  "bodyStyle",
  "flex flex-col m-auto p-6 max-w-7xl bg-base16-100 text-base16-700 min-h-screen",
);
site.data(
  "mainStyle",
  "flex flex-col basis-auto flex-auto bg-base16-200/20 my-6 rounded-2xl p-8 md:py-12 md:px-32",
);
site.data(
  "contentStyle",
  "grow basis-full text-base16-700 max-w-none leading-6 hyphens-auto " +
    "underline-offset-2 " +
    "prose " +
    "prose-code:rounded-xl prose-pre:bg-base16-200/0 " +
    "prose-p:text-base16-700 prose-p:mb-10 " +
    "prose-a:text-base16-cyan/90 " +
    "prose-ul:-mt-8 prose-ul:mb-10 " +
    "prose-ol:-mt-4 prose-ol:mb-10 " +
    "prose-li:marker:text-base16-blue/90",
);

site.copy("assets");
site.copy("CNAME");

export default site;
