import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import ServiceImgBlock from "./ServiceImgBlock.jsx";
import serv1 from '../../assets/services1.png'
import serv2 from '../../assets/services2.png'
import serv3 from '../../assets/services3.png'
import serv4 from '../../assets/services4.png'
import {useTranslation} from "react-i18next";


const ServicesMainBlock = () => {
    const { t, i18n } = useTranslation();
    const services = [
        {name: t("serv1"), link: 'storage', image: serv1},
        {name: t("serv2"), link: 'transportation', image: serv2},
        {name: t("serv3"), link: 'registration', image: serv3},
        {name: t("serv4"), link: 'shipment', image: serv4},
    ]
    return (
        <Container maxWidth={'md'}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '4%',
                gap: 2,
                alignItems: 'center',
                color: 'white'
            }}>
                <Box sx={{display: 'flex', flexDirection: {md: 'row', sm: 'column', xs: 'column'}, textAlign: {md: 'left', sm: 'center', xs: 'center'}}}>
                    <Box className={'animate__animated animate__fadeInLeft wow'} sx={{width: {md: '60%', sm: '100%', xs: '100%'}}}>
                        <Typography  className={'oswFont'} variant={'h1'} sx={{ fontSize: {md: '38px', sm: '42px', xs: '36px'},}}>
                            {t("servicesMain")}
                        </Typography>
                        <Typography sx={{ fontSize: {md: '22px', sm: '18px', xs: '22px'},}}>
                            {t("servicesMain2")}
                        </Typography>
                    </Box>
                    <Box className={'animate__animated animate__fadeInRight wow'} sx={{width: {md: '50%', sm: '100%', xs: '100%'}, marginLeft: {lg: '20px'}, textAlign: {md: 'right', sm: 'center', xs: 'center'}}}>
                        <Typography sx={{ fontSize: {md: '22px', sm: '18px', xs: '22px'},}}>
                            {t("ourServices")}
                        </Typography>
                    </Box>
                </Box>

                <Box className={'animate__animated animate__fadeInUp wow'} sx={{
                    marginTop: {sm: '0%', xs: '5%'},
                    width: '100%',
                    display: {md: 'grid'},
                    justifyContent: 'space-between',
                    padding: '0 30px',
                    alignItems: 'space-between',
                    gridTemplateColumns: {md: 'repeat(2, 340px)', sm: 'repeat(1, 420px)', xs: 'repeat(1, 80vw)'},
                    gridTemplateRows: {md: 'repeat(2, 260px)', sm: 'repeat(1, 320px)', xs: 'repeat(1, 220px)'},
                }}>
                    {services.map(service => (
                            <Box key={service.name} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',

                                marginBottom: {md: '0px', sm: '40px', xs: '40px'},
                                // height: {sm: '220px', xs: '240px'}
                            }}>
                                <ServiceImgBlock link={service.link} image={service.image} name={service.name}/>
                            </Box>

                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default ServicesMainBlock;
