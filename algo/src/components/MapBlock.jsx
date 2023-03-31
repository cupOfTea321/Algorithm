import React, {useEffect} from 'react';
import {Box, Container, Typography} from "@mui/material";
import mark from '../assets/mark.png'
import map from '../assets/back3_test.png'
import MyMap from "./MyMap.jsx";



// ymaps.ready(init);

const MapBlock = () => {
    // useEffect(() => {
    //     let center = [48.8866527839977,2.34310679732974];
    //
    //     function init() {
    //         console.log('init')
    //         let map = new ymaps.Map('map-test', {
    //             center: center,
    //             zoom: 17
    //         });
    //
    //         map.controls.remove('geolocationControl'); // удаляем геолокацию
    //         map.controls.remove('searchControl'); // удаляем поиск
    //         map.controls.remove('trafficControl'); // удаляем контроль трафика
    //         map.controls.remove('typeSelector'); // удаляем тип
    //         map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    //         map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    //         map.controls.remove('rulerControl'); // удаляем контрол правил
    //         map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    //     }
    //     ymaps.ready(init);
    //     window.addEventListener("popstate", init);
    //
    //     return () => {
    //         window.removeEventListener("popstate", init);
    //     };
    // }, [window.location]);
    return (
        <Container maxWidth={'xl'} sx={{marginTop: '5%'}}>
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
                {/*<Box>*/}
                {/*    <img id={'map'} src={map} alt="map" />*/}
                {/*</Box>*/}

                {/*<div id="map-test" style={{width: '600px', height: '400px'}}></div>*/}

                <MyMap/>
            </Box>

        </Container>
    );
};

export default MapBlock;
