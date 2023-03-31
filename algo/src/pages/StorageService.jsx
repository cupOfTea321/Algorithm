import React from 'react';
import backImg from "../assets/servicesBack.png";
import FirstBanner from "../components/FirstBanner.jsx";
import {Box} from "@mui/material";
import ServicesBanner from "../components/serviceComponents/ServicesBanner.jsx";
import OrderService from "../components/serviceComponents/OrderService.jsx";

const StorageService = () => {
    return (
        <>
            <Box sx={{
                // height: {sm:'740px', xs: '940px'},
                paddingBottom: '5%',
                // background: `linear-gradient(68.5deg, rgba(65, 59, 59, 0.62) 35.69%, rgba(105, 105, 105, 0) 133.84%), url(${backImg})`,
                // background: `rgba(135, 141, 146, 0.45)`,
                // backgroundImage: `url(${backImg})`,
                background: `linear-gradient(68.5deg, rgba(65, 59, 59, 0.62) 35.69%, rgba(105, 105, 105, 0) 133.84%), url(${backImg})`,

                backgroundSize: 'cover',

            }}>
                <ServicesBanner/>
            </Box>
            <OrderService/>
        </>
    );
};

export default StorageService;
