import React from 'react';
import {Backdrop, Box, Container, Typography} from "@mui/material";
import MyBtn from "../UI/MyBtn.jsx";
import ModalForm from "../UI/ModalForm.jsx";
import ClientsDocs from "./ClientsDocs.jsx";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";


const ClientsMainBlock = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <Container maxWidth={'md'}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '4%',
                gap: 4,
                textAlign: 'center',
            }} >
                <Typography className={'oswFont'} variant={'h1'} sx={{
                    fontSize: {md: '36px', sm: '30px', xs: '28px'},
                    color: '#A81A1A',
                }} className={'animate__animated animate__fadeInDown wow'}>
                    {t("clientsMain")}
                </Typography>
                <Typography className={'animate__animated animate__fadeInUp wow'} variant={'h3'} sx={{
                    fontSize: {sm: '24px', xs: '18px'},
                    color: '#A81A1A',
                }}>
                    {t("clientsMain2")}
                </Typography>
                <Box sx={{display: 'flex', width: '100%', justifyContent: 'center', gap: {sm: 6, xs: 1}, marginTop: '3%'}}>

                    <Box  sx={{display: 'flex', flexDirection: 'column',background: 'white', borderRadius: '20px',  width: {md: '100%',sm: '82%', xs: '98%'}, paddingTop: '20px', paddingBottom: '0px'}}>
                        <ClientsDocs/>
                    </Box>
                </Box>
                {/*<Box  sx={{display: 'flex', flexDirection: 'column', width: {sm: '82%', xs: '98%'}, margin: '0 auto', background: 'white', borderRadius: '20px', gap: 2,  paddingTop: '20px', paddingBottom: '20px'}}>*/}
                {/*    <Typography className={'animate__animated animate__fadeInDown wow'} sx={{fontSize: {sm: '32px', xs: '28px'}, color: '#A81A1A'}}>*/}
                {/*        {t("algo")}*/}
                {/*    </Typography>*/}
                {/*    <Typography sx={{fontSize: '20px'}} className={'animate__animated animate__fadeInUp wow'}>*/}
                {/*        {t("algoAbout")}*/}
                {/*    </Typography>*/}
                {/*    <Typography sx={{fontSize: '20px'}} className={'animate__animated animate__fadeInUp wow'}>*/}
                {/*        <NavLink to={'collectors'} style={{textDecoration: 'underline', color: 'black', marginBottom: '10px'}}>*/}
                {/*            {t("algoMore")}*/}
                {/*        </NavLink>*/}
                {/*    </Typography>*/}
                {/*</Box>*/}
                <Box className={'animate__animated animate__fadeInUp wow'} sx={{display: 'flex', justifyContent: 'center', marginTop: '2%', marginBottom: '10%', paddingBottom: {sm: '3%', xs:'10%'}}}>
                    <MyBtn onClick={handleToggle} radius={'20px'} height={'70px'}/>
                    <Backdrop
                        sx={{ color: 'black',backgroundColor: 'rgba(0,0,0,0.3)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <ModalForm/>
                    </Backdrop>
                </Box>
            </Box>
        </Container>
    );
};

export default ClientsMainBlock
