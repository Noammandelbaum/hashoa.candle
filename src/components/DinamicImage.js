import {
  Button,
  Card, CardContent, TextField, Typography,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import Image from 'mui-image';
import { useState } from 'react';
import candle_header from '../yakir title.jpeg';
import ShareButton from './share/ShareButton';
import { Box } from '@mui/system';

const margin = 1;
// const buttonStyles = {
//   fontFamily: 'Assistant',
//   mb: margin,
//   color: '#1da398',
//   border: '1px solid #1da398',
// };
// const textFieldStyles = {
//   fontFamily: 'Assistant',
//   mb: margin,
//   color: '#1da398',
// };

export default function DinamicImage() {
  const [personalText, setPersonalText] = useState();
  const [readyToWrite, setReadyToWrite] = useState(false);
  const textToDisplay = "שתפו ותייגו #מדליקים_נר"

  return (

    <>
      <Typography
        style={{
          fontFamily: 'Assistant',
          color: '#1da398',
        }}
        gutterBottom
        variant="h6"
        component="div"
      >
        {'הצטרפו לאלפי אנשים המדליקים נרות ומחבקים את משפחת השכול האזרחי'}
      </Typography>
      <Button
        fullWidth
        variant="outlined"
        size="large" onClick={() => { setReadyToWrite(!readyToWrite) }}
        endIcon={<CreateIcon />}>
        ניתן להוסיף שם אישי
      </Button>
      {readyToWrite &&
        <TextField
          onChange={(e) => {
            setPersonalText(e.target.value);
          }}
          inputProps={{
            maxLength: 40,
            direction: 'rtl',
            style: { textAlign: 'right' }
          }}
          sx={{
            mt: margin,
            "& label": {
              left: "unset",
              right: "1.7rem",
              transformOrigin: "right",
            },
            "& legend": {
              textAlign: "right",
              fontSize: "0.7rem",
            },
          }}
          variant="outlined"
          label="...זוכרים באהבה את"
          fullWidth
          autoFocus
        />}


      <ShareButton textToDisplay={textToDisplay} />
      <Box sx={{ mb: margin }} />
      <div id="print">
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#f4edd5',
            mb: margin,
          }}
        >
          <Image
            src={candle_header}
          />
          <CardContent>
            <Typography
              style={{
                fontFamily: 'Assistant',
                color: '#1da398',
              }}
              gutterBottom
              variant="h6"
              component="div"
            >
              {personalText ? 'זוכרים באהבה את' : 'מחבקים באהבה את'}
            </Typography>
            <Typography
              style={{
                fontFamily: 'Assistant',
                color: '#1da398',
              }}
              gutterBottom
              variant="h4"
              component="div"
            >
              {personalText ? ` ${personalText}` : 'משפחות השכול האזרחי'}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
