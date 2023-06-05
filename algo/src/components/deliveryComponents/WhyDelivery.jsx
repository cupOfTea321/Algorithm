import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import point from "../../assets/pointRight.png";
import backEL1 from '../../assets/backElement1.png'
import backEL2 from '../../assets/backElement2.png'
import stagesBack from '../../assets/stages.png'
import {useTranslation} from "react-i18next";

const WhyDelivery = () => {
    const { t, i18n } = useTranslation();
    const advantages = [
        t("catalog1"),
        t("catalog2"),
        t("catalog3"),
        t("catalog4"),
        t("catalog5"),
        t("catalog6"),
        t("catalog7"),
    ]
    return (
        <Box sx={{
            background: `url(${stagesBack})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            paddingBottom: '2%',

        }}>
            <Container className={'animate__animated animate__fadeInUp wow'} maxWidth={'md'} sx={{marginTop: '-40px', paddingTop: '2%', width: '100vw', color: 'white'}}>

                <Typography className={'oswFont'} variant={'h4'}
                            sx={{fontSize: {sm: '34px', xs: '28px'}, textAlign: 'center', marginTop: '5%',}}>
                    {t("catalogWhy")}
                </Typography>
                <Box sx={{marginTop: '4%', marginBottom: '5%'}}>
                    {advantages.map((advantage, index) => (
                        <Box key={index} sx={{display: 'flex', alignItems: 'center'}}>
                            <img src={point} alt={'point'} style={{width: '20px', height: '20px'}}/>
                            <Typography variant={'h5'} sx={{fontSize: {sm: '28px', xs: '20px'}, marginLeft: '4%'}}>
                                {advantage}
                            </Typography>
                        </Box>
                    ))}
                </Box>



            </Container>
            {/*  Фоновые элементы  */}
            <Box component={'img'} src={backEL1} alt="" sx={{width: {xl: '150px',sm: '100px', xs: '50px'}, position: 'absolute', right: 0, top: {sm: '700px', xs: '650px'},}}/>
            {/*<img src={backEL1} alt="" style={{width: '150px', position: 'absolute', right: 0, top: '700px'}}/>*/}
            <img src={backEL2} alt="" style={{width: '250px', position: 'absolute', zIndex: '-1'}}/>
        </Box>
    );
};

export default WhyDelivery;
