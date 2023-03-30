import React from 'react';
import backImg from "../assets/clientsBack.png";
import ClientsMainBlock from "../components/clientsComponents/ClientsMainBlock.jsx";
import {Box} from "@mui/material";
import ServicesMainBlock from "../components/serviceComponents/servicesMainBlock.jsx";
import PowersBlock from "../components/UI/PowersBlock.jsx";
import FormBlock from "../components/UI/FormBlock.jsx";

const ServicesPage = () => {
    return (
        <>
            <Box sx={{
                // height: {md: '1340px'},
                paddingBottom: '50px',
                background: `linear-gradient(140.2deg, #696969 19.94%, rgba(105, 105, 105, 0) 127.43%);`,
                backgroundSize: 'cover'
            }}>
                <ServicesMainBlock/>
            </Box>
            <PowersBlock/>
            <Box sx={{marginTop: '80px'}}>
                <FormBlock/>
            </Box>

        </>
    );
};

export default ServicesPage;
