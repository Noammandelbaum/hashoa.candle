import { Box } from '@mui/material';
import ShareButton from './share/ShareButton';

const margin = 1;

export default function SharingArea() {
  const textToDisplay="שתפו ותייגו: #מדליקים_נר"
  return (
    <>
      <ShareButton textToDisplay={textToDisplay} />
    </>
  );
}
