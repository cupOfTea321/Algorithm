import React from 'react';


import balance from "../../docs/Bukhgalterskii_774_balans_2.pdf";
import uchet from "../../docs/svidetelstvo_o_postanovke_na_uchet.pdf";
import inn from "../../docs/INN_OGRN_ALT_grupp.pdf";
import ustav from "../../docs/Ustav_ALT_s_podpisyu_FNS.pdf";
import balanceImg from "../../docs/balance.png";
import uchetImg from "../../docs/uchet.png";
import innImg from "../../docs/inn.png";
import ustavImg from "../../docs/ustav.png";
import {Backdrop, Box, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import ServiceImgBlock from "../serviceComponents/ServiceImgBlock.jsx";
import DocImgBlock from "./docImgBlock.jsx";
const ClientsDocs = () => {
    const { t, i18n } = useTranslation();
    const [openBalance, setOpenBalance] = React.useState(false);
    const handleCloseBalance = () => {
        setOpenBalance(false);
    };
    const handleToggleBalance = () => {
        setOpenBalance(!openBalance);
    };
    const [openInn, setOpenInn] = React.useState(false);
    const handleCloseInn = () => {
        setOpenInn(false);
    };
    const handleToggleInn = () => {
        setOpenInn(!openInn);
    };
    const [openUstav, setOpenUstav] = React.useState(false);
    const handleCloseUstav = () => {
        setOpenUstav(false);
    };
    const handleToggleUstav = () => {
        setOpenUstav(!openUstav);
    };
    const [openUchet, setOpenUchet] = React.useState(false);
    const handleCloseUchet = () => {
        setOpenUchet(false);
    };
    const handleToggleUchet = () => {
        setOpenUchet(!openUchet);
    };
    const docs = [
        {
            src: balance,
            img: balanceImg,
            name: t("balance1"),
            open: openBalance,
            close: handleCloseBalance,
            toggle: handleToggleBalance
        },
        {
            src: uchet,
            img: uchetImg,
            name: t("registrationDoc"),
            open: openUchet,
            close: handleCloseUchet,
            toggle: handleToggleUchet
        },
        {
            src: inn,
            img: innImg,
            name: t("inn"),
            open: openInn,
            close: handleCloseInn,
            toggle: handleToggleInn
        },
        {
            src: ustav,
            img: ustavImg,
            name: t("ustav"),
            open: openUstav,
            close: handleCloseUstav,
            toggle: handleToggleUstav
        },
    ]
    return (
        <>
            <Typography sx={{fontSize: {md: '34px', sm:'26px', xs: '20px'}, color: '#A81A1A'}}>
                {t("docs")}
            </Typography>


            <Box sx={{
                marginTop: {sm: '2%', xs: '5%'},
                display: {md: 'grid'},
                // height: '100vh',
                justifyContent: 'center',
                gridTemplateColumns: {xl: 'repeat(2, 560px)', lg: 'repeat(2, 420px)',md: 'repeat(1, 480px)', sm: 'repeat(1, 420px)'},
                gridTemplateRows: {md: 'repeat(2, 420px)', sm: 'repeat(1, 320px)', xs: 'repeat(1, 220px)'},
                gap: 4,

            }}>
                {docs.map((doc, index) => (
                    <Box key={index} >
                        <Box  sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            // marginBottom: '40px',
                            height: {sm: '360px', xs: '240px'}
                        }}
                              onClick={doc.toggle}>
                            <DocImgBlock link={doc.link} image={doc.img} name={doc.name}/>
                        </Box>
                        <Typography className={'serviceName'} sx={{fontSize: {sm: '30px', xs: '20px'}, color: '#A40000',
                            textDecoration: 'underline', textAlign: 'center', marginTop: {sm:'20px', xs: '-30px'}, marginBottom: {xs:'20px'},
                            filter: 'blur(0px)', opacity: '1'}}>
                            {doc.name}
                        </Typography>
                        <Backdrop
                            sx={{
                                color: 'black',
                                backgroundColor: 'rgba(0,0,0,0.3)',
                                zIndex: (theme) => theme.zIndex.drawer + 1,
                            }}
                            open={doc.open}
                            onClick={doc.close}
                        >
                            <Box component={'iframe'} src={doc.src}
                                 sx={{
                                     width: {sm: '60%', xs: '80%'},
                                     height: '80%'
                                 }} frameBorder='1'>
                            </Box>
                        </Backdrop>
                    </Box>


                ))}
            </Box>
        </>
    );
};

export default ClientsDocs;
