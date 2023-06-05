import React from 'react';
import {Backdrop, Box, Container, Typography} from "@mui/material";
import MyBtn from "./UI/MyBtn.jsx";
import SecondBtn from "./UI/SecondBtn.jsx";
import './components.css'
import ModalForm from "./UI/ModalForm.jsx";
import {useTranslation} from "react-i18next";
import imgMain from '../assets/mainImg.png'
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
        <Container maxWidth="xl">
            <Box sx={{display: 'flex', alignItems: 'center', flexDirection: {md: 'row', sm: 'column-reverse', xs: 'column-reverse'}, }}>
                <Box sx={{
                    color: 'white',
                    width: {md: '50%', xs: '100%'},
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '10%',
                    // justifyContent: 'center',
                    gap: 2
                }} className={'animate__animated animate__fadeInLeft'}>
                    <Typography className={'oswFont'} variant={'h1'} sx={{
                        fontSize: {md: '36px', sm: '30px', xs: '28px'},
                        textAlign: {sm: 'left', xs: 'center'}
                    }}>
                        {t("mainBanner")}
                    </Typography>
                    {/*цистерна мобилка*/}
                    <Box component={'img'} src={imgMain} sx={{
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'top center',
                        width: {md: '50%', sm: '80%', xs: '100%'},
                        display: {md: 'none', sm: 'block', xs: 'block'}
                    }} className={'animate__animated animate__fadeInRight'}/>
                    <Typography variant={'h3'} sx={{
                        fontSize: {sm: '18px', xs: '18px'}

                    }}>
                        {t("mainBannerBefore")}
                        <Typography sx={{color: '#A40000', fontSize: {sm: '18px', xs: '18px'}, fontWeight: 'bold'}} component={'span'}>
                            {t("mainBannerRed")}
                        </Typography>,
                        {t("mainBannerAfter")}

                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        marginTop: '5%',
                        flexDirection: {sm: 'row', xs: 'row'},
                        width: '100%',
                        justifyContent: {sm: 'flex-start',xs: 'center'}
                    }}>
                        <MyBtn width={{lg: '300px', md: '200px', sm: '200px', xs: '40vw'}} onClick={handleToggle} radius={'32px'} height={'70px'}/>

                        <SecondBtn width={{lg: '300px',md: '200px', sm: '200px', xs: '40vw'}} to={'../delivery'} height={'70px'}/>
                    </Box>
                </Box>
                 {/*цистерна ПК*/}
                <Box component={'img'} src={imgMain} sx={{
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top center',
                    width: {md: '50%', sm: '80%', xs: '100%'},
                    display: {md: 'block', sm: 'none', xs: 'none'}
                }} className={'animate__animated animate__fadeInRight'}/>
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
