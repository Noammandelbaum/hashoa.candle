import {
    Box,
    Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';

export default function Header() {
    return (
        <Container sx={{ pr: 7, pl: 1, mb: 1 }}>
            <Box>
                <Box
                    sx={{ alignItems: 'right', my: 1, textAlignLast:"center" }}
                    textAlign="justify"
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
                    >
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
                            sx={{ mt: 1 }}
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
                                'אנו מבקשים להקדיש את הנר לזכר קרובי משפחה, קהילות, דמויות או נר כללי.'}
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
                            {'בררו אצל ההורים על קרוב או אחר שנספה בשואה, הוסיפו את שמו והדליקו נר לזכרו/ה.'}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}