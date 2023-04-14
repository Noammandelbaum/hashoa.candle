import {
  Box, createTheme, CssBaseline, ThemeProvider,
} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif',  
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
/* cyrillic-ext */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/rubik/v26/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-2Y-FWkU1Z4Y.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/rubik/v26/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-2Y-FU0U1Z4Y.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* hebrew */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/rubik/v26/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-2Y-FVUU1Z4Y.woff2) format('woff2');
  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* latin-ext */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/rubik/v26/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-2Y-FWUU1Z4Y.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/rubik/v26/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-2Y-FV0U1.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
      `,
    },
  },
});

export default function RubikFont() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          fontFamily: 'Rubik',
        }}
      />
    </ThemeProvider>
  );
}
