import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import star from '../../assets/star.png'
import starBack from '../../assets/starBack.png'
const storage = [
    'Действуем в рамках нормативных документов',
    'Гарантируем   качество',
    'Контроль срока годности',
    'Соблюдение условий хранения',
]
const ServicesBanner = () => {
    return (
        <Container maxWidth={'xl'}>
            <Box sx={{
                color: 'white',
                width: {md: '48%', xs: '100%'},
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '10%',
                gap: 2,
                textAlign: {sm: 'left', xs: 'center'}
            }}>
                <Typography className={'oswFont'} variant={'h1'} sx={{
                    fontSize: {lg: '48px', md: '36px', sm: '30px', xs: '36px'},

                }}>
                    ХРАНЕНИЕ ТОПЛИВА
                </Typography>
                <Typography variant={'h3'} sx={{
                    width: {md: '140%', sm: '100%'},
                    fontSize: '24px'
                }}>
                    Бережно храним вашу продукцию, соблюдая необходимые требования,
                    чтобы сохранить все качества топлива
                </Typography>
                <Grid container sx={{width: {md: '200%', sm: '100%'}, marginTop: '10%', }}>
                    {storage.map(item => (
                        <Grid item lg={3} md={6} sm={6} xs={12} sx={{width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '20px'}}>
                            <Box sx={{backgroundImage: `url(${starBack})`, height: '122px', width: '132px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Box component={'img'} src={star} sx={{height: '35px', backgroundSize: 'cover', width: '35px', }}/>
                            </Box>
                            <Typography sx={{fontSize: '24px', width: '100%', textAlign: 'center'}}>
                                {item}
                            </Typography>

                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default ServicesBanner;
