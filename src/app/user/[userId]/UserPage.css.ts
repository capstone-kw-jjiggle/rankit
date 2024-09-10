import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const containerStyle = style({
  width: '100%',
});

export const sharedDivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',

  margin: '0 auto',
  padding: '0 3.8rem',
  width: 1180,

  '@media': {
    '(max-width: 1180px)': {
      justifyContent: 'center',
      gap: '3rem',
      width: '100%',
    },
  },
});

export const topDivStyle = style({
  paddingTop: '12rem',
  height: 728,
  backgroundColor: globalTheme.colors.white,
});

export const middleDivStyle = style({
  height: 921,
  backgroundColor: globalTheme.colors.gray_bg_06,
});

export const bottomDivStyle = style({
  height: 669,
  backgroundColor: globalTheme.colors.white,
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const topSectionStyle = style({
  display: 'flex',
  marginBottom: '8.8rem',
});

export const buttonDivStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.8rem',
});
