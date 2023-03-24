import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import mark from '../assets/mark.png'
import map from '../assets/back3_test.png'
const MapBlock = () => {
    return (
        <Container maxWidth={'xl'} sx={{marginTop: '5%'}}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: {lg: 'flex-end', md: 'center', sm: 'center', xs: 'center'}}}>
                <img src={mark} alt="mark" style={{width: '55px', height: '70px'}}/>
                <Typography sx={{fontSize: '42px', marginLeft: '2%'}}>
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
                <Box>
                    <img id={'map'} src={map} alt="map" />
                </Box>
            </Box>

        </Container>
    );
};

export default MapBlock;
