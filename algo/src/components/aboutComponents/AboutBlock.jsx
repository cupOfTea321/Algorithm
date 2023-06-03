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
    const size = {fontSize: {xl: '22px', lg: '18px', md: '16px', sm: '14px', xs: '12px'}, marginBottom: '20px'}
    return (
            <Container maxWidth={'md'}>
                <Box sx={{
                    color: 'white',
                display: 'flex',
                alignItems: 'center',
                flexDirection: {lg: 'row', md:'column', sm: 'column', xs: 'column'},
                paddingTop: {lg: '25%', md: '25%', sm: '30%', xs: '50%'},
                gap: 2
            }}>
                <Box className={'animate__animated animate__fadeInLeft'} sx={{color: 'black', background: 'white', width: {lg: '100%', md: '80%'}, padding: '30px', borderRadius: '20px ', marginRight: {lg: '10px', md: '0', sm: '0', xs: '0'}}}>
                    <Typography variant={'h4'} sx={{marginBottom: '20px', paddingTop: '20px', fontWeight: 'bold'}}>
                        {t("leftAbout")}
                    </Typography>
                    <Typography sx={size}>
                        {t("p1")}
                    </Typography>
                    <Typography sx={size}>
                        {t("p2")}
                    </Typography>
                    <Typography sx={size}>
                        {t("p3")}
                    </Typography>
                </Box>
                <Box sx={{width: '100%'}} className={'animate__animated animate__fadeInRight wow'}>
                    <Typography component={'h2'} sx={{fontSize: '34px', }}>
                        {t("rightAbout")}
                    </Typography>
                    {points.map((point, index) => (
                        <Box key={index} sx={{display: 'flex', alignItems: 'center'}}>
                            <img src={rightPoint} alt="rightPoint" style={{height: '40px', width: '40px', marginRight: '20px'}}/>
                            <Typography sx={{fontSize: '24px', marginBottom: '20px', marginTop: '10px'}}>
                                {point}
                            </Typography>
                        </Box>

                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default AboutBlock;
