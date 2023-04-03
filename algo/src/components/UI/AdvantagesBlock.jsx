import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import point from '../../assets/pointRight.png'
import {useTranslation} from "react-i18next";

const AdvantagesBlock = () => {
    const { t, i18n } = useTranslation();
    const advantages = [
        t("point1"),
        t("point2"),
        t("point3"),
        t("point4"),
        t("point5"),
        t("point6"),
        t("point7"),
    ]
    return (
        <Container maxWidth={'xl'}>
            <Typography className={'oswFont'} variant={'h4'} sx={{fontSize: {sm:'34px', xs: '28px'}, textAlign: 'center', marginTop: '5%', }}>
                {t("whyUsBlock")}
            </Typography>
            <Box sx={{marginTop: '4%', marginBottom: '5%'}}>
                {advantages.map((advantage, index) => (
                    <Box key={index} sx={{display: 'flex', alignItems: 'center'}}>
                        <img src={point} alt={'point'} style={{width: '20px', height: '20px'}}/>
                        <Typography variant={'h5'} sx={{fontSize: {sm:'28px', xs: '20px'}, marginLeft: '4%'}}>
                            {advantage}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default AdvantagesBlock;
