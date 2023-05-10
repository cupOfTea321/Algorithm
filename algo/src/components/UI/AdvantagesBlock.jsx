import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import point from '../../assets/pointRight.png'
import {useTranslation} from "react-i18next";
import cloud from '../../assets/cloud.png'
const AdvantagesBlock = () => {
    const { t, i18n } = useTranslation();
    const advantages1 = [
        t("point1"),
        t("point2"),
        t("point3"),
        t("point4"),

    ]
    const advantages2 = [
        t("point5"),
        t("point6"),
        t("point7"),
    ]
    return (
        <Container maxWidth={'xl'}>
            <Typography className={'oswFont'} variant={'h4'} sx={{fontSize: {sm:'34px', xs: '28px'}, textAlign: 'center', marginTop: '5%', }}>
                {t("whyUsBlock")}
            </Typography>
            <Box sx={{marginTop: '4%', marginBottom: '5%', display: 'flex', justifyContent: 'center', flexDirection: {md: 'row', sm: 'column'}}}>
                <Box>
                    {advantages1.map((advantage, index) => (
                        <Box key={index} sx={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                            <Box component={'img'} src={cloud} alt={'point'} sx={{width: {sm: '40px',  xs:'30px'}}}/>

                            <Typography variant={'h5'} sx={{fontSize: {sm:'28px', xs: '20px'}, marginLeft: '4%'}}>
                                {advantage}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <Box>
                    {advantages2.map((advantage, index) => (
                        <Box key={index} sx={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                            <Box component={'img'} src={cloud} alt={'point'} sx={{width: {sm: '40px',  xs:'30px'}}}/>

                            <Typography variant={'h5'} sx={{fontSize: {sm:'28px', xs: '20px'}, marginLeft: '4%'}}>
                                {advantage}
                            </Typography>
                        </Box>
                    ))}
                </Box>

            </Box>
        </Container>
    );
};

export default AdvantagesBlock;
