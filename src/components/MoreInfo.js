import { Box, Divider, Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';
const margin = 3;

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} >
      
      <Link
        color="inherit"
        onClick={() => window.location = 'mailto:noam.mandelbaum@gmail.com'}>
        {'פיתוח האתר - '}
        {'נעם מנדלבאום'}
        {' '}
        {new Date().getFullYear()}
      </Link>

    </Typography>
  );
}

export default function MoreInfo() {
  return (
    <>
      <Container
        sx={{
          pr: 7, pl: 0,
          '@media (min-width: 600px)': {
            pr: 7, pl: 1,
          }
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#005C99',
            mt: margin,
          }}
        >
          <Box
            display="flex"
            flexDirection="column-reverse"
            justifyContent="flex-end"
            sx={{ mr: 3 }}
          />
          <Box       >
            <Typography
              variant="h8"
              component="div"
              style={{
                color: '#ffffff',
              }}
            >
              {"מצטרפים ומדליקים נר:"}
            </Typography>
            <Typography
              variant="h8"
              component="div"
              style={{
                color: '#ffffff',
              }}
            >
              {"• כדי לזכור את אלה שאינם"}
            </Typography>
            <Typography
              variant="h8"
              component="div"
              style={{
                color: '#ffffff',
              }}

            >
              {"• ממשיכים לפעול להנצחת זכרון השואה"}
            </Typography>
            <Typography
              variant="h8"
              component="div"
              style={{
                color: '#ffffff',
              }}
            >
              {`• נר ועוד נר לחיבור גדול`}
            </Typography>
            <Typography
              variant="h8"
              component="div"
              sx={{ mb: margin }}
              style={{
                color: '#ffffff',
              }}
            >
              {`• להוספת שם לחצו על סימן העיפרון מימין`}
            </Typography>
          </Box>

        </Box>
      </Container>
      {/* <Divider flexItem sx={{ mr: -1, ml: -2 }} /> */}
      <Copyright
        sx={{ mt: 4 }}
      />
    </>
  );
}
