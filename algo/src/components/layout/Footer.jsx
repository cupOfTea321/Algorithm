import React from 'react';
import {Backdrop, Box, Container, Grid, Typography} from "@mui/material";
import logo from '../../assets/footerLogo.png'
import MyBtn from "../UI/MyBtn.jsx";
import SecondBtn from "../UI/SecondBtn.jsx";
import ModalForm from "../UI/ModalForm.jsx";
import DocViewer from 'react-doc-viewer';
import policy from '../../policy.pdf'
import {Link} from 'react-router-dom'
const mainCol = [
    {id: 1, name: 'Наши услуги', link: '/'},
    {id: 2, name: 'Мощности', link: '/'},
    {id: 3, name: 'Этапы работы', link: '/'},
    {id: 4, name: 'Почему мы?', link: '/'},
    {id: 5, name: 'Статьи', link: '/'},
    {id: 6, name: 'Мы на карте', link: '/'},
]
const aboutCol = [
    {id: 1, name: 'Особенности', link: '#'},
    {id: 2,name: 'Преимущества', link: '#'},
    {id: 3,name: 'Направление использования', link: '#'},
]
const clientsCol = [
    {name: 'Договоры', link: '#'},
    {name: 'Документация', link: '#'},
    {name: 'Утилизаторам', link: '#'},
    {name: 'Этапы работы', link: '#'},
    {name: 'Почему мы?', link: '#'},
]
const url = '../../policy.pdf';
const Footer = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const [openPolicy, setOpenPolicy] = React.useState(false);
    const handleClosePolicy = () => {
        setOpenPolicy(false);
    };
    const handleTogglePolicy = () => {
        setOpenPolicy(!open);
    };
    return (
        <Box sx={{
            marginTop: '5%',
            background: '#D9D9D9',
            paddingTop: '3%'
        }}>
            <Container maxWidth={'xl'}>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: {sm: 'row', xs: 'column'},
                    alignItems: {sm: 'flex-start', xs: 'center'}
                }}>
                    <Box sx={{
                        paddingRight: {sm: '6%', xs: '0%'},
                        marginTop: {sm: '0px', xs: '20px'},
                        width: {md: '10%'},
                        marginBottom: '2%'
                    }}>
                        <a href="#">
                            <img id={'footerLogo'} style={{marginBottom: '3%'}} src={logo} alt="LOGO"/>
                        </a>

                        <Typography sx={{marginBottom: '1%', fontSize: {sm: '16px', xs: '20px'}, fontWeight: 'bold'}}>
                            +7 965 235 77 33
                        </Typography>
                        <Typography sx={{fontSize: {sm: '16px', xs: '20px'}, fontWeight: 'bold'}}>
                            <a href="src/components/layout/Footer.jsx#"
                               style={{textDecoration: 'underline', color: 'black'}}>info@alg-bio.ru</a>
                        </Typography>
                    </Box>
                    <Grid container spacing={2} sx={{width: '100%', textAlign: {sm: 'left', xs: 'center'}}}>
                        <Grid item lg={2} md={4} sm={6} xs={12}>

                            <Typography
                                href={'/'}
                                sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>Главная
                            </Typography>
                            {mainCol.map(row => (
                                <a id={row.id} href={'/'}>
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
                                <a id={row.id} href={'/about'}>
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
                                <a id={row.id} href={'/clients'}>
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
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                    {/*<a  target="_blank" rel="noopener noreferrer">Политика обработки персональных данных</a>*/}

                    <Typography onClick={handleTogglePolicy} component={'a'} sx={{color: 'black', textDecoration: 'underline'}}>
                        Политика обработки персональных данных
                    </Typography>
                    <Typography onClick={handleTogglePolicy} component={'a'} sx={{color: 'black', textDecoration: 'underline'}}>Согласие на обработку персональных данных</Typography>
                    <Backdrop
                        sx={{
                            color: 'black',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            zIndex: (theme) => theme.zIndex.drawer + 1
                        }}
                        open={openPolicy}
                        onClick={handleClosePolicy}
                    >
                        <iframe
                            src={policy}
                            width='60%' height='80%' frameBorder='1'>
                        </iframe>
                    </Backdrop>
                </Box>

            </Container>
        </Box>
    );
};

export default Footer;
