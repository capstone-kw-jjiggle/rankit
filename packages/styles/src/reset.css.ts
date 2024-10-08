import { globalStyle } from '@vanilla-extract/css';
import { reset } from './layers.css';

globalStyle(
  '*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))',
  {
    '@layer': {
      [reset]: {
        all: 'unset',
        display: 'revert',
      },
    },
  },
);

/**
 * Preferred box-sizing value
 */
globalStyle('*, *::before, *::after', {
  '@layer': {
    [reset]: {
      boxSizing: 'border-box',
    },
  },
});

/**
 * Fix mobile Safari increase font-size on landscape mode
 */
globalStyle('html', {
  '@layer': {
    [reset]: {
      MozTextSizeAdjust: 'none',
      WebkitTextSizeAdjust: 'none',
      textSizeAdjust: 'none',
      WebkitFontSmoothing: 'antialiased', // 피그마 디자인을 적용하기 위한 옵션
      MozOsxFontSmoothing: 'grayscale', // 피그마 디자인을 적용하기 위한 옵션
      fontSmooth: 'never', // 피그마 디자인을 적용하기 위한 옵션
    },
  },
});

/**
 * default body style
 */
globalStyle('body', {
  '@layer': {
    [reset]: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
  },
});

/**
 * Reapply the pointer cursor for anchor tags
 */
globalStyle('a, button', {
  '@layer': {
    [reset]: {
      cursor: 'pointer',
    },
  },
});

/**
 * Remove list styles (bullets/numbers)
 */
globalStyle('ol, ul, menu, summary', {
  '@layer': {
    [reset]: {
      listStyle: 'none',
    },
  },
});

/**
 * For images to not be able to exceed their container
 */
globalStyle('img', {
  '@layer': {
    [reset]: {
      maxInlineSize: '100%',
      maxBlockSize: '100%',
    },
  },
});

/**
 * Removes spacing between cells in tables
 */
globalStyle('table', {
  '@layer': {
    [reset]: {
      borderCollapse: 'collapse',
    },
  },
});

/**
 * Safari - solving issue when using user-select:none on the <body> text input
 * doesn't working
 */
globalStyle('input, textarea', {
  '@layer': {
    [reset]: {
      WebkitUserSelect: 'auto',
    },
  },
});

/**
 * Revert the 'white-space' property for textarea elements on Safari
 */
globalStyle('textarea', {
  '@layer': {
    [reset]: {
      whiteSpace: 'revert',
    },
  },
});

/**
 * Minimum style to allow to style meter element
 */
globalStyle('meter', {
  '@layer': {
    [reset]: {
      WebkitAppearance: 'revert',
      appearance: 'revert',
    },
  },
});

/**
 * Preformatted text - use only for this feature
 */
globalStyle(':where(pre)', {
  '@layer': {
    [reset]: {
      all: 'revert',
      boxSizing: 'border-box',
    },
  },
});

/**
 * Reset default text opacity of input placeholder
 */
globalStyle('::placeholder', {
  '@layer': {
    [reset]: {
      color: 'unset',
    },
  },
});

/**
 * Fix the feature of 'hidden' attribute. display:revert; revert to element
 * instead of attribute
 */
globalStyle(':where([hidden])', {
  '@layer': {
    [reset]: {
      display: 'none',
    },
  },
});

/**
 * Revert for bug in Chromium browsers
 *
 * - Fix for the content editable attribute will work properly.
 * - Webkit-user-select: auto; added for Safari in case of using user-select:none
 *   on wrapper element
 */
globalStyle(':where([contenteditable]:not([contenteditable="false"]))', {
  // @ts-expect-error: -webkit-line-break is a non-standard property
  '@layer': {
    [reset]: {
      MozUserModify: 'read-write',
      WebkitUserModify: 'read-write',
      overflowWrap: 'break-word',
      WebkitLineBreak: 'after-white-space',
      WebkitUserSelect: 'auto',
    },
  },
});

/**
 * Apply back the draggable feature - exist only in Chromium and Safari
 */
globalStyle(':where([draggable="true"])', {
  '@layer': {
    [reset]: {
      // @ts-expect-error: -webkit-user-drag is a non-standard property
      WebkitUserDrag: 'element',
    },
  },
});

/**
 * Revert Modal native behavior
 */
globalStyle(':where(dialog:modal)', {
  '@layer': {
    [reset]: {
      all: 'revert',
      boxSizing: 'border-box',
    },
  },
});
