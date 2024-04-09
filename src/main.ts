import { join } from "https://deno.land/std@0.219.1/path/join.ts";
import { parseArgs } from "https://deno.land/std@0.219.1/cli/parse_args.ts";

import { compile as vscCompile } from "npm:@catppuccin/vscode@3.12.0";
import { flavorEntries, type FlavorName } from "npm:@catppuccin/palette@1.1.0";
import plist from "npm:plist@3.1.0";

import { convert } from "./convert.ts";

const args = parseArgs(Deno.args, {
  string: ["color-overrides"],
});

export type VSCTheme = ReturnType<typeof vscCompile>;
export type Overrides = (Parameters<typeof vscCompile>)[1];

// string out undefined keys via JSON.parse(JSON.stringify())
const compile = (name: FlavorName, overrides: Overrides): VSCTheme => {
  const theme = JSON.parse(JSON.stringify(vscCompile(name, overrides)));
  return theme as VSCTheme;
};

const overrides: Overrides = args["color-overrides"] ? { colorOverrides: JSON.parse(args["color-overrides"]) } : {};

const themes: Record<FlavorName, { uuid: string; vscode: VSCTheme }> = {
  latte: {
    uuid: "96a262cd-4b2f-49f5-9125-8dd0077cbfe1",
    vscode: {
      ...compile("latte", overrides),
      name: "Catppuccin Latte",
    },
  },
  frappe: {
    uuid: "e0ada983-8938-490c-86f0-97a1a0ec58e4",
    vscode: {
      ...compile("frappe", overrides),
      name: "Catppuccin Frappé",
    },
  },
  macchiato: {
    uuid: "02b2bdf3-9eb7-4396-bf04-f17f1468f99f",
    vscode: {
      ...compile("macchiato", overrides),
      name: "Catppuccin Macchiato",
    },
  },
  mocha: {
    uuid: "627ce890-fabb-4d39-9819-7be71f4bdca7",
    vscode: {
      ...compile("mocha", overrides),
      name: "Catppuccin Mocha",
    },
  },
};

const outDir = new URL("../themes", import.meta.url).pathname;
Deno.mkdirSync(outDir, { recursive: true });

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

if (import.meta.main) {
  flavorEntries.map(([flavorName]) => {
    const { uuid, vscode } = themes[flavorName];

    const plistContent = plist.build(convert(flavorName, vscode, uuid, overrides));
    const fileName = `Catppuccin ${capitalize(flavorName)}.tmTheme`;

    Deno.writeTextFile(join(outDir, fileName), plistContent);
    console.log(`Wrote ${fileName}`);
  });
}
