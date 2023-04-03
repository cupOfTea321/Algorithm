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
        <Container maxWidth={'lg'}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '10%',
                gap: 2,
                alignItems: 'center',
                color: 'white'
            }}>
                <Box sx={{display: 'flex', flexDirection: {md: 'row', sm: 'column', xs: 'column'}, textAlign: {md: 'left', sm: 'center', xs: 'center'}}}>
                    <Box sx={{width: {md: '60%', sm: '100%', xs: '100%'}}}>
                        <Typography className={'oswFont'} variant={'h1'} sx={{ fontSize: {lg: '60px', md: '48px', sm: '42px', xs: '36px'},}}>
                            {t("servicesMain")}
                        </Typography>
                        <Typography sx={{ fontSize: {lg: '30px', md: '22px', sm: '18px', xs: '22px'},}}>
                            {t("servicesMain2")}
                        </Typography>
                    </Box>
                    <Box sx={{width: {md: '40%', sm: '100%', xs: '100%'}, marginLeft: {lg: '20px'}}}>
                        <Typography sx={{ fontSize: {lg: '40px', md: '32px', sm: '28px', xs: '24px'},}}>
                            {t("ourServices")}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    marginTop: {sm: '2%', xs: '5%'},
                    // marginBottom: {sm: '100px', xs: '180px'},
                    display: {md: 'grid'},

                    justifyContent: 'center',
                    gridTemplateColumns: {lg: 'repeat(2, 560px)', md: 'repeat(2, 480px)', sm: 'repeat(2, 460px)'},
                    gridTemplateRows: 'repeat(2, 360px)',
                    gap: 4,
                    // height: '70px',

                }}>
                    {services.map(service => (
                            <Box key={service.name} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '40px',
                                // padding: '10px'
                                // height: '45px'
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
