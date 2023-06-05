import React from 'react';
import {Box} from "@mui/material";
import ServicesMainBlock from "../components/serviceComponents/servicesMainBlock.jsx";
import PowersBlock from "../components/UI/PowersBlock.jsx";
import FormBlock from "../components/UI/FormBlock.jsx";
import backPhone from '../assets/ServicesPhone.png'
const ServicesPage = () => {
    return (
        <>
            <Box sx={{
                paddingBottom: '50px',
                // background: `linear-gradient(140.2deg, #696969 19.94%, rgba(105, 105, 105, 0) 127.43%);`,
                background: `url(${backPhone})`,
                backgroundSize: 'cover'
            }}>
                <ServicesMainBlock/>
            </Box>
            <Box sx={{marginTop: {sm: '50px', xs:'50px'}}}>
                <PowersBlock/>
            </Box>

            <Box sx={{marginTop: '80px'}}>
                <FormBlock/>
            </Box>

        </>
    );
};

export default ServicesPage;
