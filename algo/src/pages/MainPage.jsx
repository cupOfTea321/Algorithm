import React from 'react';
import {Box, Container} from "@mui/material";
import backImg from '../assets/back1.png'
import backImg2 from '../assets/back2.png'
import FirstBanner from "../components/FirstBanner.jsx";
import MainServices from "../components/MainServices.jsx";
import PowersBlock from "../components/PowersBlock.jsx";
import StagesBlock from "../components/StagesBlock.jsx";
import AdvantagesBlock from "../components/AdvantagesBlock.jsx";
import ArticlesPage from "../components/ArticlesPage.jsx";
import MapBlock from "../components/MapBlock.jsx";
import FormBlock from "../components/FormBlock.jsx";

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
            <StagesBlock/>
            <AdvantagesBlock/>
            <Box sx={{
                height: '520px',
                background: `linear-gradient(68.5deg, rgba(65, 59, 59, 0.62) 35.69%, rgba(105, 105, 105, 0) 133.84%), url(${backImg2})`,
                backgroundSize: 'cover'
            }}>
                <ArticlesPage/>
            </Box>
            <MapBlock/>
            <FormBlock/>
        </>

    );
};

export default MainPage;
