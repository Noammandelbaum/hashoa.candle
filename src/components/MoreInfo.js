import { Box, Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import './MoreInfo.css'
const margin = 3;

export default function MoreInfo() {
  return (
    <Container
      sx={{
        pr: 6
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
        <Box className="Info">
          <Typography
            variant="h8"
            component="div"
            style={{
              color: 'rgb(217 217 217)',
            }}
          >
            {"מצטרפים ומדליקים נר"}
          </Typography>
          <Typography
            variant="h8"
            component="div"
            style={{
              color: 'rgb(217 217 217)',
            }}
          >
            {"כדי לזכור את אלה שאינם ♡"}
          </Typography>
          <Typography
            variant="h8"
            component="div"
            style={{
              color: 'rgb(217 217 217)',
            }}

          >
            {"ממשיכים לפעול להנצחת זכרון השואה ♡"}
          </Typography>
          <Typography
            variant="h8"
            component="div"
            sx={{ mb: margin }}
            style={{
              color: 'rgb(217 217 217)',
            }}
          >
            {`נר ועוד נר לחיבור גדול ♡`}
          </Typography>
        </Box>
        {/* <Link sx={{ mb: 1 }}
          href="https://www.facebook.com/hashtag/%D7%9E%D7%93%D7%9C%D7%99%D7%A7%D7%99%D7%9D_%D7%A0%D7%A8?paipv=0&eav=Afa6id6Sn5JhavJmfc2YAwBIMq5g9maCMQEIygRgRFT6A69hqoi0V7hhrTFuQ2-M_pE"
        >
          צפו בנרות שהודלקו:  #מדליקים_נר
        </Link>
        <Link
          href="https://yakirli.org/awareness-week/"
        >
          למידע אודות שבוע המודעות לשכול האזרחי
        </Link> */}
      </Box>
    </Container>
  );
}
