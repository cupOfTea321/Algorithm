import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import rightPoint from '../../assets/pointRight.png'
import {useTranslation} from "react-i18next";

const AboutBlock = () => {
    const { t, i18n } = useTranslation();
    const points = [
        t("warning1"),
        t("warning2"),
        t("warning3"),
        t("warning4"),
    ]
    const rightText = {fontSize: {md: '18px', sm: '14px', xs: '12px'}, marginBottom: '20px', textAlign: 'right'}
    const leftText = {fontSize: {md: '18px', sm: '14px', xs: '12px'}, marginBottom: '20px', textAlign: 'left'}
    return (
            <Container maxWidth={'md'} sx={{position: 'relative'}}>
                <Box sx={{
                    color: 'white',
                paddingTop: {lg: '25%', md: '25%', sm: '30%', xs: '70%'},
                gap: 2,
                width: '100%'}}>
                <Box className={'animate__animated animate__fadeInLeft'} sx={{width:  '80%', }}>
                    <Typography variant={'h4'} sx={{fontSize: {sm: '32px', xs: '28px'}, marginBottom: '20px', paddingTop: '20px', fontWeight: 'bold', textAlign: 'left'}}>
                        {t("leftAbout")}
                    </Typography>
                    <Typography sx={leftText}>
                        <Typography component={'span'} sx={{fontSize: {md: '18px', sm: '14px', xs: '12px'}, marginBottom: '20px', color: '#A40000', fontWeight: 'bold'}}>{t("p1")}</Typography>
                        {t("p2")}
                    </Typography>
                </Box>
                <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}} className={'animate__animated animate__fadeInRight wow'}>
                    <Box sx={{}}>
                    <Typography component={'h2'} sx={{fontSize: {sm: '32px', xs: '28px'},marginBottom: '28px' }}>
                        {t("rightAbout")}
                        <Typography component={'span'} sx={{fontSize: {sm: '32px', xs: '28px'},marginBottom: '28px', color: '#A40000', fontWeight: 'bold'}}>{t("rightAboutRed")}</Typography>
                    </Typography>

                        {points.map((point, index) => (
                            <Box key={index} sx={{textAlign: 'right'}}>
                                {/*<Box component={'img'} src={rightPoint} alt="rightPoint" sx={{height: {sm: '30px', xs: '20px'}, width: {sm: '30px', xs: '20px'}, marginRight: '20px', marginBottom: '20px'}}/>*/}
                                <Typography sx={leftText}>
                                    {point}
                                </Typography>
                            </Box>

                        ))}
                    </Box>

                </Box>
            </Box>
                <Box component={'img'} src={rightPoint} sx={{
                    width: '60px',
                    position: 'absolute',
                    top: '180px',
                    left: '-40px'
                }}/>
        </Container>
    );
};

export default AboutBlock;
