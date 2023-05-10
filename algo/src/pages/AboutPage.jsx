import React from 'react';
import {Box} from "@mui/material";
import backImg from "../assets/Union.png";
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
                height: '740px',
                background: `linear-gradient(68.5deg, rgba(65, 59, 59, 0.62) 35.69%, rgba(105, 105, 105, 0) 133.84%), url(${backImg})`,
                // boxShadow: '12px 12px 2px 2px grey',
                backgroundSize: {sm: 'cover'},
                borderRadius: {sm:'0 0px 15% 15%',xs: '0 0 0 0'},
                zIndex: '100',
                position: 'absolute',
                top: '125px',
                width: '100vw',
                // filter: 'blur(1px)',
            }}>
                <AboutBanner/>
            </Box>
            <Box sx={{
                // height: {lg: '940px', md: '1240px'},
                paddingBottom: '5%',
                background: `linear-gradient(68.5deg, rgba(65, 59, 59, 0.62) 35.69%, rgba(105, 105, 105, 0) 133.84%), url(${backImg2})`,
                backgroundSize: 'cover',
                marginTop: '590px',
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
