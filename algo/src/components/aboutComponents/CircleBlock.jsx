import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import circle from '../../assets/circle.png'
import blood from '../../assets/blood.png'
import {useTranslation} from "react-i18next";

const CircleBlock = () => {
    const { t, i18n } = useTranslation();
    const advantages = [
        t("benefit1"),
        t("benefit2"),
        t("benefit3"),
        t("benefit4"),
        t("benefit5"),
        t("benefit6"),
    ]
    return (
        <Container maxWidth={'xl'}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography sx={{fontSize: {sm:'34px', xs: '28px'}, textAlign: 'center', marginTop: '40px', fontWeight: 'bold'}}>
                    {t("benefitsBlock")}
                </Typography>
                <Box sx={{display: {sm: 'flex', xs: 'none'}, flexDirection: 'column', alignItems: 'center', marginTop: '40px'}}>
                    <img src={circle} alt="circle" style={{width: '80%'}}/>
                </Box>
                <Box sx={{display: {sm: 'none', xs: 'flex', flexDirection: 'column', alignItems: 'center'}}}>
                    {advantages.map((advantage, index) => (
                        <Box sx={{textAlign: 'center'}} key={index}>
                            <Typography sx={{textAlign: 'center', marginTop: '10px', fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>
                                {advantage}
                            </Typography>
                            <img src={blood} alt='blood' style={{width: '20px', marginTop: '10px'}}/>
                        </Box>
                    ))}
                </Box>

            </Box>
        </Container>
    );
};

export default CircleBlock;
