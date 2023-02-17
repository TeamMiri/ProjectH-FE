import { style, globalStyle } from '@vanilla-extract/css';

export const myStyle = style({
  display: 'flex',
  paddingTop: '3px',
  color: 'red',
});

globalStyle('body', {
  margin: 0,
});
