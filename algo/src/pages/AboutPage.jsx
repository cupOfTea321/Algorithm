import React from 'react';
import {Box} from "@mui/material";
import backImg from "../assets/aboutBlack.png";
import backImg2 from "../assets/aboutBack2.png";
import AboutBanner from "../components/aboutComponents/AboutBanner.jsx";
import AboutBlock from "../components/aboutComponents/AboutBlock.jsx";
import AdvantagesBlock from "../components/UI/AdvantagesBlock.jsx";
import CircleBlock from "../components/aboutComponents/CircleBlock.jsx";
import NewsAboutBlock from "../components/aboutComponents/NewsAboutBlock.jsx";
import LinesBlock from "../components/aboutComponents/LinesBlock.jsx";

const AboutPage = () => {
    return (
        <>
            <Box sx={{
                // height: '740px',
                paddingBottom: {sm: '160px', xs: '60px'},
                background: `url(${backImg})`,
                // background: `linear-gradient(68.5deg, rgba(65, 59, 59, 0.62) 35.69%, rgba(105, 105, 105, 0) 133.84%), url(${backImg})`,
                backgroundSize: {sm: 'cover'},
                borderRadius: {sm:'0 0px 15% 15%',xs: '0 0 0 0'},
                zIndex: '100',
                position: 'absolute',
                top: '125px',
                width: '100vw',
            }}>
                <AboutBanner/>
            </Box>
            <Box sx={{
                paddingBottom: '5%',
                background: `linear-gradient(68.5deg, rgba(65, 59, 59, 0.62) 35.69%, rgba(105, 105, 105, 0) 133.84%), url(${backImg2})`,
                backgroundSize: 'cover',
                marginTop: {md: '450px', sm: '360px', xs: '360px'},
                zIndex: '-10',
            }}>
                <AboutBlock/>
            </Box>
            <CircleBlock/>
            <NewsAboutBlock/>
            <LinesBlock/>
        </>
    );
};

export default AboutPage;
