import React from 'react';
import MainDelivery from "../components/deliveryComponents/mainDelivery.jsx";
import WhyDelivery from "../components/deliveryComponents/WhyDelivery.jsx";
import FormBlock from "../components/UI/FormBlock.jsx";
import {Box, Paper} from "@mui/material";
import backPhone from '../assets/deliveryPhone.png'
const DeliveryPage = () => {
    return (
        <>
            <Paper sx={{
                // padding: '60px 0px',
                paddingTop: '20px',
                paddingBottom: '60px',
                background: `url(${backPhone})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center',
            }}>
                <MainDelivery/>

            </Paper>
            <WhyDelivery/>
            <Box sx={{marginTop: '6%'}}>
                <FormBlock/>
            </Box>

        </>
    );
};

export default DeliveryPage;
