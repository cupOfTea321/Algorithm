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
    return (
        <Container maxWidth={'xl'}>
            <Box sx={{
                color: 'white',
                // width: {md: '63%', xs: '100%'},
                display: 'flex',

                alignItems: 'center',
                flexDirection: {lg: 'row', md:'column', sm: 'column', xs: 'column'},
                paddingTop: {lg: '15%', md: '25%', sm: '30%', xs: '50%'},
                gap: 2
            }}>
                <Box sx={{color: 'black', background: 'white', width: {lg: '45%', md: '80%'}, padding: '10px', borderRadius: '20px ', marginRight: {lg: '60px', md: '0', sm: '0', xs: '0'}}}>
                    <Typography variant={'h4'} sx={{marginBottom: '20px', paddingTop: '20px'}}>
                        {t("leftAbout")}
                    </Typography>
                    <Typography sx={{fontSize: {xl: '32px', lg: '28px', md: '26px', sm: '20px', xs: '16px'}, marginBottom: '20px'}}>
                        {t("p1")}
                    </Typography>
                    <Typography sx={{fontSize: {xl: '32px', lg: '28px', md: '26px', sm: '20px', xs: '16px'}, marginBottom: '20px'}}>
                        {t("p2")}
                    </Typography>
                    <Typography sx={{fontSize: {xl: '32px', lg: '28px', md: '26px', sm: '20px', xs: '16px'}, marginBottom: '20px'}}>
                        {t("p3")}
                    </Typography>
                </Box>
                <Box>
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
