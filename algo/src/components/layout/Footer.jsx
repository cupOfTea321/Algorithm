import React from 'react';
import {Backdrop, Box, Container, Typography} from "@mui/material";
import policy from '../../docs/policy.pdf'
import FooterLinks from "./FooterLinks.jsx";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation();
    const [openPolicy, setOpenPolicy] = React.useState(false);
    const handleClosePolicy = () => {
        setOpenPolicy(false);
    };
    const handleTogglePolicy = () => {
        setOpenPolicy(!openPolicy);
    };

    return (
        <Box sx={{
            marginTop: '5%',
            background: '#D9D9D9',
            paddingTop: '3%'
        }}>
            <Container maxWidth="md">
                {/*<Box sx={{*/}
                {/*    display: 'flex',*/}
                {/*    width: '100%',*/}
                {/*    flexDirection: {sm: 'row', xs: 'column'},*/}
                {/*    alignItems: {sm: 'flex-start', xs: 'center'},*/}
                {/*    border: '1px solid red'*/}
                {/*}}>*/}
                    {/*<Box sx={{*/}
                    {/*    paddingRight: {sm: '6%', xs: '0%'},*/}
                    {/*    marginTop: {sm: '0px', xs: '20px'},*/}
                    {/*    width: {md: '20%'},*/}
                    {/*    marginBottom: '2%'*/}
                    {/*}}>*/}
                    {/*    <a href="#">*/}
                    {/*        <img id={'footerLogo'} style={{marginBottom: '3%'}} src={logo} alt="LOGO"/>*/}
                    {/*    </a>*/}


                    {/*    <Typography sx={{fontSize: {sm: '14px', xs: '20px'}, fontWeight: 'bold'}}>*/}
                    {/*        <a href="src/components/layout/Footer.jsx#"*/}
                    {/*           style={{textDecoration: 'underline', color: 'black'}}>info@alg-bio.ru</a>*/}
                    {/*    </Typography>*/}
                    {/*</Box>*/}
                    <FooterLinks/>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: {sm: 'flex-end', xs: 'center'}, marginTop: '20px', paddingBottom: '30px'}}>
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
                {/*</Box>*/}



            </Container>
        </Box>
    );
};

export default Footer;
