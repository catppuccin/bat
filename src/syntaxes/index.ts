import { type Palette } from "../convert.ts";
import { type VSCTheme } from "../main.ts";

import man from "./man.ts";
import markdown from "./markdown.ts";

export const customTokens = (p: Palette): VSCTheme["tokenColors"] => [
  ...man(p),
  ...markdown(p),
];
