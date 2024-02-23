const backgroundColor = "#101010";
const foregroundColor = "#ffffff";

const black = "#101010";
const blue = "#aca1cf";
const cyan = "#ea83a5";
const green = "#90b99f";
const magenta = "#e29eca";
const red = "#f5a191";
const white = "#A0A0A0";
const yellow = "#e6b99d";

const lightBlack = "#7E7E7E";
const lightBlue = "#b9aeda";
const lightCyan = "#f591b2";
const lightGreen = "#99FFE4";
const lightMagenta = "#ecaad6";
const lightRed = "#ff8080";
const lightWhite = "#ffffff";
const lightYellow = "#FFC799";

const borderColor = "#00000000";

const cursorColor = "BFBEEE";
const cursorAccentColor = backgroundColor;

const selectionColor = "#BFBEEE25";

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    cursorAccentColor,
    selectionColor,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite,
    },
    css: `
    /* source: https://github.com/sindresorhus/hyper-snazzy */

    /* Hide title when only one tab */
    .tabs_title {
      display: none !important;
    }

    /* Fade the title of inactive tabs and the content of inactive panes */
    .tab_text,
    .term_term {
      opacity: 0.6;
      will-change: opacity;
    }
    .tab_active .tab_text,
    .term_active .term_term {
      opacity: 1;
      transition: opacity 0.12s ease-in-out;
    }

    /* Allow custom css / overrides */
    ${config.css}
  `,
  });
