import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import './components.css'
import ServicesBtn from "./UI/ServicesBtn.jsx";
import serv1 from '../assets/serv1.png'
import serv2 from '../assets/serv2.png'
import serv3 from '../assets/serv3.png'
import serv4 from '../assets/serv4.png'
import {useTranslation} from "react-i18next";

const MainServices = () => {
    const { t, i18n } = useTranslation();
    const services = [
        {text: t("storage"), img: serv1, link: 'services/storage'},
        {text: t("transportation"), img: serv2, link: 'services/transportation'},
        {text: t("registration"), img: serv3, link: 'services/registration'},
        {text: t("shipment"), img: serv4, link: 'services/shipment'},
    ]
    return (
        <Container maxWidth="md">
            <Box sx={{
                marginTop: '3%',
                flexFlow: 'row nowrap',
            }} className={'animate__animated animate__fadeInUp wow'} >
                <Typography variant={'h3'} className={'oswFont'} sx={{
                    display: 'flex',
                    justifyContent: 'center',

                    fontSize: {sm:'32px', xs: '28px'}, textAlign: 'center', marginTop: '40px'
                }}>
                    {t("servicesBlock")}
                </Typography>
                <Grid container sx={{
                    marginTop: {sm: '3%', xs: '5%'},
                    marginBottom: {sm: '3%', xs: '330px'},
                    display: {sm: 'grid'},

                    justifyContent: {lg: 'space-between', md: 'center', sm: 'center', xs: 'center'},
                    gridTemplateColumns: {lg: 'repeat(4, 200px)', md: 'repeat(2, 250px)', sm: 'repeat(2, 250px)', xs: 'repeat(2, 200px)'},
                    gridTemplateRows: 'repeat(1, 70px)',
                    gap: 2,
                }} className={'animate__animated animate__fadeInUp wow'}>
                    {services.map(service => (
                        <Grid item  key={service.text}  sx={{
                            display: 'flex',
                            marginBottom: '40px',
                        }}>
                            <ServicesBtn link={service.link} img={service.img} text={service.text}/>
                        </Grid>
                    ))}
                </Grid>


            </Box>
        </Container>
    );
};

export default MainServices;
