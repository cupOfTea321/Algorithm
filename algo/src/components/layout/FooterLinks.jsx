import React from 'react';
import {Backdrop, Grid, Typography} from "@mui/material";
import SecondBtn from "../UI/SecondBtn.jsx";
import ModalForm from "../UI/ModalForm.jsx";


const mainCol = [
    {id: 1, name: 'Наши услуги', link: '/'},
    {id: 2, name: 'Мощности', link: '/'},
    {id: 3, name: 'Этапы работы', link: '/'},
    {id: 4, name: 'Почему мы?', link: '/'},
    {id: 5, name: 'Статьи', link: '/'},
    {id: 6, name: 'Мы на карте', link: '/'},
]
const aboutCol = [
    {id: 1, name: 'Особенности'},
    {id: 2, name: 'Преимущества'},
    {id: 3, name: 'Направление использования'},
]
const clientsCol = [
    {id: 1, name: 'Договоры'},
    {id: 2, name: 'Документация'},
    {id: 3, name: 'Утилизаторам'},
    {id: 4, name: 'Этапы работы'},
    {id: 5, name: 'Почему мы?'},
]

const FooterLinks = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <Grid container spacing={2} sx={{width: '100%', textAlign: {sm: 'left', xs: 'center'}}}>
            <Grid item lg={2} md={4} sm={6} xs={12}>

                <Typography
                    href={'/'}
                    sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>Главная
                </Typography>
                {mainCol.map(row => (
                    <a key={row.id} href={'/'}>
                        <Typography


                            sx={{fontSize: {sm: '16px', xs: '20px'}, color: 'black'}}
                        >
                            {row.name}
                        </Typography>
                    </a>

                ))}
            </Grid>
            <Grid item lg={2} md={4} sm={6} xs={12}>
                <Typography sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>О
                    биодизеле</Typography>
                {aboutCol.map(row => (
                    <a key={row.id} href={'/about'}>
                        <Typography


                            sx={{fontSize: {sm: '16px', xs: '20px'}, color: 'black'}}
                        >
                            {row.name}
                        </Typography>
                    </a>))}
            </Grid>
            <Grid item lg={2} md={4} sm={6} xs={12}>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: {sm: '16px', xs: '20px'}
                }}>Клиентам/партнерам</Typography>
                {clientsCol.map(row => (
                    <a key={row.id} href={'/clients'}>
                        <Typography
                            sx={{fontSize: {sm: '16px', xs: '20px'}, color: 'black'}}
                        >
                            {row.name}
                        </Typography>
                    </a>
                ))}
            </Grid>
            <Grid item lg={2} md={4} sm={6} xs={12}>
                <Typography
                    sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>Услуги</Typography>
                <a href="/services">
                    <Typography sx={{fontSize: {sm: '16px', xs: '20px', color: 'black'}}}>Перечень услуг</Typography>
                </a>
                <a href="/services">
                    <Typography sx={{fontSize: {sm: '16px', xs: '20px', color: 'black'}}}>Мощности</Typography>
                </a>

            </Grid>
            <Grid item lg={2} md={4} sm={6} xs={12}>
                <Typography
                    sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>Каталог</Typography>
                <a href="/delivery">
                    <Typography sx={{fontSize: {sm: '16px', xs: '20px'}, color: 'black'}}>продукция</Typography>
                </a>
            </Grid>
            <Grid item lg={2} md={4} sm={6} xs={12} sx={{display: {md: 'flex', sm: 'none', xs: 'none'}}}>
                <SecondBtn onClick={handleToggle} height={'54px'} color={'black'} text={'Оставить заявку'}/>
                <Backdrop
                    sx={{
                        color: 'black',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        zIndex: (theme) => theme.zIndex.drawer + 1
                    }}
                    open={open}
                    onClick={handleClose}
                >
                    <ModalForm/>
                </Backdrop>
            </Grid>
        </Grid>
    );
};

export default FooterLinks;
