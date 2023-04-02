import React, { useState, useEffect } from "react";
import {YMaps, Map, Placemark} from "react-yandex-maps";
import mark from '../assets/mark.png'
import './components.css'
function MyMap() {
    const [ymaps, setYmaps] = useState(null);
    const [map, setMap] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const center = [52.957679, 40.391777];
    useEffect(() => {


        if (!ymaps || !map) return;

        const myPlacemark = new ymaps.Placemark(center, {
            center: center,
            zoom: 10,
            preset: 'islands#redIcon'
        });

        myPlacemark.controls.remove('geolocationControl'); // удаляем геолокацию
        myPlacemark.controls.remove('searchControl'); // удаляем поиск
        myPlacemark.controls.remove('trafficControl'); // удаляем контроль трафика
        myPlacemark.controls.remove('typeSelector'); // удаляем тип
        myPlacemark.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        myPlacemark.controls.remove('zoomControl'); // удаляем контрол зуммирования
        myPlacemark.controls.remove('rulerControl'); // удаляем контрол правил
        myPlacemark.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)


        myPlacemark.geoObjects.add(myPlacemark);

    }, [ymaps, map]);

    const handleApiAvaliable = (ymaps) => {
        setYmaps(ymaps);

    };

    const handleMapCreated = (map) => {
        setMap(map);

    };

    if(isLoading) {
        return null;
    }
    return (
        <YMaps
            query={{ load: "package.full", apikey: "fe5c4033-3bde-4268-b053-c0b515255152" }} // здесь нужно указать ключ API Яндекс Карт
            onApiAvaliable={handleApiAvaliable}
        >
            <Map
                id={'mapBlock'}
                defaultState={{ center: center, zoom: 10 , controls: []}}
                options={{
                    yandexMapDisablePoiInteractivity: true,

                }}
                width="100%"
                height="400px"
                onLoad={handleMapCreated}
            >
                <Placemark
                    geometry={center}
                    options={{
                        // iconLayout: 'default#image',
                        // iconImageHref: {mark},
                        preset: 'islands#redIcon',
                        iconImageSize: [30, 30],
                        balloonContentBody: 'Это метка на Яндекс.Картах',
                    }}
                />
            </Map>
        </YMaps>
    );
}

export default MyMap;
