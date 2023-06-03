import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import mark from '../assets/mark.png'
import MyMap from "./MyMap.jsx";
import {useTranslation} from "react-i18next";


const MapBlock = () => {
    const { t, i18n } = useTranslation();
    return (
        <Container id={'mapBlock'} maxWidth={'md'} sx={{marginTop: '2%'}} className={'animate__animated animate__fadeInUp wow'}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: {lg: 'flex-end', md: 'center', sm: 'center', xs: 'center'}, marginBottom: '50px'}}>
                <img src={mark} alt="mark" style={{width: '55px', height: '70px'}}/>
                <Typography className={'oswFont'} sx={{fontSize: {sm:'34px', xs: '28px'}, textAlign: '', marginLeft: '2%'}}>
                    {t("mapBlock")}
                </Typography>
            </Box>
            <MyMap/>
            {/*<Box sx={{flexDirection: {lg: 'row', md: 'column-reverse', sm: 'column-reverse', xs: 'column-reverse'}, display: 'flex', marginTop: '4%', marginBottom: '4%', alignItems: 'center'}}>*/}
            {/*    <Typography sx={{fontSize: {lg: '34px', md: '26px', sm: '20px', xs: '16px'}}}>*/}
            {/*        {t("mapAbout")}*/}
            {/*    </Typography>*/}


            {/*</Box>*/}

        </Container>
    );
};

export default MapBlock;
