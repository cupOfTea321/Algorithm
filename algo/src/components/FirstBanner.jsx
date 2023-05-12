import React from 'react';
import {Backdrop, Box, Container, Typography} from "@mui/material";
import MyBtn from "./UI/MyBtn.jsx";
import SecondBtn from "./UI/SecondBtn.jsx";
import './components.css'
import ModalForm from "./UI/ModalForm.jsx";
import {useTranslation} from "react-i18next";
const FirstBanner = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <Container maxWidth={'xl'}>
            <Box sx={{
                color: 'white',
                width: {md: '60%', xs: '100%'},
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '10%',
                // justifyContent: 'center',
                gap: 2
            }} className={'animate__animated animate__fadeInLeft'}>
                <Typography className={'oswFont'} variant={'h1'} sx={{
                    fontSize: {lg: '48px', md: '36px', sm: '30px', xs: '36px'},

                }}>
                    {/*{t("mainBanner")}*/}
                    Группа компаний АЛТ -
                </Typography>
                <Typography variant={'h3'} sx={{
                    fontSize: {sm: '24px', xs: '18px'}
                }}>
                    {/*{t("mainBanner2")}*/}
                    современная <Typography sx={{color: '#A40000', fontSize: {sm: '24px', xs: '18px'}}} component={'span'}>топливная группа</Typography>,
                    объединяющая в себе юридические лица, осуществляющие деятельность в области разработки, внедрения, консультирования по вопросам
                    эмиссии парниковых газов сокращением СО2 и технологий возобновляемых источников энергии, в том числе реализацией проекта производства
                    биодизельного FAME из любого вида сырьяи биодизельного топлива, а также хранения, перевалки, экспортного оформления продуктов нефтепереработки,
                    производства товаров-присадок, в том числе через собственный терминал на станции Мичуринск Воронежский, услуги смешанной логистики.
                </Typography>
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    marginTop: '5%',
                    flexDirection: {sm: 'row', xs: 'column'},
                }}>
                    <MyBtn onClick={handleToggle} radius={'32px'} height={'70px'}/>

                    <SecondBtn to={'../delivery'} height={'70px'}/>
                </Box>
            </Box>
            <Backdrop
                sx={{ color: 'black',backgroundColor: 'rgba(0,0,0,0.3)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <ModalForm/>
            </Backdrop>
        </Container>
    );
};

export default FirstBanner;
