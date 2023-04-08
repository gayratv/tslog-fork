import { ISettings, TStyle } from "./interfaces.js";
import { PrettyLogStyles, prettyLogStyles } from "./prettyLogStyles.js";

export function ansiColorWrap(placeholderValue: string, code: [number, number]) {
  return `\u001b[${code[0]}m${placeholderValue}\u001b[${code[1]}m`;
}

/*
 * example of use:
 * logger.info(styleWrap('your text',['blue','bold','bgYellowBright']));
 */
export function styleWrap(value: string, style: TStyle): string {
  if (style != null && typeof style === "string") {
    return ansiColorWrap(value, prettyLogStyles[style]);
  } else if (style != null && Array.isArray(style)) {
    return style.reduce((prevValue: string, thisStyle: PrettyLogStyles) => styleWrap(prevValue, thisStyle), value);
  } else {
    if (style != null && style[value.trim()] != null) {
      return styleWrap(value, style[value.trim()]);
    } else if (style != null && style["*"] != null) {
      return styleWrap(value, style["*"]);
    } else {
      return value;
    }
  }
}

export function formatTemplate<LogObj>(settings: ISettings<LogObj>, template: string, values: { [key: string]: string }, hideUnsetPlaceholder = false) {
  const templateString = String(template);

  const styleWrap: (value: string, style: TStyle) => string = (value: string, style: TStyle) => {
    if (style != null && typeof style === "string") {
      return ansiColorWrap(value, prettyLogStyles[style]);
    } else if (style != null && Array.isArray(style)) {
      return style.reduce((prevValue: string, thisStyle: PrettyLogStyles) => styleWrap(prevValue, thisStyle), value);
    } else {
      if (style != null && style[value.trim()] != null) {
        return styleWrap(value, style[value.trim()]);
      } else if (style != null && style["*"] != null) {
        return styleWrap(value, style["*"]);
      } else {
        return value;
      }
    }
  };

  return templateString.replace(/{{(.+?)}}/g, (_, placeholder) => {
    const value = values[placeholder] != null ? values[placeholder] : hideUnsetPlaceholder ? "" : _;
    return settings.stylePrettyLogs ? styleWrap(value, settings?.prettyLogStyles?.[placeholder]) + ansiColorWrap("", prettyLogStyles.reset) : value;
  });
}
