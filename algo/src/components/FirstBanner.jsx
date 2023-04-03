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
                width: {md: '48%', xs: '100%'},
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '15%',
                gap: 2
            }}>
                <Typography className={'oswFont'} variant={'h1'} sx={{
                    fontSize: {lg: '48px', md: '36px', sm: '30px', xs: '36px'},

                }}>
                    {t("mainBanner")}
                </Typography>
                <Typography variant={'h3'} sx={{
                    fontSize: '24px'
                }}>
                    {t("mainBanner2")}
                </Typography>
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    marginTop: '5%',
                    flexDirection: {sm: 'row', xs: 'column'},
                }}>
                    <MyBtn onClick={handleToggle} radius={'32px'} height={'70px'}/>
                    <Backdrop
                        sx={{ color: 'black',backgroundColor: 'rgba(0,0,0,0.3)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <ModalForm/>
                    </Backdrop>
                    <SecondBtn to={'../delivery'} height={'70px'}/>
                </Box>
            </Box>
        </Container>
    );
};

export default FirstBanner;
