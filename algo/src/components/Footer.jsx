import React from 'react';
import {Backdrop, Box, Container, Grid, Typography} from "@mui/material";
import logo from '../assets/footerLogo.png'
import MyBtn from "./UI/MyBtn.jsx";
import SecondBtn from "./UI/SecondBtn.jsx";
import ModalForm from "./UI/ModalForm.jsx";


const mainCol = [
    {name: 'Наши услуги', link: '#'},
    {name: 'Мощности', link: '#'},
    {name: 'Этапы работы', link: '#'},
    {name: 'Почему мы?', link: '#'},
    {name: 'Статьи', link: '#'},
    {name: 'Мы на карте', link: '#'},
]
const aboutCol = [
    {name: 'Особенности', link: '#'},
    {name: 'Преимущества', link: '#'},
    {name: 'Направление использования', link: '#'},
]
const clientsCol = [
    {name: 'Договоры', link: '#'},
    {name: 'Документация', link: '#'},
    {name: 'Утилизаторам', link: '#'},
    {name: 'Этапы работы', link: '#'},
    {name: 'Почему мы?', link: '#'},
]
const Footer = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{
            marginTop: '5%',
            background: '#D9D9D9',
            paddingTop: '3%'
        }}>
            <Container maxWidth={'xl'}>
                <Box sx={{display: 'flex', width: '100%', flexDirection: {sm:'row', xs: 'column'}, alignItems: {sm: 'flex-start', xs:'center'}}}>
                    <Box sx={{paddingRight: {sm: '6%', xs: '0%'}, marginTop: {sm: '0px', xs: '20px'}, width: {md:'10%'}, marginBottom: '2%'}}>
                        <img id={'footerLogo'} style={{ marginBottom: '3%'}} src={logo} alt="LOGO"/>
                        <Typography sx={{marginBottom: '1%', fontSize: {sm: '16px', xs: '20px'}, fontWeight: 'bold'}}>
                            +7 965 235 77 33
                        </Typography>
                        <Typography sx={{fontSize: {sm: '16px', xs: '20px'}, fontWeight: 'bold'}}>
                            <a href="#" style={{textDecoration: 'underline', color: 'black'}}>info@alg-bio.ru</a>
                        </Typography>
                    </Box>
                    <Grid container spacing={2} sx={{  width:'100%', textAlign: {sm: 'left', xs: 'center'}}}>
                        <Grid item lg={2} md={4} sm={6} xs={12}>
                            <Typography sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>Главная</Typography>
                            {mainCol.map(row => (
                                <Typography sx={{fontSize: {sm: '16px', xs: '20px'}}}>{row.name}</Typography>
                            ))}
                        </Grid>
                        <Grid item lg={2 } md={4} sm={6} xs={12}>
                            <Typography sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>О биодизеле</Typography>
                            {aboutCol.map(row => (
                                <Typography sx={{fontSize: {sm: '16px', xs: '20px'}}}>{row.name}</Typography>
                            ))}
                        </Grid>
                        <Grid item lg={2}  md={4} sm={6} xs={12}>
                            <Typography sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>Клиентам/партнерам</Typography>
                            {clientsCol.map(row => (
                                <Typography sx={{fontSize: {sm: '16px', xs: '20px'}}}>{row.name}</Typography>
                            ))}
                        </Grid>
                        <Grid item lg={2}  md={4} sm={6} xs={12}>
                            <Typography sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>Услуги</Typography>
                            <Typography sx={{fontSize: {sm: '16px', xs: '20px'}}}>Перечень услуг</Typography>
                            <Typography sx={{fontSize: {sm: '16px', xs: '20px'}}}>Мощности</Typography>
                        </Grid>
                        <Grid item lg={2}  md={4} sm={6} xs={12}>
                            <Typography sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>Каталог</Typography>
                            <Typography sx={{fontSize: {sm: '16px', xs: '20px'}}}>продукция</Typography>
                        </Grid>
                        <Grid item lg={2}  md={4} sm={6} xs={12} sx={{ display: {md: 'flex', sm: 'none', xs: 'none'}}}>
                            {/*<MyBtn width={'250px'} radius={'20px'} />*/}
                            <SecondBtn onClick={handleToggle} height={'54px'} color={'black'} text={'Оставить заявку'}/>
                            <Backdrop
                                sx={{ color: 'black',backgroundColor: 'rgba(0,0,0,0.3)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={open}
                                onClick={handleClose}
                            >
                                <ModalForm/>
                            </Backdrop>
                        </Grid>
                    </Grid>
                </Box>



            </Container>
        </Box>
    );
};

export default Footer;
