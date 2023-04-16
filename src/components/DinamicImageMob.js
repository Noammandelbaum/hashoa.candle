import {
    Avatar,
    Box,
    IconButton,
    Typography,
} from '@mui/material';
import Image from 'mui-image';
import React, { useState } from 'react';
import candle_header from '../מדליקים נר - יום השואה.jpg';
import ShareButton from './share/ShareButton';
import InlineEditField from './InlineEditField';
import CreateIcon from '@mui/icons-material/Create';
import { isMobile } from 'react-device-detect';

export default function DinamicImageMob() {
    const [inputStat, setInputStat] = useState(false);

    return (
        <>
            <Box
                display="flex"
                flexDirection="row"
            >
                <Box
                    display="flex"
                    flexDirection="column-reverse"
                    justifyContent="flex-end"
                >
                    <ShareButton />
                    <IconButton
                        onClick={() => setInputStat(!inputStat)}
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
                        borderColor: '#ffffff'
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
