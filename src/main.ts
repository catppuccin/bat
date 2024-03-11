import { join } from "https://deno.land/std@0.217.0/path/join.ts";

import plist from "npm:plist";
import { flavorEntries, type FlavorName } from "npm:@catppuccin/palette@1.1.0";
import Latte from "npm:@catppuccin/vscode/themes/latte.json" with { type: "json" };
import Frappe from "npm:@catppuccin/vscode/themes/frappe.json" with { type: "json" };
import Macchiato from "npm:@catppuccin/vscode/themes/macchiato.json" with { type: "json" };
import Mocha from "npm:@catppuccin/vscode/themes/mocha.json" with { type: "json" };

import { convert } from "./convert.ts";

export type VSCTheme = typeof Latte;

const themes: Record<FlavorName, { uuid: string; vscode: VSCTheme }> = {
  latte: {
    uuid: "96a262cd-4b2f-49f5-9125-8dd0077cbfe1",
    vscode: Latte satisfies VSCTheme,
  },
  frappe: {
    uuid: "e0ada983-8938-490c-86f0-97a1a0ec58e4",
    vscode: Frappe satisfies VSCTheme,
  },
  macchiato: {
    uuid: "02b2bdf3-9eb7-4396-bf04-f17f1468f99f",
    vscode: Macchiato satisfies VSCTheme,
  },
  mocha: {
    uuid: "627ce890-fabb-4d39-9819-7be71f4bdca7",
    vscode: Mocha satisfies VSCTheme,
  },
};

const outDir = new URL("../themes", import.meta.url).pathname;
Deno.mkdirSync(outDir, { recursive: true });

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

if (import.meta.main) {
  flavorEntries.map(([flavorName]) => {
    const { uuid, vscode } = themes[flavorName];

    const plistContent = plist.build(convert(flavorName, vscode, uuid));
    const fileName = `Catppuccin ${capitalize(flavorName)}.tmTheme`;

    Deno.writeTextFile(join(outDir, fileName), plistContent);
    console.log(`Wrote ${fileName}`);
  });
}
