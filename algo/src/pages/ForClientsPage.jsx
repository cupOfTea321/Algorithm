import React from 'react';

import backImg from "../assets/clientsBack2.png";
import {Box} from "@mui/material";
import ClientsMainBlock from "../components/clientsComponents/ClientsMainBlock.jsx";
import StagesBlock from "../components/UI/StagesBlock.jsx";
import FormBlock from "../components/UI/FormBlock.jsx";
import AdvantagesBlock from "../components/UI/AdvantagesBlock.jsx";

const ForClientsPage = () => {
    return (
        <>
            <Box sx={{
                // background: `radial-gradient(103.57% 169.05% at 50% 50%, rgba(221, 214, 214, 0.9) 0%, rgba(220, 215, 215, 0.27) 56.4%, rgba(217, 217, 217, 0) 100%), url(${backImg})`,
                background: `url(${backImg})`,
                // filter: 'grayscale(100%)',
                backgroundSize: 'cover'
            }}>
                <ClientsMainBlock/>
            </Box>
            <Box sx={{
                marginTop: {sm:'-10%', xs: '-15%'}
            }}>
                <StagesBlock/>
            </Box>
            <AdvantagesBlock/>
            <FormBlock/>


        </>
    );
};

export default ForClientsPage;
