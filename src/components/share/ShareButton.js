import ShareIcon from '@mui/icons-material/Share'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Avatar, Button, IconButton } from '@mui/material';
import { isMobile } from 'react-device-detect';
import onShare from './onShare';
import onDownload from './onDownload';
import React from 'react';

export default function ShareButton(props) {

  return (
    isMobile ?
      <IconButton className='plausible-event-name=Share+button'
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
      <IconButton className='plausible-event-name=Download+button'
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
