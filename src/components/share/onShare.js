import html2canvas from 'html2canvas';
import { isIOS } from 'react-device-detect';

export default async function onShare() {
  const element = document.getElementById('print');
  const canvas = await html2canvas(element);
  const data = canvas.toDataURL('image/jpg');
  const response = await fetch(data);
  const blob = await response.blob();
  const filesArray = [new File([blob], 'מדליקים נר בשבוע המודעות לשכול האזרחי.jpg', { type: 'image/jpeg', lastModified: new Date().getTime() })];
  const shareData = {
    files: filesArray,
  };
  if (!isIOS) { shareData.text = 'https://noammandelbaum.github.io/virtual.candle/\n#מדליקים_נר'; }
  navigator.share(shareData).then(() => {
  });
}
