import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import date from "lume/plugins/date.ts";
import { base16Tailwind } from "./src/base16-tailwind/lib.ts";
import typography from "npm:@tailwindcss/typography";
import footnote from "lume/mod.ts";

// Configure the markdown plugin
const markdown = {
  options: {
    breaks: false,
    html: true,
    typographer: true,
  },
  plugins: [footnote],
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
site.use(
  codeHighlight({
    theme: {
      name: "base16/gruvbox-dark-hard",
      cssFile: "/styles.css",
    },
  }),
);
site.use(readingInfo());
site.use(date());

site.ignore("base16-tailwind/schemes");

site.data(
  "bodyStyle",
  "flex flex-col m-auto p-6 max-w-6xl bg-base16-100 text-base16-700 min-h-screen",
);
site.data(
  "mainStyle",
  "flex flex-col basis-auto flex-auto bg-base16-200 my-6 rounded-2xl p-8 md:p-12",
);

site.copy("assets");
site.copy("CNAME");

export default site;
