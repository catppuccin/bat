import { join } from "https://deno.land/std@0.219.1/path/join.ts";
import { parseArgs } from "https://deno.land/std@0.219.1/cli/parse_args.ts";

import { compile } from "npm:@catppuccin/vscode@3.12.0";
import plist from "npm:plist@3.1.0";

const args = parseArgs(Deno.args, {
  string: ["overrides"],
});

export type VSCTheme = ReturnType<typeof compile>;
type Overrides = (Parameters<typeof compile>)[1];
const overrides: Overrides = args.overrides ? { colorOverrides: JSON.parse(args.overrides) } : {};

import { convert } from "./convert.ts";

const themes = {
  Latte: {
    uuid: "96a262cd-4b2f-49f5-9125-8dd0077cbfe1",
    vscode: {
      ...compile("latte", overrides),
      name: "Catppuccin Latte",
    },
  },
  Frappe: {
    uuid: "e0ada983-8938-490c-86f0-97a1a0ec58e4",
    vscode: {
      ...compile("frappe", overrides),
      name: "Catppuccin Frappé",
    },
  },
  Macchiato: {
    uuid: "02b2bdf3-9eb7-4396-bf04-f17f1468f99f",
    vscode: {
      ...compile("macchiato", overrides),
      name: "Catppuccin Macchiato",
    },
  },
  Mocha: {
    uuid: "627ce890-fabb-4d39-9819-7be71f4bdca7",
    vscode: {
      ...compile("mocha", overrides),
      name: "Catppuccin Mocha",
    },
  },
};

const outDir = new URL("../themes", import.meta.url).pathname;

Deno.mkdirSync(outDir, { recursive: true });

Object.entries(themes).forEach(([name, { uuid, vscode }]) => {
  const plistContent = plist.build(convert(vscode, uuid));
  const fileName = `Catppuccin ${name}.tmTheme`;

  Deno.writeTextFile(join(outDir, fileName), plistContent);
  console.log(`Wrote ${fileName}`);
});
