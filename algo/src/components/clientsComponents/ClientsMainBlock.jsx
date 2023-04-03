import React from 'react';
import {Backdrop, Box, Container, Typography} from "@mui/material";
import MyBtn from "../UI/MyBtn.jsx";
import ModalForm from "../UI/ModalForm.jsx";
import ClientsDocs from "./ClientsDocs.jsx";
import {useTranslation} from "react-i18next";


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
        <Container maxWidth={'xl'}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '10%',
                gap: 2,
                textAlign: 'center',
            }}>
                <Typography className={'oswFont'} variant={'h1'} sx={{
                    fontSize: {lg: '60px', md: '48px', sm: '42px', xs: '36px'},
                    color: '#A81A1A',
                }}>
                    {t("clientsMain")}
                </Typography>
                <Typography variant={'h3'} sx={{
                    fontSize: '28px',
                    color: '#A81A1A',
                }}>
                    {t("clientsMain2")}
                </Typography>
                <Box sx={{display: 'flex', width: '100%', justifyContent: 'center', gap: {sm: 6, xs: 1}, marginTop: '5%'}}>

                    <Box sx={{display: 'flex', flexDirection: 'column',background: 'white', borderRadius: '20px',  width: '82%', paddingTop: '20px', paddingBottom: '20px'}}>
                        <ClientsDocs/>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '82%', margin: '0 auto', background: 'white', borderRadius: '20px', gap: 2, marginTop: '2%'}}>
                    <Typography sx={{fontSize: {md: '34px', sm:'26px', xs: '20px'}, color: '#A81A1A'}}>
                        {t("algo")}
                    </Typography>
                    <Typography sx={{fontSize: '20px'}}>
                        {t("algoAbout")}
                    </Typography>
                    <Typography sx={{fontSize: '20px'}}>
                        <a href={'#'} style={{textDecoration: 'underline', color: 'black', marginBottom: '10px'}}>
                            {t("algoMore")}
                        </a>
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '6%'}}>
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
