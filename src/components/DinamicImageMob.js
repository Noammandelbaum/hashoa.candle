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
import { isMobile } from 'react-device-detect';


const margin = 1;

export default function DinamicImageMob() {
    // const [personalText, setPersonalText] = useState('');
    // const [readyToWrite, setReadyToWrite] = useState(false);
    const [inputStat, setInputStat] = useState(false);
    // const textInputRef = React.createRef();
    // const focusTextInput = () => {
    //     textInputRef.current.focus();
    // };

    return (
        <>
            <Container sx={{ pr: 6, pl: 1, mb: 1 }}>
                <Box
                // display="flex"
                // flexDirection="row-reverse"
                // justifyContent="center"
                >

                    <Box
                        // display="flex-end"
                        // flexDirection="column-reverse"
                        // justifyContent="flex-end"
                        // alignItems="right"
                        sx={{ alignItems: 'right', my: 1 }}
                    >
                        <Typography
                            style={{
                                fontFamily: 'Rubik, sans-serif',
                                color: '#ffffff',
                            }}
                            variant="h6"
                            component="div"
                            textAlign="center"
                        >
                            {
                                `"נר ה' נשמת אדם"`
                            }
                        </Typography>
                        {/* <Container> */}
                        <Box
                        sx={{}}>
                            <Typography
                                style={{
                                    fontFamily: 'Rubik, sans-serif',
                                    color: '#ffffff',
                                    fontSize: 'inherit',
                                }}
                                // gutterBottom
                                variant="h6"
                                component="div"
                            >
                                {
                                    'מרכז ישיבות ואולפנות בני עקיבא מזמין אתכם להשתתף במיזם להנצחת קורבנות השואה. בדור בו הולכים ומתמעטים שורדי השואה מונחת על כתפינו לזכור ולא לשכוח, ולשתף עם בני המשפחה וחברים את אור הזיכרון.'
                                }
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: 'Rubik, sans-serif',
                                    color: '#ffffff',
                                    fontSize: 'inherit',
                                }}
                                // gutterBottom
                                variant="h6"
                                component="div"
                            >
                                {
                                    'ניתן להקדיש את הנר לזכר קרובי משפחה, קהילות, דמויות או נר כללי.'}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>

            <Box
                display="flex" flexDirection="row"
            >
                <Box

                // display="flex"
                // flexDirection="column-reverse"
                // justifyContent="flex-end"
                >
                    <ShareButton />
                    <IconButton
                        onClick={() => setInputStat(true)}
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
                                    bgcolor: '#f6cf17',
                                }}
                            >
                                <InlineEditField
                                    // textInputRef={textInputRef}
                                    inputStat={inputStat}
                                    setInputStat={setInputStat}
                                />
                            </Box>
                        </Box>
                    </div>
                </Box>
            </Box>
        </>
    );
}
