import React from 'react';
import {Box, Checkbox, Container, TextField, Typography} from "@mui/material";
import MyBtn from "./UI/MyBtn.jsx";
import {CheckBox} from "@mui/icons-material";

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
                alignItems: 'center'
            }}>
                <Box component="form" sx={{ marginLeft: {sm: 0, xs: '-45%'}, width: '30%'}}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="ФИО"
                        multiline
                        maxRows={4}
                        sx={{width: {cm:'360px', xs: '280px'}, marginBottom: '20px', background: '#E3D9D9'}}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Номер телефона"
                        multiline
                        maxRows={4}
                        sx={{width: {cm:'360px', xs: '280px'}, marginBottom: '20px', background: '#E3D9D9'}}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="E-mail"
                        multiline
                        maxRows={4}
                        sx={{width: {cm:'360px', xs: '280px'}, marginBottom: '20px', background: '#E3D9D9'}}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Комментарий"
                        multiline
                        maxRows={4}
                        sx={{width: {cm:'360px', xs: '280px'}, marginBottom: '20px', background: '#E3D9D9'}}
                    />
                    <MyBtn  width={{cm:'360px', xs: '280px'}}/>
                    <Box sx={{display: 'flex', alignItems: 'center', marginTop: '2%', width: '100vw'}}>
                        <input type={'checkbox'} style={{width: '20px', height: '20px', color: 'rgba(255, 255, 255, 0.4)'}}/>
                        <Typography sx={{marginLeft: '1%'}}>
                            Даю согласие на обработку данных
                        </Typography>
                    </Box>

                </Box>
                <Typography sx={{fontSize: {md: '26px', sm: '20px'}, width: {md: '40%', sm: '60%'}}}>
                    Оставляйте заявку на сайте
                    Мы обязательно с Вами свяжемся
                    и обсудим оставшиеся вопросы.
                </Typography>
            </Box>
        </Container>
    );
};

export default FormBlock;
