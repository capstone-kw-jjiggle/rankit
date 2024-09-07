import { style } from '@vanilla-extract/css';
import { globalTheme } from '@/shared/styles/globalTheme.css';

export const DivStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.4rem',
  marginTop: '17.2rem',
});

export const DivParagraphStyle = style({
  ...globalTheme.fonts.bodyReg16,
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});
