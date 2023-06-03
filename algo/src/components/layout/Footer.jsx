import React from 'react';
import {Backdrop, Box, Container, Typography} from "@mui/material";
import logo from '../../assets/footerLogo.png'
import policy from '../../docs/policy.pdf'
import FooterLinks from "./FooterLinks.jsx";
import {useTranslation} from "react-i18next";
const Footer = () => {
    const { t, i18n } = useTranslation();

    return (
        <Box sx={{
            marginTop: '5%',
            background: '#D9D9D9',
            paddingTop: '3%'
        }}>
            <Container maxWidth="md">
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: {sm: 'row', xs: 'column'},
                    alignItems: {sm: 'flex-start', xs: 'center'}
                }}>
                    <Box sx={{
                        paddingRight: {sm: '6%', xs: '0%'},
                        marginTop: {sm: '0px', xs: '20px'},
                        width: {md: '20%'},
                        marginBottom: '2%'
                    }}>
                        <a href="#">
                            <img id={'footerLogo'} style={{marginBottom: '3%'}} src={logo} alt="LOGO"/>
                        </a>


                        <Typography sx={{fontSize: {sm: '14px', xs: '20px'}, fontWeight: 'bold'}}>
                            <a href="src/components/layout/Footer.jsx#"
                               style={{textDecoration: 'underline', color: 'black'}}>info@alg-bio.ru</a>
                        </Typography>
                    </Box>
                    <FooterLinks/>

                </Box>



            </Container>
        </Box>
    );
};

export default Footer;
