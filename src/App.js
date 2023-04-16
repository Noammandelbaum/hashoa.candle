import './App.css';
import Box from '@mui/system/Box';
import { isMobile, isAndroid } from 'react-device-detect';
import RubicFont from './fonts/RubicFont';
import MoreInfo from './components/MoreInfo';
import AndroidWebView from './components/AndroidWebView';
import DinamicImageMob from './components/DinamicImageMob';
import Header from './components/Header';

const margin = 1;
const maxWid = isMobile ? null : '340px';
const isWebView = navigator.userAgent.includes('wv')

function App() {
  return (
    <div className="App">

      <RubicFont />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          m: margin,
          ml:2,
          bgcolor: '#005C99',
        }}
        maxWidth={maxWid}
      >
        {(isAndroid && isWebView) ?
          // for Android web view clients here
          <AndroidWebView />
          :
          <>
            <Header/>
            <DinamicImageMob />
            <MoreInfo />
          </>}
      </Box>

    </div>
  );
}

export default App;
