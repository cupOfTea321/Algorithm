import React from 'react';
import {Paper} from "@mui/material";
import backImg from '../assets/mainPhone.png'
// import backPhone from '../assets/безфона.png'
import FirstBanner from "../components/FirstBanner.jsx";
import MainServices from "../components/MainServices.jsx";
import PowersBlock from "../components/UI/PowersBlock.jsx";
import StagesBlock from "../components/UI/StagesBlock.jsx";
import AdvantagesBlock from "../components/UI/AdvantagesBlock.jsx";
import MapBlock from "../components/MapBlock.jsx";
import FormBlock from "../components/UI/FormBlock.jsx";

const MainPage = () => {
    return (
        <>
            <Paper sx={{
                // background: `linear-gradient(68.5deg, rgba(65, 59, 59, 0.62) 35.69%, rgba(105, 105, 105, 0) 133.84%), url(${backImg})`,
                background: ` url(${backImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center',
                paddingBottom: '30px'
            }} >

                <FirstBanner/>
            </Paper>
            <MainServices/>
            <PowersBlock/>
            <StagesBlock/>
            <AdvantagesBlock/>
            <MapBlock/>
            <FormBlock/>
        </>

    );
};

export default MainPage;
