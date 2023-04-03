import React from 'react';
import {Backdrop, Grid, Typography} from "@mui/material";
import SecondBtn from "../UI/SecondBtn.jsx";
import ModalForm from "../UI/ModalForm.jsx";
import MyBtn from "../UI/MyBtn.jsx";
import {useTranslation} from "react-i18next";



const FooterLinks = () => {
    const { t, i18n } = useTranslation();
    const mainCol = [
        {id: 1, name: t("mainServ"), link: '/'},
        {id: 2, name: t("mainCapacities"), link: '/'},
        {id: 3, name: t("mainStages"), link: '/'},
        {id: 4, name: t("mainWhy"), link: '/'},
        {id: 5, name: t("mainMap"), link: '/'},
    ]
    const aboutCol = [
        {id: 1, name: t("aboutKnow")},
        {id: 2, name: t("aboutBenefits")},
        {id: 3, name: t("aboutAreas")},
    ]
    const clientsCol = [
        {id: 1, name: t("clientsDocs")},
        {id: 2, name: t("clientsCollectors")},
        {id: 3, name: t("clientsStages")},
        {id: 4, name: t("clientsWhy")},
    ]
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
                    sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>
                    {t("footerMain")}
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
                <Typography sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>
                    {t("footerAbout")}
                </Typography>
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
                }}>{t("footerClients")}</Typography>
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
                    sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>{t("footerServices")}</Typography>
                <a href="/services">
                    <Typography sx={{fontSize: {sm: '16px', xs: '20px', color: 'black'}}}>{t("servicesTypes")}</Typography>
                </a>
                <a href="/services">
                    <Typography sx={{fontSize: {sm: '16px', xs: '20px', color: 'black'}}}>{t("servicesPowers")}</Typography>
                </a>

            </Grid>
            <Grid item lg={1} md={4} sm={6} xs={12}>
                <Typography
                    sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>{t("footerCatalog")}</Typography>
                <a href="/delivery">
                    <Typography sx={{fontSize: {sm: '16px', xs: '20px'}, color: 'black'}}>{t("catalogProducts")}</Typography>
                </a>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12} sx={{display: {md: 'flex', sm: 'none', xs: 'none'}}}>
                <MyBtn width={'300px'}  border={'3px solid #A40000'} radius={'20px'} backgroundColor={''} onClick={handleToggle} height={'54px'} color={'black'}/>
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
