import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import star from '../../assets/star.png'
import starBack from '../../assets/starBack.png'
import backImg from "../../assets/servicesBack.png";
const ServicesBanner = ({storage}) => {
    return (
        <Box sx={{
            paddingBottom: '5%',
            background: `linear-gradient(68.5deg, rgba(65, 59, 59, 0.62) 35.69%, rgba(105, 105, 105, 0) 133.84%), url(${backImg})`,
            backgroundSize: 'cover',

        }}>
        <Container maxWidth={'md'}>
            <Box sx={{
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '10%',
                gap: 2,
                textAlign: {sm: 'left', xs: 'center'}
            }}>
                <Typography className={'oswFont animate__animated animate__fadeInLeft wow'} variant={'h1'} sx={{
                    fontSize: { md: '36px', sm: '30px', xs: '36px'},
                    width: {sm: '80%', xs: '100%'},
                }}>
                    {storage.mainTitle}
                </Typography>
                <Typography className={'animate__animated animate__fadeInLeft wow'} variant={'h3'} sx={{
                    width: {sm: '80%', xs: '100%'},
                    fontSize: '24px'
                }}>
                    {storage.secondTitle}
                </Typography>
                <Grid className={'animate__animated animate__fadeInUp wow'} container sx={{width: {md: '100%', sm: '100%'}, marginTop: '10%', }}>
                    {storage.list.map((item, index) => (
                        <Grid key={index} item lg={3} md={6} sm={6} xs={12} sx={{width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '20px'}}>
                            <Box sx={{backgroundImage: `url(${starBack})`, height: '82px', width: '91px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Box component={'img'} src={star} sx={{height: '28px', backgroundSize: 'cover', width: '28px', }}/>
                            </Box>
                            <Typography sx={{fontSize: '22px', width: '100%', textAlign: 'center'}}>
                                {item}
                            </Typography>

                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
        </Box>
    );
};

export default ServicesBanner;
