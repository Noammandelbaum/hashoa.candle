import {
    Avatar,
    Box,
    IconButton,
    Typography,
} from '@mui/material';
import Image from 'mui-image';
import React, { useState, useRef } from 'react';
import candle_header from '../מדליקים נר - יום השואה.jpg';
import ShareButton from './share/ShareButton';
import InlineEditField from './InlineEditField';
import CreateIcon from '@mui/icons-material/Create';

const margin = 1;

export default function DinamicImageMob() {
    // const [personalText, setPersonalText] = useState('');
    // const [readyToWrite, setReadyToWrite] = useState(false);
    const textInputRef = React.createRef();
    const focusTextInput = () => {
        textInputRef.current.focus();
    };

    return (
        <>
            {/* <Typography
                style={{
                    fontFamily: 'Assistant',
                    color: '#1da398',
                }}
                gutterBottom
                variant="h6"
                component="div"
            >
                {
                    'הצטרפו לאלפי אנשים המדליקים נרות ומחבקים את משפחת השכול האזרחי'
                }
            </Typography> */}
            <Box display="flex" flexDirection="row-reverse">
                <Box
                    display="flex"
                    flexDirection="column-reverse"
                    justifyContent="flex-end"
                >
                    <ShareButton />
                    <IconButton
                        onClick={focusTextInput}
                        color="primary"
                        aria-label="write"
                        size="large"
                        sx={{
                            py: 1, pl: 1, pr: 0,
                        }}
                    >
                        <Avatar sx={{ bgcolor: '#1976d2' }}>
                            <CreateIcon />
                        </Avatar>
                    </IconButton>
                </Box>
                <Box
                    sx={{ mb: margin }}
                />
                <Box
                    borderColor='rgba(0, 0, 0, 0.87)'
                    sx={{ border: 2 }}
                >
                    <div id="print">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                bgcolor: '#f4edd5',
                            }}
                        >
                            <Image
                                src={candle_header}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    mx: 2,
                                }}
                            >
                                <InlineEditField textInputRef={textInputRef} />
                            </Box>
                        </Box>
                    </div>
                </Box>
            </Box>
        </>
    );
}
