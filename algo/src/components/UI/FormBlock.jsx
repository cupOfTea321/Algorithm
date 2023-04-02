import React, {useEffect, useState} from 'react';
import {Box, Checkbox, Container, TextField, Typography} from "@mui/material";
import MyBtn from "./MyBtn.jsx";
import { pink } from '@mui/material/colors';
import { useForm, ValidationError } from '@formspree/react';
import MyForm from "./MyForm.jsx";
const FormBlock = () => {

    return (
        <Container maxWidth={'xl'}>
            <Typography variant={'h3'} sx={{fontSize: '42px', textAlign: 'center'}}>
                Не нашли нужный сервис?
            </Typography>
            <Box sx={{

                display: 'flex',
                flexDirection: {lg: 'row', md: 'column', sm: 'column', xs: 'column'},
                justifyContent: 'center',
                marginTop: '3%',
                width: '100%',
                alignItems: 'center',
                // marginLeft: {sm: '0', xs: '-2vw'}
            }}>

                <MyForm/>
                <Typography sx={{fontSize: {md: '26px', sm: '20px'}, width: {md: '40%', sm: '60%'}, marginLeft: {lg:'50px'}}}>
                    Оставляйте заявку на сайте
                    Мы обязательно с Вами свяжемся
                    и обсудим оставшиеся вопросы.
                </Typography>
            </Box>
        </Container>
    );
};

export default FormBlock;
