import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import logo from '../assets/footerLogo.png'
import MyBtn from "./UI/MyBtn.jsx";


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
    return (
        <Box sx={{
            marginTop: '5%',
            background: '#D9D9D9',
            paddingTop: '3%'
        }}>
            <Container maxWidth={'xl'}>
                <Box sx={{display: 'flex', width: '100%', flexDirection: {sm:'row', xs: 'column'}, alignItems: {sm: 'flex-start', xs:'center'}}}>
                    <Box sx={{marginRight: '6%'}}>
                        <img id={'footerLogo'} style={{ marginBottom: '3%'}} src={logo} alt="LOGO"/>
                        <Typography sx={{marginBottom: '1%'}}>
                            +7 965 235 77 33
                        </Typography>
                        <Typography>
                            <a href="#" style={{textDecoration: 'underline'}}>info@alg-bio.ru</a>
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: {sm: 'flex-start', xs:'center'}, width:'100%', flexDirection: {sm:'row', xs: 'column'}}}>
                        <Box sx={{width: {lg: '15%', xs: '50%'}}}>
                            <Typography sx={{fontWeight: 'bold'}}>Главная</Typography>
                            {mainCol.map(row => (
                                <Typography>{row.name}</Typography>
                            ))}
                        </Box>
                        <Box sx={{width: {lg: '15%', xs: '50%'}}}>
                            <Typography sx={{fontWeight: 'bold'}}>О биодизеле</Typography>
                            {aboutCol.map(row => (
                                <Typography>{row.name}</Typography>
                            ))}
                        </Box>
                        <Box sx={{width: {lg: '15%', xs: '50%'}}}>
                            <Typography sx={{fontWeight: 'bold'}}>Клиентам/партнерам</Typography>
                            {clientsCol.map(row => (
                                <Typography>{row.name}</Typography>
                            ))}
                        </Box>
                        <Box sx={{width: {lg: '15%', xs: '50%'}}}>
                            <Typography sx={{fontWeight: 'bold'}}>Услуги</Typography>
                            <Typography>Перечень услуг</Typography>
                            <Typography>Мощности</Typography>
                        </Box>
                        <Box sx={{width: {lg: '15%', xs: '50%'}}}>
                            <Typography sx={{fontWeight: 'bold'}}>Каталог</Typography>
                            <Typography>продукция</Typography>
                        </Box>
                        <Box sx={{width: {lg: '15%', xs: '50%'}}}>
                            <MyBtn width={'250px'} />
                        </Box>
                    </Box>
                </Box>



            </Container>
        </Box>
    );
};

export default Footer;
