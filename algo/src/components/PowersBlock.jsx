import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import './components.css'
import pointLeft from '../assets/pointLeft.png'

const powersFirst = [
    {name: '4 ЖД-вагона', about: 'Прием в сутки',},
    {name: '6-12 ЖД-вагонов', about: 'Отгрузка в сутки',},
    {name: '6 единовременно', about: 'Отстой вагонов на собственных путях',},
    {name: 'до 800 т сутки', about: 'Прием топлива из автомобильных цистертрн',},
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
            <Typography variant={'h4'} sx={{
                marginTop: '10%',
                fontSize: '26px',
                marginBottom: '3%',
            }}>
                Предоставляемые мощности:
            </Typography>
            <Box sx={{
                display: 'flex',
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

                    }}>
                        <Typography className={'oswFont'} variant={'h5'} sx={{
                            fontSize: {xl: '20px', lg: '16px', md: '12px', sm: '16px', xs: '12px'},

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
                                borderTop: '1px solid #333',

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
                            fontSize: {xl: '20px', lg: '16px', md: '12px',  sm: '16px', xs: '12px'},
                            marginBottom: '30%'
                        }}>
                            {power.about}
                        </Typography>
                    </Grid>
                ))}
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
                marginTop: '3%',
            }}>
                {powersSecond.map(power => (
                    <Grid item xs={4} sx={{
                        justifyContent: 'space-between',
                        maxWidth: '18%',
                        alignItems: '',
                        height: '150px'
                    }}>
                        <Typography className={'oswFont'} variant={'h5'}
                                    sx={{fontSize: {xl: '20px', lg: '16px', md: '12px', sm: '16px', xs: '12px'}}}>
                            {power.name}
                        </Typography>
                        <Box sx={{display: {md: 'block', sm: 'none', xs: 'none'},}}>

                            <hr style={{
                                margin: '20px 0',
                                marginLeft: '-200%',
                                padding: '0',
                                height: 0,
                                border: 'none',
                                borderTop: '1px solid #333',

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
                        <Typography variant={'h6'} sx={{fontSize: {xl: '20px', lg: '16px', md: '12px',  sm: '16px', xs: '12px'}}}>
                            {power.about}
                        </Typography>

                    </Grid>
                ))}
            </Box>
        </Container>


    );
};

export default PowersBlock;
