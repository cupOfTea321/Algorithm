import React, {useEffect, useState} from 'react';
import {Box, Checkbox, Container, TextField, Typography} from "@mui/material";
import MyBtn from "./MyBtn.jsx";
import { pink } from '@mui/material/colors';
import { useForm, ValidationError } from '@formspree/react';
import MyForm from "./MyForm.jsx";
import {useTranslation} from "react-i18next";
const FormBlock = () => {
    const { t, i18n } = useTranslation();
    return (
        <Container maxWidth={'xl'}>
            <Typography variant={'h3'} sx={{fontSize: '42px', textAlign: 'center'}}>
                {t("pageForm")}
            </Typography>
            <Box sx={{

                display: 'flex',
                flexDirection: {lg: 'row', md: 'column', sm: 'column', xs: 'column'},
                justifyContent: 'center',
                marginTop: '8%',
                width: '100%',
                alignItems: 'center',
                // marginLeft: {sm: '0', xs: '-2vw'}
            }}>

                <MyForm/>
                <Typography sx={{fontSize: {md: '26px', sm: '20px'}, width: {md: '40%', sm: '60%'}, marginLeft: {lg:'50px'}}}>
                    {t("pageFormText")}
                </Typography>
            </Box>
        </Container>
    );
};

export default FormBlock;
