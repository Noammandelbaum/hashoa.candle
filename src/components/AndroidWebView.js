import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { CopyToClipboard } from 'react-copy-to-clipboard';



export default function AndroidWebView() {
    const [isCopied, setIsCopied] = useState(false);
    const textToCopy = 'https://hashoabneiakiva.vercel.app/';

    return (
        <>

            <Box
                sx={{ mt: 10 }}
            >
                <Typography
                    component="div"
                    variant="h8"
                    style={{
                        fontFamily: 'Rubik, sans-serif',
                        color: '#ffffff',
                    }}
                >
                    {"לצערנו האתר אינו נתמך על ידי פייסבוק/אינסטגרם,"}
                </Typography>
                <Typography
                    component="div"
                    variant="h8"
                    style={{
                        fontFamily: 'Rubik, sans-serif',
                        color: '#ffffff',
                    }}
                >
                    {"נא לעבור לדפדפן הרגיל (גוגל) ולהדביק את הקישור."}
                </Typography>
            </Box>
            <Box
                sx={{ mt: 2 }}
            />
            {!isCopied ?
                <>
                    <CopyToClipboard
                        text={textToCopy}
                        onCopy={() => setIsCopied(true)}>
                        <Button
                            style={{
                                fontFamily: 'Rubik, sans-serif',
                                color: '#ffffff',
                            }}
                            sx={{
                                "& .MuiButton-startIcon": { marginRight: "0px", marginLeft: "4px" }
                            }}
                            fullWidth
                            variant="contained"
                            size="large"
                            startIcon={<ContentCopyIcon />}>
                            {"להעתקת קישור האתר"}
                        </Button>
                    </CopyToClipboard>

                </>
                :
                <Button
                    style={{
                        fontFamily: 'Rubik, sans-serif',
                        color: '#ffffff',
                    }}
                    sx={{
                        "& .MuiButton-startIcon": { marginRight: "0px", marginLeft: "4px" }
                    }}
                    fullWidth
                    variant="contained"
                    size="large"
                    startIcon={<CheckIcon />}>
                    {"הקישור הועתק בהצלחה"}
                </Button>
            }

        </>
    );
}








