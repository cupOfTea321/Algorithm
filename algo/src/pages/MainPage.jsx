import React from 'react';
import {Box, Container} from "@mui/material";
import backImg from '../assets/back1.png'
import FirstBanner from "../components/FirstBanner.jsx";
import MainServices from "../components/MainServices.jsx";
import PowersBlock from "../components/PowersBlock.jsx";

const MainPage = () => {
    return (
        <>
            <Box sx={{
                height: '740px',
                background: `linear-gradient(68.5deg, rgba(65, 59, 59, 0.62) 35.69%, rgba(105, 105, 105, 0) 133.84%), url(${backImg})`,
                backgroundSize: 'cover'
            }}>
                    <FirstBanner/>
            </Box>
            <MainServices/>
            <PowersBlock/>
        </>

    );
};

export default MainPage;
