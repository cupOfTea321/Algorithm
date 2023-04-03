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
        <Container maxWidth={'xl'}>
            <Box sx={{
                // gap: 2,
                marginTop: '5%',
                flexFlow: 'row nowrap',

            }}>
                <Typography variant={'h3'} className={'oswFont'} sx={{
                    display: 'flex',
                    justifyContent: 'center',

                    fontSize: {sm:'34px', xs: '28px'}, textAlign: 'center', marginTop: '40px'
                }}>
                    {t("servicesBlock")}
                </Typography>
                <Box sx={{
                    marginTop: {sm: '2%', xs: '5%'},
                    marginBottom: {sm: '100px', xs: '180px'},
                    display: {sm: 'grid'},

                    justifyContent: 'center',
                    gridTemplateColumns: 'repeat(2, 250px)',
                    gridTemplateRows: 'repeat(2, 70px)',
                    gap: 2,
                    height: '70px',

                }}>
                    {services.map(service => (
                        <Box key={service.text}  sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '40px',
                            // padding: '10px'
                            height: '45px'
                        }}>
                            <ServicesBtn link={service.link} img={service.img} text={service.text}/>
                        </Box>
                    ))}
                </Box>


            </Box>
        </Container>
    );
};

export default MainServices;
