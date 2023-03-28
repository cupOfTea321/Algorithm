import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import MyBtn from "./UI/MyBtn.jsx";
import SecondBtn from "./UI/SecondBtn.jsx";

const FirstBanner = () => {
    return (
        <Container maxWidth={'xl'}>
            <Box sx={{
                color: 'white',
                width: {md: '63%', xs: '100%'},
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '15%',
                gap: 2
            }}>
                <Typography variant={'h1'} sx={{
                    fontSize: {lg: '48px', md: '36px', sm: '30px', xs: '36px'},

                }}>
                    ОПТОВЫЕ ПОСТАВКИ БИОДИЗЕЛЬНОГО И ДИЗЕЛЬНОГО ТОПЛИВА
                </Typography>
                <Typography variant={'h3'} sx={{
                    fontSize: '24px'
                }}>
                    Закажите топливо высокого качества с доставкой за 24 часа
                </Typography>
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    marginTop: '5%',
                    flexDirection: {sm: 'row', xs: 'column'},
                }}>
                    <MyBtn radius={'32px'} height={'70px'}/>
                    <SecondBtn height={'70px'}/>
                </Box>
            </Box>
        </Container>
    );
};

export default FirstBanner;
