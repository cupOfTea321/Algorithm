import React, {useEffect} from 'react';
import {Box, Container, Typography} from "@mui/material";
import mark from '../assets/mark.png'
import map from '../assets/back3_test.png'
import MyMap from "./MyMap.jsx";




const MapBlock = () => {
    return (
        <Container id={'mapBlock'} maxWidth={'xl'} sx={{marginTop: '5%'}}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: {lg: 'flex-end', md: 'center', sm: 'center', xs: 'center'}}}>
                <img src={mark} alt="mark" style={{width: '55px', height: '70px'}}/>
                <Typography className={'oswFont'} sx={{fontSize: {sm:'34px', xs: '28px'}, textAlign: '', marginLeft: '2%'}}>
                    Мы на карте
                </Typography>
            </Box>
            <Box sx={{flexDirection: {lg: 'row', md: 'column-reverse', sm: 'column-reverse', xs: 'column-reverse'}, display: 'flex', marginTop: '4%', marginBottom: '4%', alignItems: 'center'}}>
                <Typography sx={{fontSize: {lg: '34px', md: '26px', sm: '20px', xs: '16px'}}}>
                    ООО “Алгоритм” - современное производственное предприятие,
                    направлением деятельности которого является хранение,
                    перевалка, оформление, отгрузка дизельного топлива российских
                    производителей через терминал нефтепродуктов Мичуринск - Никольское.
                </Typography>


                <MyMap/>
            </Box>

        </Container>
    );
};

export default MapBlock;
