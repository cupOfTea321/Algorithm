import React from 'react';
import MainDelivery from "../components/deliveryComponents/mainDelivery.jsx";
import WhyDelivery from "../components/deliveryComponents/WhyDelivery.jsx";
import FormBlock from "../components/UI/FormBlock.jsx";
import {Box} from "@mui/material";

const DeliveryPage = () => {
    return (
        <>
            <MainDelivery/>
            <WhyDelivery/>
            <Box sx={{marginTop: '6%'}}>
                <FormBlock/>
            </Box>

        </>
    );
};

export default DeliveryPage;
