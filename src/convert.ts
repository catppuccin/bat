import { type ColorName, type FlavorName, flavors } from "npm:@catppuccin/palette@1.1.0";
import type { Overrides, VSCTheme } from "./main.ts";
import { batTokens } from "./syntaxes/man.ts";

export type Palette = Record<ColorName, string>;

export const convert = (flavor: FlavorName, vscTheme: VSCTheme, uuid: string, overrides: Overrides = {}) => {
  const { colors } = vscTheme;
  const slug = vscTheme.name.replace(/\s+/g, "-").toLowerCase();
  const semanticClass = `theme.${vscTheme.type}.${slug}`;

  const flavorOverrides = {
    ...overrides.colorOverrides?.all,
    ...overrides.colorOverrides?.[flavor],
  };
  const palette = flavors[flavor].colorEntries
    .reduce((acc, [colorName, color]) => ({
      ...acc,
      [colorName]: flavorOverrides[colorName] ?? color.hex,
    }), {} as Palette);

  return {
    name: vscTheme.name,
    semanticClass,
    uuid,
    author: "Catppuccin Org",
    colorSpaceName: "sRGB",
    settings: [
      {
        settings: {
          background: colors["editor.background"],
          foreground: colors["editor.foreground"],
          caret: colors["editorCursor.foreground"],
          lineHighlight: colors["editor.lineHighlightBackground"],

          misspelling: colors["editorError.foreground"],
          accent: colors["activityBar.foreground"],

          selection: colors["editor.selectionBackground"],
          activeGuide: colors["editorIndentGuide.background"],
          findHighlight: colors["editor.findMatchHighlightBackground"],
          gutterForeground: colors["editorLineNumber.foreground"],
        },
      },
      ...[
        ...vscTheme.tokenColors,
        ...batTokens(palette),
      ].map((tokenColor) => {
        if (tokenColor.scope == null || tokenColor.scope === "") {
          return { ...tokenColor };
        }

        return {
          ...tokenColor,
          scope: Array.isArray(tokenColor.scope) ? tokenColor.scope.join(", ") : tokenColor.scope,
        };
      }),
    ],
  };
};
