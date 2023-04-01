import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import backRound from '../../assets/backRound.png'
import MyBtn from "../UI/MyBtn.jsx";
const OrderService = ({order}) => {
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
                <Box sx={{width: {lg: '50%', sm: '100%', xs: '100%'}}}>
                    <Typography className={'oswFont'} sx={{fontSize: '34px', marginBottom: '20px'}}>
                        Заказать услугу
                    </Typography>
                    <Typography sx={{fontSize: '22px'}}>
                        {order.secondTitle}
                    </Typography>
                </Box>
                <Box >
                    <Typography className={'oswFont'} sx={{marginBottom: '20px', fontSize: '28px'}}>
                        {order.quantity}
                    </Typography>
                    <MyBtn radius={'20px'} height={'54px'}/>
                </Box>
            </Box>
    );
};

export default OrderService;
