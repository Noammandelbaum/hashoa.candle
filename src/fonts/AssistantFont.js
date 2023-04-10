import {
  Box, createTheme, CssBaseline, ThemeProvider,
} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Assistant',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
     /* hebrew */
@font-face {
  font-family: 'Assistant';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/assistant/v18/2sDPZGJYnIjSi6H75xkZZE1I0yCmYzzQtmZgIGSV35Gu.woff2) format('woff2');
  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* latin-ext */
@font-face {
  font-family: 'Assistant';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/assistant/v18/2sDPZGJYnIjSi6H75xkZZE1I0yCmYzzQtmZgIGiV35Gu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Assistant';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/assistant/v18/2sDPZGJYnIjSi6H75xkZZE1I0yCmYzzQtmZgIGaV3w.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
} 
      `,
    },
  },
});

export default function AssistantFont() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          fontFamily: 'Assistant',
        }}
      />
    </ThemeProvider>
  );
}
