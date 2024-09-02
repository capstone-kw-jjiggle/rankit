import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';
import { topDivStyle } from './../auth/_components/authGithub/authGithub.css';

export const divStyle = style({
  width: '100%',
});

export const sectionStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  height: '100%',

  '@media': {
    '(max-width: 1180px)': {
      justifyContent: 'center',
      gap: '4rem',
      height: '80%',
    },
  },
});

export const headingStyle = style({
  ...globalTheme.fonts.titleSemiBold56,
});

export const paragraphStyle = style({
  ...globalTheme.fonts.bodySemiBold26,
});

export const rightDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  textAlign: 'end',
});

export const titleStyle = style({
  ...globalTheme.fonts.titleBold32,
  color: globalTheme.colors.blue_main,
});

export const tierImgDivStyle = style({
  display: 'flex',
  flexDirection: 'row',
  height: '4.8rem',
  gap: '1.6rem',
});
