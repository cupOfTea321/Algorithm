import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import mark from '../assets/mark.png'
import map from '../assets/back3_test.png'
const MapBlock = () => {
    return (
        <Container maxWidth={'xl'} sx={{marginTop: '5%'}}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                <img src={mark} alt="mark" style={{width: '55px', height: '70px'}}/>
                <Typography sx={{fontSize: '42px', marginLeft: '2%'}}>
                    Мы на карте
                </Typography>
            </Box>
            <Box sx={{display: 'flex', marginTop: '4%', marginBottom: '4%', alignItems: 'center'}}>
                <Typography sx={{fontSize: '34px'}}>
                    ООО “Алгоритм” - современное производственное предприятие,
                    направлением деятельности которого является хранение,
                    перевалка, оформление, отгрузка дизельного топлива российских
                    производителей через терминал нефтепродуктов Мичуринск - Никольское.
                </Typography>
                <img src={map} alt="map" style={{width: '800px', height: '600px'}}/>
            </Box>

        </Container>
    );
};

export default MapBlock;
