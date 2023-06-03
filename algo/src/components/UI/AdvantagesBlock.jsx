import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import point from '../../assets/pointRight.png'
import {useTranslation} from "react-i18next";
import cloud from '../../assets/cloud.png'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const AdvantagesBlock = () => {
    const { t, i18n } = useTranslation();
    const advantages = [
        {text: t("point1"), icon: <WorkspacePremiumOutlinedIcon sx={{width: '100px', height: '100px'}}/>},
        {text: t("point2"), icon: <ScienceOutlinedIcon sx={{width: '100px', height: '100px'}}/>},
        {text: t("point3"), icon: <InfoOutlinedIcon sx={{width: '100px', height: '100px'}}/>},
        {text: t("point4"), icon:   <LocalShippingOutlinedIcon sx={{width: '100px', height: '100px'}}/>},
        {text: t("point6"), icon: <HandshakeOutlinedIcon sx={{width: '100px', height: '100px'}}/> },
        {text: t("point7"), icon: <SearchOutlinedIcon sx={{width: '100px', height: '100px'}}/>},
    ]
    return (
        <Container maxWidth={'md'} className={'animate__animated animate__fadeInUp wow'}>
            <Typography className={'oswFont'} variant={'h4'} sx={{fontSize: {sm:'34px', xs: '28px'}, textAlign: 'center', marginTop: '5%', }}>
                {t("whyUsBlock")}
            </Typography>
            <Grid container spacing={4} sx={{marginTop: '1%'}}>
                {advantages.map(advantage => (
                    <Grid lg={4} md={6} sm={12} item sx={{display: 'flex', alignItems: 'center', height: '150px'}}>
                        <Box sx={{color: '#A40000'}}>
                            {advantage.icon}
                        </Box>
                        <Typography variant={'h5'} sx={{fontSize: {sm:'18px', xs: '16px'}, marginLeft: '4%'}}>
                            {advantage.text}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default AdvantagesBlock;
