import ShareIcon from '@mui/icons-material/Share'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from '@mui/material';
import { isMobile } from 'react-device-detect';
import onShare from './onShare';
import onDownload from './onDownload';

export default function ShareButton(props) {

  return (
    isMobile ?
      <Button
        sx={{mt:1}}
        fullWidth
        variant="outlined"
        size="large" onClick={onShare}
        endIcon={<ShareIcon />}>
        {props.textToDisplay}
      </Button>
      :
      <Button
        sx={{ mt: 1 }}
        fullWidth
        variant="outlined"
        size="large" onClick={onDownload}
        endIcon={<FileDownloadIcon />}>
        {props.textToDisplay}
      </Button>


  );
}
