import React, { useState, useEffect } from "react";
import {YMaps, Map, Placemark} from "react-yandex-maps";
import mark from '../assets/mark.png'
function MyMap() {
    const [ymaps, setYmaps] = useState(null);
    const [map, setMap] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const center = [48.8866527839977,2.34310679732974];
    useEffect(() => {


        if (!ymaps || !map) return;

        const myPlacemark = new ymaps.Placemark(center, {
            center: center,
            zoom: 17
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
            query={{ load: "package.full", apikey: "YOUR_API_KEY" }} // здесь нужно указать ключ API Яндекс Карт
            onApiAvaliable={handleApiAvaliable}
        >
            <Map
                defaultState={{ center: center, zoom: 17 , controls: []}}
                options={{
                    yandexMapDisablePoiInteractivity: true
                }}
                width="120%"
                height="400px"
                onLoad={handleMapCreated}
            >
                <Placemark
                    geometry={center}
                    options={{
                        // iconLayout: 'default#image',
                        iconImageHref: {mark},
                        iconImageSize: [30, 30],
                        balloonContentBody: 'Это метка на Яндекс.Картах',
                    }}
                />
            </Map>
        </YMaps>
    );
}

export default MyMap;
