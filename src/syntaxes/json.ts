import { type Palette } from "../convert.ts";
import { type VSCTheme } from "../main.ts";

export default (p: Palette): VSCTheme["tokenColors"] => [
  {
    name: "JSON Keys",
    scope: ["source.json meta.mapping.key string"],
    settings: {
      foreground: p.blue,
    },
  },
  {
    name: "JSON key surrounding quotes",
    scope: [
      "source.json meta.mapping.key punctuation.definition.string.begin",
      "source.json meta.mapping.key punctuation.definition.string.end",
    ],
    settings: {
      foreground: p.overlay2,
    },
  },
];
