import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { CopyToClipboard } from 'react-copy-to-clipboard';



export default function AndroidWebView() {
    const [isCopied, setIsCopied] = useState(false);
    const textToCopy = "https://noammandelbaum.github.io/virtual.candle/";

    // function copyURL() {
    //     navigator.clipboard.writeText(textToCopy)
    //         .then(() => {
    //             setIsCopied(false);
    //         })
    //         .catch((error) => {
    //             console.error('Error copying text to clipboard:', error);
    //         });
    // }

    return (
        <>
            <Box
                sx={{ mt: 10 }}
            />
            <Typography
                variant="h8"
            >
                ,לצערנו האתר אינו נתמך על ידי פייסבוק
            </Typography>
            <Typography
                variant="h8"
            >
                {".נא לעבור לדפדפן הרגיל (גוגל) ולהדביק את הקישור"}
            </Typography>
            <Box
                sx={{ mt: 2 }}
            />
            {!isCopied ?
                <>
                    <CopyToClipboard
                        text={textToCopy}
                        onCopy={() => setIsCopied(true)}>
                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            endIcon={<ContentCopyIcon />}>
                            להעתקת קישור האתר
                        </Button>
                    </CopyToClipboard>

                </>
                :
                <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    endIcon={<CheckIcon />}>
                    הקישור הועתק בהצלחה
                </Button>
            }

        </>
    );
}








