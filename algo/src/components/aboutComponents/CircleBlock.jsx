import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import circle from '../../assets/circle.png'
import blood from '../../assets/blood.png'
import {useTranslation} from "react-i18next";
import circleImg from '../../assets/circleImg.png'

const CircleBlock = () => {
    const {t, i18n} = useTranslation();
    const advantages = [
        t("benefit1"),
        t("benefit2"),
        t("benefit3"),
        t("benefit4"),
        t("benefit5"),
        t("benefit6"),
    ]
    const typography = {fontSize: {lg:'22px', sm: '18px'}, width: {md: '300px',sm: '35%'}, border: '1px solid grey', borderRadius: '20px', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center'}
    const typo2 = {fontSize: {lg:'22px', sm: '18px'}, border: '1px solid grey', borderRadius: '20px', height: '160px', display: 'flex', alignItems: 'center'}
    return (
        <Container maxWidth={'md'}>
            <Box className={'animate__animated animate__fadeInUp wow'} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography   sx={{
                    fontSize: {sm: '32px', xs: '28px'},
                    textAlign: 'center',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    {t("benefitsBlock")}
                </Typography>
                <Box sx={{
                    display: {sm: 'flex', xs: 'none'},
                    flexDirection: 'column',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '40px',
                    fontWeight: '500',
                    // width: {md: '100%', sm: '80%'},
                }}>
                    {/*<Box component={'img'} src={circleImg} sx={{height: {md: '150px', sm: '130px'}, width: { md: '150px', sm: '130px'}, marginBottom: '40px'}}/>*/}
                    <Box sx={{width: '40%', margin: '0 auto', paddingBottom: '40px'}}>
                        <Typography sx={typo2}>{t("benefit1")}</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 30}}>
                        <Typography sx={typography}>{t("benefit6")}</Typography>
                        <Typography sx={typography}>{t("benefit2")}</Typography>
                    </Box>
                    <Box component={'img'} src={circleImg} sx={{width: {lg:'200px', md: '150px', sm: '130px'}, margin: '0 auto'}}/>
                    <Box  sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',  gap: 30}}>
                        <Typography sx={typography}>{t("benefit5")}</Typography>
                        <Typography sx={typography}>{t("benefit3")}</Typography>
                    </Box>
                    <Box sx={{width: {md: '40%', sm: '60%'}, margin: '0 auto', paddingTop: '40px'}}>
                        <Typography sx={typo2}>{t("benefit4")}</Typography>
                    </Box>



                </Box>


                <Box sx={{display: {sm: 'none', xs: 'flex', flexDirection: 'column', alignItems: 'center'}}}>
                    {advantages.map((advantage, index) => (
                        <Box sx={{textAlign: 'center'}} key={index}>
                            <Typography sx={{
                                textAlign: 'center',
                                marginTop: '10px',
                                fontSize: {xl: '28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}
                            }}>
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
