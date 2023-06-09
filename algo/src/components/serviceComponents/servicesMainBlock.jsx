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
    const hr = {
        size: 700,
        height:  '80%',
        width: '15px',
        border: 'none',
        background: '#A40000',
        marginRight: '10px'
    }
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
                    <Typography  className={'oswFont'} variant={'h1'} sx={{ fontSize: {md: '36px', sm: '30px', xs: '28px'},}}>
                        {t("servicesMain")}
                    </Typography>
                    <Box  sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: {md: 'row', sm: 'column'}
                    }}>

                        <Typography className={'animate__animated animate__fadeInLeft wow'} sx={{ fontSize: '18px', width: {md: '50%', sm: '90%'}, marginRight: '10px', display: 'flex', alignItems: 'center'}}>
                            <Box component={'hr'} sx={hr}  />
                            {t("servicesMain2")}
                        </Typography>
                        <Typography className={'animate__animated animate__fadeInRight wow'} sx={{ fontSize: '18px', width: {md: '50%', sm: '90%'}, display: 'flex', alignItems: 'center'}}>
                            <Box component={'hr'} sx={hr}  />
                            {t("ourServices")}
                        </Typography>
                    </Box>

                {/*<Box className={'animate__animated animate__fadeInUp wow'} sx={{*/}
                {/*    marginTop: {sm: '0%', xs: '5%'},*/}
                {/*    width: '100%',*/}
                {/*    display: {md: 'grid'},*/}
                {/*    justifyContent: 'space-between',*/}
                {/*    padding: '0 30px',*/}
                {/*    alignItems: 'space-between',*/}
                {/*    gridTemplateColumns: {md: 'repeat(2, 340px)', sm: 'repeat(1, 420px)', xs: 'repeat(1, 80vw)'},*/}
                {/*    gridTemplateRows: {md: 'repeat(2, 260px)', sm: 'repeat(1, 320px)', xs: 'repeat(1, 220px)'},*/}
                {/*}}>*/}
                {/*    {services.map(service => (*/}
                {/*            <Box key={service.name} sx={{*/}
                {/*                display: 'flex',*/}
                {/*                justifyContent: 'center',*/}
                {/*                alignItems: 'center',*/}

                {/*                marginBottom: {md: '0px', sm: '40px', xs: '40px'},*/}
                {/*                // height: {sm: '220px', xs: '240px'}*/}
                {/*            }}>*/}
                {/*                <ServiceImgBlock link={service.link} image={service.image} name={service.name}/>*/}
                {/*            </Box>*/}

                {/*    ))}*/}
                {/*</Box>*/}
            </Box>
        </Container>
    );
};

export default ServicesMainBlock;
