import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import backImg from "../../assets/servicesBack.png";
import {useTranslation} from "react-i18next";
const CollectorsMain = () => {
    const { t, i18n } = useTranslation();
    return (
        <Box sx={{
            paddingBottom: '15%',
            background: `linear-gradient(68.5deg, rgba(65, 59, 59, 0.62) 35.69%, rgba(105, 105, 105, 0) 133.84%), url(${backImg})`,
            backgroundSize: 'cover',

        }}>
            <Container maxWidth={'xl'} className={'animate__animated animate__fadeInLeft wow'}>
                <Box sx={{
                    color: 'white',
                    width: {md: '48%', xs: '100%'},
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '10%',
                    gap: 2,
                    textAlign: {sm: 'left', xs: 'center'}
                }}>
                    <Typography className={'oswFont'} variant={'h1'} sx={{
                        fontSize: {lg: '48px', md: '36px', sm: '30px', xs: '36px'},

                    }}>
                        {t("collectorsMain")}
                    </Typography>
                    <Typography variant={'h3'} sx={{
                        width: {md: '140%', sm: '100%'},
                        fontSize: '24px'
                    }}>
                        {t("collectorsSecond")}
                    </Typography>

                </Box>


            </Container>
        </Box>
    );
};

export default CollectorsMain;
