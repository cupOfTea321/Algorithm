import React from 'react';

import balance from "../../docs/Bukhgalterskii_774_balans_1.pdf";
import balance2 from "../../docs/Bukhgalterskii_774_balans_2.pdf";
import uchet from "../../docs/svidetelstvo_o_postanovke_na_uchet.pdf";
import {Backdrop, Box, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
const ClientsDocs = () => {
    const { t, i18n } = useTranslation();
    const [openBalance, setOpenBalance] = React.useState(false);
    const handleCloseBalance = () => {
        setOpenBalance(false);
    };
    const handleToggleBalance = () => {
        setOpenBalance(!openBalance);
    };
    const [openBalance2, setOpenBalance2] = React.useState(false);
    const handleCloseBalance2 = () => {
        setOpenBalance2(false);
    };
    const handleToggleBalance2 = () => {
        setOpenBalance2(!openBalance2);
    };
    const [openUchet, setOpenUchet] = React.useState(false);
    const handleCloseUchet = () => {
        setOpenUchet(false);
    };
    const handleToggleUchet = () => {
        setOpenUchet(!openUchet);
    };
    return (
        <>
            <Typography sx={{fontSize: {md: '34px', sm:'26px', xs: '20px'}, color: '#A81A1A'}}>
                {t("docs")}
            </Typography>

            <Typography onClick={handleToggleBalance} component={'a'} sx={{color: 'black', cursor: 'pointer', fontSize: '20px'}}>
                {t("balance1")}
            </Typography>
            <Backdrop
                sx={{
                    color: 'black',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                open={openBalance}
                onClick={handleCloseBalance}
            >
                <Box component={'iframe'} src={balance}
                     sx={{
                         width: {sm: '60%', xs: '80%'},
                         height: '80%'
                     }} frameBorder='1'>
                </Box>
            </Backdrop>

            <Typography onClick={handleToggleBalance2} component={'a'} sx={{color: 'black', cursor: 'pointer',  fontSize: '20px'}}>
                {t("balance2")}
            </Typography>
            <Backdrop
                sx={{
                    color: 'black',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                open={openBalance2}
                onClick={handleCloseBalance2}
            >
                <Box component={'iframe'} src={balance2}
                     sx={{
                         width: {sm: '60%', xs: '80%'},
                         height: '80%'
                     }} frameBorder='1'>
                </Box>
            </Backdrop>
            <Typography onClick={handleToggleUchet} component={'a'} sx={{color: 'black', cursor: 'pointer',  fontSize: '20px'}}>
                {t("registrationDoc")}
            </Typography>
            <Backdrop
                sx={{
                    color: 'black',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={openUchet}
                onClick={handleCloseUchet}
            >
                <Box component={'iframe'} src={uchet}
                     sx={{
                         width: {sm: '60%', xs: '80%'},
                         height: '80%'
                     }} frameBorder='1'>
                </Box>
            </Backdrop>
        </>
    );
};

export default ClientsDocs;
