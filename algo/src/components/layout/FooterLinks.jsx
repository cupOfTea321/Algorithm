import React from 'react';
import {Backdrop, Box, Grid, Typography} from "@mui/material";
import SecondBtn from "../UI/SecondBtn.jsx";
import ModalForm from "../UI/ModalForm.jsx";
import MyBtn from "../UI/MyBtn.jsx";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import policy from "../../docs/policy.pdf";



const FooterLinks = () => {
    const { t, i18n } = useTranslation();
    const [openPolicy, setOpenPolicy] = React.useState(false);
    const handleClosePolicy = () => {
        setOpenPolicy(false);
    };
    const handleTogglePolicy = () => {
        setOpenPolicy(!openPolicy);
    };

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
        <Grid container spacing={6} sx={{width: '100%', textAlign: {sm: 'left', xs: 'center'}}}>
            <Grid item lg={2} md={4} sm={6} xs={12}>

                <Typography
                    sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>
                    {t("footerMain")}
                </Typography>
                {mainCol.map(row => (
                    <NavLink key={row.id} to={'/'}>
                        <Typography


                            sx={{fontSize: {sm: '16px', xs: '20px'}, color: 'black'}}
                        >
                            {row.name}
                        </Typography>
                    </NavLink>

                ))}
            </Grid>
            <Grid item lg={2} md={4} sm={6} xs={12}>
                <Typography sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>
                    {t("footerAbout")}
                </Typography>
                {aboutCol.map(row => (
                    <NavLink key={row.id} to={'/about'}>
                        <Typography


                            sx={{fontSize: {sm: '16px', xs: '20px'}, color: 'black'}}
                        >
                            {row.name}
                        </Typography>
                    </NavLink>))}
            </Grid>
            <Grid item lg={2} md={4} sm={6} xs={12}>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: {sm: '16px', xs: '20px'}
                }}>{t("footerClients")}</Typography>
                {clientsCol.map(row => (
                    <NavLink key={row.id} to={'/clients'}>
                        <Typography
                            sx={{fontSize: {sm: '16px', xs: '20px'}, color: 'black'}}
                        >
                            {row.name}
                        </Typography>
                    </NavLink>
                ))}
            </Grid>
            <Grid item lg={2} md={4} sm={6} xs={12}>
                <Typography
                    sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>{t("footerServices")}</Typography>
                <NavLink to="/services">
                    <Typography sx={{fontSize: {sm: '16px', xs: '20px', color: 'black'}}}>{t("servicesTypes")}</Typography>
                </NavLink>
                <NavLink to="/services">
                    <Typography sx={{fontSize: {sm: '16px', xs: '20px', color: 'black'}}}>{t("servicesPowers")}</Typography>
                </NavLink>

            </Grid>

            <Grid item lg={4} md={8} sm={12} xs={12} sx={{display: {md: 'flex',}, flexDirection: 'column', }}>
                <Box   sx={{display: 'flex', flexDirection: {sm: 'row', xs: 'column'}, justifyContent: 'space-between'}}>
                    <Box>
                        <Typography
                            sx={{fontWeight: 'bold', fontSize: {sm: '16px', xs: '20px'}}}>{t("footerCatalog")}</Typography>
                        <NavLink to="/delivery">
                            <Typography sx={{fontSize: {sm: '16px', xs: '20px'}, color: 'black'}}>{t("catalogProducts")}</Typography>
                        </NavLink>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center', width: {sm:'50%', xs: '100%'}}}>
                        <MyBtn  weight={'normal'} size={'{xl: `12px`, lg: `16px`}'} width={{lg: "200px", md: "300px", sm: '250px', xs: '80%'}}  border={'3px solid #A40000'} radius={'20px'} backgroundColor={''} onClick={handleToggle} height={'54px'} color={'black'}/>

                    </Box>
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
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: {sm: 'flex-end', xs: 'center'}, marginTop: '20px'}}>
                    {/*<a  target="_blank" rel="noopener noreferrer">Политика обработки персональных данных</a>*/}

                    <Typography onClick={handleTogglePolicy} component={'a'} sx={{color: 'black', textAlign: 'right', textDecoration: 'underline'}}>
                        {t("policy1")}
                    </Typography>
                    <Typography onClick={handleTogglePolicy} component={'a'} sx={{color: 'black', textAlign: 'right',  textDecoration: 'underline'}}>{t("policy2")}</Typography>
                    <Backdrop
                        sx={{
                            color: 'black',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            zIndex: (theme) => theme.zIndex.drawer + 1
                        }}
                        open={openPolicy}
                        onClick={handleClosePolicy}
                    >
                        <Box component={'iframe'} src={policy}
                             sx={{
                                 width: {sm: '60%', xs: '80%'},
                                 height: '80%'
                             }} frameBorder='1'>
                        </Box>
                    </Backdrop>
                </Box>
            </Grid>

        </Grid>
    );
};

export default FooterLinks;
