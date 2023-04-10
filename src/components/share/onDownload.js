import html2canvas from 'html2canvas';

export default async function onDownload() {
  const element = document.getElementById('print');
  const canvas = await html2canvas(element);
  const data = canvas.toDataURL('image/jpg');
  const link = document.createElement('a');
  link.href = data;
  link.download = 'מדליקים נר בשבוע המודעות לשכול האזרחי.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
