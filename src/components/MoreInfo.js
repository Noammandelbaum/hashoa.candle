import { Box, Link, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './MoreInfo.css'
const margin = 3;

export default function MoreInfo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#f4edd5',
        mt: margin,
      }}
    >
      <Box className="Info">
        <Typography
          variant="h8"
          component="div"
        >
          {"!מצטרפים למיזם ומדליקים נר"}
        </Typography>
        <Typography
          variant="h8"
          component="div"
        >
          {".כדי לזכור את אלה שאינם ♡"}
        </Typography>
        <Typography
          variant="h8"
          component="div"

        >
          {"!כדי לומר למשפחות השכולות: אנחנו אתכם ♡"}
        </Typography>
        <Typography
          variant="h8"
          component="div"
          sx={{ mb: margin }}
        >

          {`.כדי שנצרף יחד נר ועוד נר לחיבור גדול שכולו אור ♡`}

        </Typography>
      </Box>
      <Link sx={{ mb: 1 }}
        href="https://www.facebook.com/hashtag/%D7%9E%D7%93%D7%9C%D7%99%D7%A7%D7%99%D7%9D_%D7%A0%D7%A8?paipv=0&eav=Afa6id6Sn5JhavJmfc2YAwBIMq5g9maCMQEIygRgRFT6A69hqoi0V7hhrTFuQ2-M_pE"
      >
        צפו בנרות שהודלקו:  #מדליקים_נר
      </Link>
      <Link 
        href="https://yakirli.org/awareness-week/"
      >
        למידע אודות שבוע המודעות לשכול האזרחי
      </Link>
    </Box>
  );
}
