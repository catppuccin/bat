import { type Palette } from "../convert.ts";
import { type VSCTheme } from "../main.ts";

export const batTokens = (p: Palette): VSCTheme["tokenColors"] => [
  {
    scope: [
      "markup.heading.synopsis.man",
      "markup.heading.title.man",
      "markup.heading.other.man",
      "markup.heading.env.man",
    ],
    settings: {
      foreground: p.mauve,
    },
  },
  {
    scope: ["markup.heading.commands.man"],
    settings: {
      foreground: p.blue,
    },
  },
  {
    scope: ["markup.heading.env.man"],
    settings: {
      foreground: p.pink,
    },
  },
];
