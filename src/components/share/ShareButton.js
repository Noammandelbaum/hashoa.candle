import ShareIcon from '@mui/icons-material/Share'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Avatar, Button, IconButton } from '@mui/material';
import { isMobile } from 'react-device-detect';
import onShare from './onShare';
import onDownload from './onDownload';

export default function ShareButton(props) {

  return (
    isMobile ?
      <IconButton
        aria-label="share"
        size="large"
        onClick={onShare}
        color='primary'
        sx={{ py: 1, pl: 1, pr: 0 }}
      >
        <Avatar
          sx={{
            bgcolor: '#f6cf17',
            color: 'rgba(0, 0, 0, 0.87)'
          }}
        >
          <ShareIcon />
        </Avatar>
      </IconButton>
      :
      // <Button
      //   sx={{ mt: 1 }}
      //   fullWidth
      //   variant="outlined"
      //   size="large" onClick={onDownload}
      //   endIcon={<FileDownloadIcon />}>
      //   {props.textToDisplay}
      // </Button>
      <IconButton
        onClick={onDownload}
        aria-label="share"
        size="large"
        color='primary'
        sx={{ py: 1, pl: 1, pr: 0 }}
      >
        <Avatar
          sx={{
            bgcolor: '#f6cf17',
            color: 'rgba(0, 0, 0, 0.87)'
          }}
        >
          <FileDownloadIcon />
        </Avatar>
      </IconButton>


  );
}
