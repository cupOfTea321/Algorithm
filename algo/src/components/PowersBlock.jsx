import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";

const powers = [
    {
        name1: '4 ЖД-вагона', about1: 'Прием в сутки',
        name2: 'Цистерна 20 000 т', about2: 'Максимальная мощность\n' + 'экспортных отгрузок\n' + 'ЖД-автоцистерн'
    },
    {
        name1: '6-12 ЖД-вагонов', about1: 'Отгрузка в сутки',
        name2: '8 000 тыс .', about2: 'Прием - отгрузка ЖД цистерн\n' + 'в сутки'
    },
    {
        name1: '6 единовременно', about1: 'Отстой вагонов на собственных путях',
        name2: '3000 т', about2: 'Парк хранения'
    },
    {
        name1: 'до 800 т сутки', about1: 'Прием топлива из автомобильных цистертрн',
        name2: 'Экспорт /внутренний\n' + 'рынок', about2: 'Автомобильный налив'
    },
]
// const powersSecond = [
//     {},
//     {name: '8 000 тыс .', about: 'Прием - отгрузка ЖД цистерн\n' + 'в сутки'},
//     {name: '3000 т', about: 'Парк хранения'},
//     {name: 'Экспорт /внутренний\n' + 'рынок', about: 'Автомобильный налив'},
// ]
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
                {powers.map(power => (
                    <Grid item xs={4} sx={{
                        justifyContent: 'space-between',
                        maxWidth: '15%',
                        alignItems: '',
                        height: '250px'
                    }}>
                        <Typography variant={'h5'} sx={{fontSize: '20px'}}>
                            {power.name1}
                        </Typography>
                        <hr style={{
                            margin: '20px 0',
                            width: '170%',
                            marginLeft: '-70%',
                            paddingRight: '00px',
                            padding: '0',
                            height: 0,
                            border: 'none',
                            borderTop: '1px solid #333',
                        }}/>
                        <Typography variant={'h6'} sx={{fontSize: '20px'}}>
                            {power.about1}
                        </Typography>
                        <Typography variant={'h5'} sx={{fontSize: '20px'}}>
                            {power.name2}
                        </Typography>
                        <hr style={{
                            margin: '20px 0',
                            width: '170%',
                            marginLeft: '-70%',
                            paddingRight: '00px',
                            padding: '0',
                            height: 0,
                            border: 'none',
                            borderTop: '1px solid #333',
                        }}/>
                        <Typography variant={'h6'} sx={{fontSize: '20px'}}>
                            {power.about2}
                        </Typography>
                    </Grid>
                ))}
            </Box>
            {/*<Box sx={{*/}
            {/*    display: 'flex',*/}
            {/*    // gap: 2,*/}
            {/*    // justifyContent: 'space-between',*/}
            {/*    width: '100%',*/}
            {/*    marginTop: '5%'*/}
            {/*}}>*/}
            {/*    {powersSecond.map(power => (*/}
            {/*        <Grid item xs={4} sx={{*/}
            {/*            justifyContent: 'flex-start',*/}
            {/*        }}>*/}
            {/*            <Typography variant={'h5'}>*/}
            {/*                {power.name}*/}
            {/*            </Typography>*/}
            {/*            <hr style={{*/}
            {/*                margin: '20px 0',*/}
            {/*                width: '170%',*/}
            {/*                marginLeft: '-70%',*/}
            {/*                paddingRight: '00px',*/}
            {/*                padding: '0',*/}
            {/*                height: 0,*/}
            {/*                border: 'none',*/}
            {/*                borderTop: '1px solid #333',*/}
            {/*            }}/>*/}
            {/*            <Typography variant={'h6'} sx={{*/}
            {/*                width: '60%'*/}
            {/*            }}>*/}
            {/*                {power.about}*/}
            {/*            </Typography>*/}
            {/*        </Grid>*/}
            {/*    ))}*/}
            {/*</Box>*/}
        </Container>


    );
};

export default PowersBlock;
