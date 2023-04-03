import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import '../components.css'
import pointLeft from '../../assets/pointLeft.png'
import mobileLine from "../../assets/mobileLine.png";
import {useTranslation} from "react-i18next";


const PowersBlock = () => {
    const { t, i18n } = useTranslation();
    const powersFirst = [
        {name: t("power1"), about: t("titlePower1")},
        {name: t("power2"), about: t("titlePower2")},
        {name: t("power3"), about: t("titlePower3")},
        {name: t("power4"), about: t("titlePower4")},
    ]
    const powersSecond = [
        {name: t("power5"), about: t("titlePower5")},
        {name: t("power6"), about: t("titlePower6")},
        {name: t("power7"), about: t("titlePower7")},
        {name: t("power8"), about: t("titlePower8")},
    ]

    return (
        <Container maxWidth={'xl'}>
            <Typography className={'oswFont'} variant={'h4'} sx={{
                marginTop: {sm: '150px', xs:'280px'},
                fontSize: {sm:'34px', xs: '28px'},
                marginBottom: '3%',
                textAlign: {md: 'left',xs: 'center'}
            }}>
                {t("powersBlock")}
            </Typography>

            {/*ПК версия*/}
            <Box sx={{
                display: {md: 'flex', xs: 'none'},
                // gap: 2,
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center'
            }}>
                {powersFirst.map(power => (
                    <Grid key={power.name} item xs={4} sx={{
                        justifyContent: 'space-between',
                        maxWidth: '18%',
                        alignItems: '',
                        height: '150px',
                        marginLeft: {lg: '0%', xs:'-4%'},
                    }}>
                        <Typography className={'oswFont'} variant={'h5'} sx={{
                            fontSize: {xl: '20px', lg: '16px', md: '12px', sm: '16px', xs: '10px'},

                            // marginTop: '40px'
                        }}>
                            {power.name}
                        </Typography>
                        <Box sx={{display: {md: 'block', sm: 'none', xs: 'none'},}}>
                            <hr style={{
                                margin: '20px 0',
                                marginLeft: '-400%',
                                marginBottom: '20px',
                                padding: '0',
                                // height: 0,
                                border: 'none',
                                borderTop: '1px solid #A40000',

                            }}/>
                        </Box>
                        <Box sx={{
                            width: '20px',
                            height: '20px',
                            marginLeft: '40px',
                            marginBottom: '20px',
                            marginTop: '-32px',
                            position: 'absolute',
                            display: {md: 'block', sm: 'none', xs: 'none'},
                        }}>
                            <img src={pointLeft} alt="point"/>
                        </Box>

                        <Typography variant={'h6'} sx={{
                            fontSize: {xl: '20px', lg: '16px', md: '12px',  sm: '16px', xs: '10px'},
                            marginBottom: '30%'
                        }}>
                            {power.about}
                        </Typography>
                    </Grid>
                ))}
            </Box>

            <Box sx={{
                display: {md: 'flex', xs: 'none'},
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
                marginTop: '3%',
                marginLeft: {lg: '0%', xs:'-4%'},
            }}>
                {powersSecond.map(power => (
                    <Grid key={power.name} item xs={4} sx={{
                        justifyContent: 'space-between',
                        maxWidth: '18%',
                        alignItems: '',
                        height: '150px'
                    }}>
                        <Typography className={'oswFont'} variant={'h5'}
                                    sx={{fontSize: {xl: '20px', lg: '16px', md: '12px', sm: '16px', xs: '10px'}}}>
                            {power.name}
                        </Typography>
                        <Box sx={{display: {md: 'block', sm: 'none', xs: 'none'},}}>

                            <hr style={{
                                margin: '20px 0',
                                marginLeft: '-200%',
                                padding: '0',
                                height: 0,
                                border: 'none',
                                borderTop: '1px solid #A40000',

                            }}/>
                        </Box>

                        <Box sx={{
                            width: '20px',
                            height: '20px',
                            marginLeft: '30px',
                            marginBottom: '20px',
                            marginTop: '-32px',
                            position: 'absolute',
                            display: {md: 'block', sm: 'none', xs: 'none'},
                        }}>
                            <img src={pointLeft} alt="point"/>
                        </Box>
                        <Typography variant={'h6'} sx={{fontSize: {xl: '20px', lg: '16px', md: '12px',  sm: '16px', xs: '10px'}}}>
                            {power.about}
                        </Typography>

                    </Grid>
                ))}
            </Box>

            {/*  Мобильная версия  */}
            <Box sx={{display: {md: 'none', sm: 'flex', xs: 'flex'}, flexDirection: 'column', alignItems: 'center'}}>
                {powersFirst.map(item => (
                    <Box key={item.name} sx={{textAlign: 'center'}}>
                        <img src={mobileLine} style={{height: '90px', width: '21px', backgroundSize: 'cover', marginBottom: '20px', marginTop: '20px'}} alt=""/>
                        <Typography className={'oswFont'} sx={{fontSize: {sm:'28px', xs: '24px'}, textAlign: 'center'}}>{item.name}</Typography>
                        <Typography sx={{fontSize: {sm:'28px', xs: '20px'}, textAlign: 'center'}}>{item.about}</Typography>
                    </Box>

                ))}
                {powersSecond.map(item => (
                    <Box key={item.name} sx={{textAlign: 'center'}}>
                        <img src={mobileLine} style={{height: '90px', width: '21px', backgroundSize: 'cover', marginBottom: '20px', marginTop: '20px'}} alt=""/>
                        <Typography className={'oswFont'}  sx={{fontSize: {sm:'28px', xs: '24px'}, textAlign: 'center'}}>{item.name}</Typography>
                        <Typography sx={{fontSize: {sm:'28px', xs: '20px'}, textAlign: 'center'}}>{item.about}</Typography>
                    </Box>

                ))}
            </Box>

        </Container>


    );
};

export default PowersBlock;
