import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import MyBtn from "../UI/MyBtn.jsx";
import SecondBtn from "../UI/SecondBtn.jsx";

const AboutBanner = () => {
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
                    Мы одни из первых стали производителями Биодизеля в России
                </Typography>
                <Typography variant={'h3'} sx={{
                    fontSize: '24px'
                }}>
                    Закажите биодизельное топливо высокого качества и ощутите разницу с ископаемым!
                </Typography>
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    marginTop: '5%'
                }}>
                    <MyBtn radius={'32px'}/>
                    <SecondBtn/>
                </Box>
            </Box>
        </Container>
    );
};

export default AboutBanner;
