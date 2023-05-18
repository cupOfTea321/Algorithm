import React from 'react';
import {Backdrop, Box, Container, Typography} from "@mui/material";
import delivery1 from '../../assets/delivery1.png'
import delivery2 from '../../assets/delivery2.png'
import delivery3 from '../../assets/delivery3.png'
import MyBtn from "../UI/MyBtn.jsx";
import ModalForm from "../UI/ModalForm.jsx";
import {useTranslation} from "react-i18next";


const MainDelivery = () => {
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
            <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', gap: 4, alignItems: 'center', }}>
                <Typography className={'animate__animated animate__fadeInDown wow'} sx={{fontSize: {lg: '40px', md: '32px', sm: '28px', xs: '24px'}, }}>
                    {t("catalogMain")}
                </Typography>
                <Box className={'animate__animated animate__fadeInDown wow'} sx={{alignItems: 'flex-start', display: 'flex', gap: 4, width: '100%', justifyContent: 'space-between', flexDirection: {sm:'row', xs: 'column'},}}>
                    <Box sx={{display: 'flex',  alignItems: 'center',}}>
                        <img src={delivery1} alt="" style={{width: '80px', marginRight: '20px'}}/>
                        <Box>
                            <Typography sx={{fontWeight: 'bold', fontSize: {sm:'28px', xs: '24px'}}}>
                                {t("catalogTitle1")}
                            </Typography>
                            <Typography sx={{fontSize: '20px'}}>{t("catalogText11")}</Typography>
                            <Typography sx={{fontSize: '20px'}}>{t("catalogText12")}</Typography>
                            <Typography sx={{fontSize: '20px'}}>{t("catalogText13")}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex',  alignItems: 'center',}}>
                        <img src={delivery3} alt="" style={{width: '80px', marginRight: '20px'}}/>
                        <Typography sx={{fontWeight: 'bold', fontSize: {sm:'28px', xs: '24px'}}}>
                            {t("catalogTitle3")}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <img src={delivery2} alt="" style={{width: '80px', marginRight: '20px'}}/>
                        <Box>
                            <Typography sx={{fontWeight: 'bold', fontSize: {sm:'28px', xs: '24px'}}}>
                                {t("catalogTitle2")}
                            </Typography>
                            <Typography sx={{fontSize: '20px'}}>{t("catalogText21")}</Typography>
                            <Typography sx={{fontSize: '20px'}}>{t("catalogText22")}</Typography>
                            <Typography sx={{fontSize: '20px'}}>{t("catalogText23")}</Typography>
                        </Box>
                    </Box>

                </Box>
                <Box className={'animate__animated animate__fadeInUp wow'} sx={{display: 'flex', width: '100%', justifyContent: 'center', flexDirection: {sm:'row', xs: 'column'}, marginTop: '0%'}}>

                    <MyBtn onClick={handleToggle} height={'70px'} radius={'20px'} width={{sm: '320px', xs: '230px'}}/>
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

export default MainDelivery;
