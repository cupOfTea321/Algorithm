import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import '../components.css'
import pointLeft from '../../assets/pointLeft.png'
import mobileLine from "../../assets/mobileLine.png";
import MyBtn from "./MyBtn.jsx";
import SecondBtn from "./SecondBtn.jsx";

const powersFirst = [
    {name: '4 ЖД-вагона', about: 'Прием в сутки',},
    {name: '6-12 ЖД-вагонов', about: 'Отгрузка в сутки',},
    {name: '6 единовременно', about: 'Отстой вагонов на собственных путях',},
    {name: 'до 800 т сутки', about: 'Прием топлива из автомобильных цистерн',},
]
const powersSecond = [
    {name: 'Цистерна 20 000 т', about: 'Максимальная мощность\n' + 'экспортных отгрузок\n' + 'ЖД-автоцистерн'},
    {name: '8 000 тыс .', about: 'Прием - отгрузка ЖД цистерн\n' + 'в сутки'},
    {name: '3000 т', about: 'Парк хранения',},
    {name: 'Экспорт /внутренний\n' + 'рынок', about: 'Автомобильный налив',},
]
const PowersBlock = () => {
    return (
        <Container maxWidth={'xl'}>
            <Typography className={'oswFont'} variant={'h4'} sx={{
                marginTop: {sm: '150px', xs:'280px'},
                fontSize: {sm:'34px', xs: '28px'},
                marginBottom: '3%',
                textAlign: {md: 'left',xs: 'center'}
            }}>
                Предоставляемые мощности:
            </Typography>

            {/*ПК версия*/}
            <Box sx={{
                display: {sm: 'flex', xs: 'none'},
                // gap: 2,
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center'
            }}>
                {powersFirst.map(power => (
                    <Grid item xs={4} sx={{
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
                display: {sm: 'flex', xs: 'none'},
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
                marginTop: '3%',
                marginLeft: {lg: '0%', xs:'-4%'},
            }}>
                {powersSecond.map(power => (
                    <Grid item xs={4} sx={{
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
            <Box sx={{display: {lg: 'none', md: 'flex', sm: 'flex', xs: 'flex'}, flexDirection: 'column', alignItems: 'center'}}>
                {powersFirst.map(item => (
                    <>
                        <img src={mobileLine} style={{height: '90px', width: '21px', backgroundSize: 'cover', marginBottom: '20px', marginTop: '20px'}} alt=""/>
                        <Typography className={'oswFont'} sx={{fontSize: {sm:'28px', xs: '24px'}, textAlign: 'center'}}>{item.name}</Typography>
                        <Typography sx={{fontSize: {sm:'28px', xs: '20px'}, textAlign: 'center'}}>{item.about}</Typography>
                    </>

                ))}
                {powersSecond.map(item => (
                    <>
                        <img src={mobileLine} style={{height: '90px', width: '21px', backgroundSize: 'cover', marginBottom: '20px', marginTop: '20px'}} alt=""/>
                        <Typography className={'oswFont'}  sx={{fontSize: {sm:'28px', xs: '24px'}, textAlign: 'center'}}>{item.name}</Typography>
                        <Typography sx={{fontSize: {sm:'28px', xs: '20px'}, textAlign: 'center'}}>{item.about}</Typography>
                    </>

                ))}
            </Box>

        </Container>


    );
};

export default PowersBlock;
