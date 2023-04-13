import './App.css';
import Box from '@mui/system/Box';
import { isMobile, isAndroid } from 'react-device-detect';
import AssistantFont from './fonts/AssistantFont';
import MoreInfo from './components/MoreInfo';
import DinamicImageWeb from './components/DinamicImageWeb';
import AndroidWebView from './components/AndroidWebView';
import DinamicImageMob from './components/DinamicImageMob';

const margin = 1;
const maxWid = isMobile ? null : '340px';
const isWebView = navigator.userAgent.includes('wv')

function App() {
  return (
    <div className="App">

      <AssistantFont />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          m: margin,
          bgcolor: '#f4edd5',
        }}
        maxWidth={maxWid}
      >
        {(isAndroid && isWebView) ?
          // for Android web view clients here
          <AndroidWebView />
          : <>
            { <DinamicImageMob/>}
            {/* <MoreInfo /> */}
          </>}
      </Box>

    </div>
  );
}

export default App;
