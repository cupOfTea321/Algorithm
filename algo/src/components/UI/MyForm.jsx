import React from 'react';
import {Box, Checkbox, TextField, Typography} from "@mui/material";
import {useForm, ValidationError} from "@formspree/react";
import MyBtn from "./MyBtn.jsx";
import {useEffect, useState} from "react";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const MyForm = () => {
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
            <MyBtn disabled={state.submitting} type={'submit'} height={'56px'}  width={{cm:'360px', xs: '280px'}}/>
            <Box sx={{display: 'flex', alignItems: 'center', marginTop: '5%'}}>
                <Checkbox
                    {...label}
                    required
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
    );
};

export default MyForm;
