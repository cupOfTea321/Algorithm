import React from 'react';
import {Backdrop, Box, Container, Typography} from "@mui/material";
import backRound from '../../assets/backRound.png'
import MyBtn from "../UI/MyBtn.jsx";
import ModalForm from "../UI/ModalForm.jsx";
import {useTranslation} from "react-i18next";
const OrderService = ({order}) => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
            <Box sx={{
                display: 'flex',
                background: '#908B8B',
                color: 'white',
                borderRadius: '20px',
                padding: '30px',

                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: {lg: 'row', md: 'column', xs: 'column'},
                textAlign: {lg: 'left', md: 'center', xs: 'center'},
                width: {md: '80%', sm: '100%'},
                margin: '0 auto',
                marginTop: '4%',
            }}>
                <Box className={'animate__animated animate__fadeInLeft wow'} sx={{width: {lg: '50%', sm: '100%', xs: '100%'}}}>
                    <Typography className={'oswFont'} sx={{fontSize: '34px', marginBottom: '20px'}}>
                        {t("orderService")}
                    </Typography>
                    <Typography sx={{fontSize: '22px'}}>
                        {order.secondTitle}
                    </Typography>
                </Box>
                <Box className={'animate__animated animate__fadeInRight wow'} >
                    <Typography className={'oswFont'} sx={{marginBottom: '20px', fontSize: '28px'}}>
                        {order.quantity}
                    </Typography>
                    <MyBtn onClick={handleToggle} radius={'20px'} height={'54px'}/>
                    <Backdrop
                        sx={{ color: 'black',backgroundColor: 'rgba(0,0,0,0.3)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <ModalForm/>
                    </Backdrop>
                </Box>

                {/* Фоновые круги */}
                <Box component={'img'} src={backRound} sx={{
                    position: 'absolute',
                    width: '150px',
                    zIndex: '-1',
                    left: '10%',
                    top: '780px'
                }}/>
                <Box component={'img'} src={backRound} sx={{
                    position: 'absolute',
                    width: '150px',
                    zIndex: '-1',
                    right: '10%',
                    top: '800px'
                }}/>
                <Box component={'img'} src={backRound} sx={{
                    position: 'absolute',
                    width: '150px',
                    zIndex: '-1',
                    left: '50%',
                    top: '980px'
                }}/>
            </Box>
    );
};

export default OrderService;
