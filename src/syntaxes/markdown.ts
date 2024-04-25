import { type Palette } from "../convert.ts";
import { type VSCTheme } from "../main.ts";

export default (p: Palette): VSCTheme["tokenColors"] => [
  {
    scope: "markup.heading.1.markdown",
    settings: {
      foreground: p.red,
    },
  },
  {
    scope: "markup.heading.2.markdown",
    settings: {
      foreground: p.peach,
    },
  },
  // these don't work yet, bat's syntect dependency is too out-of-date
  // {
  //   scope: "markup.heading.3.markdown",
  //   settings: {
  //     foreground: p.yellow,
  //   },
  // },
  // {
  //   scope: "markup.heading.4.markdown",
  //   settings: {
  //     foreground: p.green,
  //   },
  // },
  // {
  //   scope: "markup.heading.5.markdown",
  //   settings: {
  //     foreground: p.blue,
  //   },
  // },
  // {
  //   scope: "markup.heading.6.markdown",
  //   settings: {
  //     foreground: p.mauve,
  //   },
  // },

  // so fall back to everything past h2 being yellow
  {
    scope: "markup.heading.markdown",
    settings: {
      foreground: p.yellow,
    },
  },
];
