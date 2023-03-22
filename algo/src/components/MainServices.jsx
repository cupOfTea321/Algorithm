import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import ServicesBtn from "./UI/ServicesBtn.jsx";

const services = [
    "Хранение",
    "Перевозка",
    "Оформление",
    "Отгрузка",
]
const MainServices = () => {
    return (
        <Container maxWidth={'xl'}>
            <Box sx={{
                // gap: 2,
                marginTop: '5%',
                flexFlow: 'row nowrap',

            }}>
                <Typography variant={'h3'} sx={{
                    fontSize: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    КАКИЕ УСЛУГИ МЫ ОКАЗЫВАЕМ?
                </Typography>
                <Box sx={{
                    marginTop: '2%',
                    marginBottom: {sm: '100px', xs: '180px'},
                    display: {sm: 'grid'},

                    justifyContent: 'center',
                    gridTemplateColumns: 'repeat(2, 250px)',
                    gridTemplateRows: 'repeat(2, 70px)',
                    gap: 2,
                    height: '70px',

                }}>
                    {services.map(service => (
                        <Box  sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '20px',
                            // padding: '10px'
                            height: '45px'
                        }}>
                            <ServicesBtn text={service}/>
                        </Box>
                    ))}
                </Box>


            </Box>
        </Container>
    );
};

export default MainServices;
