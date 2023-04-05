import React from 'react';
import {Box} from "@mui/material";
import ServicesMainBlock from "../components/serviceComponents/servicesMainBlock.jsx";
import PowersBlock from "../components/UI/PowersBlock.jsx";
import FormBlock from "../components/UI/FormBlock.jsx";

const ServicesPage = () => {
    return (
        <>
            <Box sx={{
                paddingBottom: '50px',
                background: `linear-gradient(140.2deg, #696969 19.94%, rgba(105, 105, 105, 0) 127.43%);`,
                backgroundSize: 'cover'
            }}>
                <ServicesMainBlock/>
            </Box>
            <Box sx={{marginTop: {sm: '0', xs:'-40%'}}}>
                <PowersBlock/>
            </Box>

            <Box sx={{marginTop: '80px'}}>
                <FormBlock/>
            </Box>

        </>
    );
};

export default ServicesPage;
