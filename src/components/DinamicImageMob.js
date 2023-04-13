import {
    Avatar,
    Box,
    IconButton,
    Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
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
            <Container
                sx={{
                    pr: 6
                }}>
                <Box
                    display="flex"
                    flexDirection="row-reverse"
                    justifyContent="center">
                    <Box
                        display="flex"
                        flexDirection="column-reverse"
                        justifyContent="flex-end"
                        sx={{ alignItems: 'right', my: 1 }}
                    >
                        <Typography
                            sx={{ mb: 0, }}
                            style={{
                                fontFamily: 'Assistant',
                                color: 'rgb(217 217 217)',
                              
                            }}
                            gutterBottom
                            variant="h6"
                            component="div"
                        >
                            {

                                'לזכור את השואה, להנציח את הנספים'
                            }
                        </Typography>
                        {/* <Typography
                            style={{
                                fontFamily: 'Assistant',
                                // color: '#000000',
                            }}
                            gutterBottom
                            variant="h6"
                            component="div"
                        >
                            {
                                'לזכור את השואה'
                            }
                        </Typography> */}
                        <Typography
                            style={{
                                fontFamily: 'Assistant',
                                color: 'rgb(217 217 217)',
                            }}
                            sx={{ mb: 0, }}
                            gutterBottom
                            variant="h6"
                            component="div"
                        >

                            {
                                'הצטרפו והדליקו נר'
                            }
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <Box display="flex" flexDirection="row-reverse">
                <Box
                    display="flex"
                    flexDirection="column-reverse"
                    justifyContent="flex-end"
                >
                    <ShareButton />
                    <IconButton
                        onClick={focusTextInput}
                        color='#f6cf17'
                        aria-label="write"
                        size="large"
                        sx={{
                            py: 1, pl: 1, pr: 0,
                        }}
                    >
                        <Avatar
                            sx={{
                                bgcolor: '#f6cf17',
                                color: 'rgba(0, 0, 0, 0.87)'
                            }}>
                            <CreateIcon />
                        </Avatar>
                    </IconButton>
                </Box>
                <Box
                    sx={{ mb: margin }}
                />
                <Box
                    style={{
                        borderColor: 'rgb(217 217 217)'
                    }}
                    sx={{ border: 2, }}
                >
                    <div id="print">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                bgcolor: '#f6cf17',
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
