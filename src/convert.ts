import { VSCTheme } from "./main.ts";

export const convert = (vscTheme: VSCTheme, uuid: string) => {
  const { colors } = vscTheme;
  const slug = vscTheme.name.replace(/\s+/g, "-").toLowerCase();
  const semanticClass = `theme.${vscTheme.type}.${slug}`;

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
        },
      },
      ...vscTheme.tokenColors.map((tokenColor) => {
        if (tokenColor.scope == null || tokenColor.scope === "") {
          return { ...tokenColor };
        }

        return {
          ...tokenColor,
          scope: Array.isArray(tokenColor.scope)
            ? tokenColor.scope.join(", ")
            : tokenColor.scope,
        };
      }),
    ],
  };
};
