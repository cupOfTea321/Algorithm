import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import ServiceImgBlock from "./ServiceImgBlock.jsx";
import serv1 from '../../assets/services1.png'
import serv2 from '../../assets/services2.png'
import serv3 from '../../assets/services3.png'
import serv4 from '../../assets/services4.png'
import {Link, NavLink} from "react-router-dom";

const services = [
    {name: 'Хранение', link: 'storage', image: serv1},
    {name: 'Перевалка', link: 'transportation', image: serv2},
    {name: 'Отгрузка', link: 'registration', image: serv3},
    {name: 'Брокерские услуги', link: 'shipment', image: serv4},
]
const ServicesMainBlock = () => {
    return (
        <Container maxWidth={'lg'}>
            <Box sx={{
                // width: {md: '100%', xs: '100%'},
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '10%',
                gap: 2,
                // textAlign: 'center',
                alignItems: 'center',
                color: 'white'

            }}>
                <Box sx={{display: 'flex', flexDirection: {md: 'row', sm: 'column', xs: 'column'}, textAlign: {md: 'left', sm: 'center', xs: 'center'}}}>
                    <Box sx={{width: {md: '60%', sm: '100%', xs: '100%'}}}>
                        <Typography className={'oswFont'} variant={'h1'} sx={{ fontSize: {lg: '60px', md: '48px', sm: '42px', xs: '36px'},}}>
                            с чем мы можем помочь вам
                        </Typography>
                        <Typography sx={{ fontSize: {lg: '30px', md: '22px', sm: '18px', xs: '22px'},}}>
                            Выполняем работу на высоком уровне, учитывая запрос и уважая Ваше время
                        </Typography>
                    </Box>
                    <Box sx={{width: {md: '40%', sm: '100%', xs: '100%'}}}>
                        <Typography sx={{ fontSize: {lg: '40px', md: '32px', sm: '28px', xs: '24px'},}}>
                            Мы предлагаем все необходимые услуги, четко соблюдаем договорные сроки
                            и следим за качеством
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
