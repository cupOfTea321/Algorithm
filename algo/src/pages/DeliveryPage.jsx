import React from 'react';
import MainDelivery from "../components/deliveryComponents/mainDelivery.jsx";
import WhyDelivery from "../components/deliveryComponents/WhyDelivery.jsx";
import FormBlock from "../components/UI/FormBlock.jsx";
import {Box, Paper} from "@mui/material";
import backPhone from '../assets/deliveryPhone.png'
import AdvantagesBlock from "../components/UI/AdvantagesBlock.jsx";
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
            {/*<WhyDelivery/>*/}
            <AdvantagesBlock/>
            <Box sx={{marginTop: '6%'}}>
                <FormBlock/>
            </Box>

        </>
    );
};

export default DeliveryPage;
