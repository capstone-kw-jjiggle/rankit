import { globalTheme } from '@rankit/styles/*';
import { style, styleVariants } from '@vanilla-extract/css';

export const paragraphStyle = styleVariants({
  lg: { height: '2.4rem' },
  sm: { height: '2rem' },
});

export const commonButtonStyle = style({
  display: 'flex',
  borderRadius: 8,
  textAlign: 'center',
});

export const buttonStyle = styleVariants({
  lg: [
    commonButtonStyle,
    { ...globalTheme.fonts.mobileBodyMed16, padding: '0.9rem 1.6rem' },
  ],
  sm: [
    commonButtonStyle,
    { ...globalTheme.fonts.mobileDetailSemiBold14, padding: '0.4rem 1.2rem' },
  ],
});

export const colorVariant = styleVariants({
  primary: {
    backgroundColor: globalTheme.colors.blue_main,
    color: globalTheme.colors.white,
  },
  secondary: {
    backgroundColor: globalTheme.colors.gray_bg_04,
    color: globalTheme.colors.gray_19,
  },
});
