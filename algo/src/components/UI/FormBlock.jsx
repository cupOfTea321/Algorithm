import React, {useEffect, useState} from 'react';
import {Box, Checkbox, Container, TextField, Typography} from "@mui/material";
import MyBtn from "./MyBtn.jsx";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import { pink } from '@mui/material/colors';
import { useForm, ValidationError } from '@formspree/react';
const FormBlock = () => {
    const [state, handleSubmit] = useForm("meqwrlkb");
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    useEffect(() => {
        if (state.succeeded) {
            setName('')
            setPhone('')
            setEmail('')
            setMessage('')
        }
    }, [state])
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

                <Box onSubmit={handleSubmit} component="form" sx={{   display: 'flex', flexDirection: 'column',}}>
                    {state.succeeded && <Typography sx={{color: 'green', marginTop: '-20px'}}>Thanks for joining!</Typography>}
                    <TextField
                        value={name}
                        onChange={e => setName(e.target.value)}
                        id="name"
                        name="name"
                        label="ФИО"
                        required
                        multiline
                        maxRows={4}
                        sx={{width: {cm:'360px', xs: '280px'}, marginBottom: '20px', background: '#E3D9D9'}}
                    />
                    <TextField
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        id="phone"
                        name="phone"
                        label="Номер телефона"
                        multiline
                        maxRows={4}
                        sx={{width: {cm:'360px', xs: '280px'}, marginBottom: '20px', background: '#E3D9D9'}}
                    />
                    <TextField
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        id="email"
                        label="E-mail"
                        required
                        name="email"
                        multiline
                        maxRows={4}
                        sx={{width: {cm:'360px', xs: '280px'}, marginBottom: '20px', background: '#E3D9D9'}}
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <TextField
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        id="message"
                        name="message"
                        label="Комментарий"
                        required
                        multiline

                        maxRows={4}
                        sx={{width: {cm:'360px', xs: '280px'}, marginBottom: '20px', background: '#E3D9D9'}}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    {/*<button type="" >*/}
                    {/*    Submit*/}
                    {/*</button>*/}
                    <MyBtn disabled={state.submitting} type={'submit'} height={'56px'}  width={{cm:'360px', xs: '280px'}}/>
                    <Box sx={{display: 'flex', alignItems: 'center', marginTop: '5%'}}>
                        <Checkbox
                            {...label}
                            defaultChecked
                            sx={{
                                width: '20px', height: '20px',
                                color: '#A40000',
                                '&.Mui-checked': {
                                    color: '#A40000',
                                },
                            }}
                        />
                        <Typography sx={{marginLeft: '3%', fontSize: '12px'}}>
                            Даю согласие на обработку данных
                        </Typography>
                    </Box>

                </Box>
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
