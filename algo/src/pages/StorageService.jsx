import React from 'react';
import backImg from "../assets/servicesBack.png";
import FirstBanner from "../components/FirstBanner.jsx";
import {Box, Container, Typography} from "@mui/material";
import ServicesBanner from "../components/serviceComponents/ServicesBanner.jsx";
import OrderService from "../components/serviceComponents/OrderService.jsx";
import ReasonsBlock from "../components/serviceComponents/ReasonsBlock.jsx";

const reasons = [
    'соответствие емкостей требованиям отраслевых нормативных актов;',
    'обеспечение свободного подъезда транспорта, освещение территории в темное время;',
    'наличие противопожарного оборудования;',
    'наличие ответственного лица;',
    'территория нефтебазы оборудована современными системами охраны и видеонаблюдения.',
]
const storage = {
    mainTitle: 'ХРАНЕНИЕ ТОПЛИВА',
    secondTitle: 'Бережно храним вашу продукцию, соблюдая необходимые требования, чтобы сохранить все качества топлива',
    list: [
        'Действуем в рамках нормативных документов',
        'Гарантируем качество',
        'Контроль срока годности',
        'Соблюдение условий хранения',
    ]
}
const order = {
    secondTitle: 'Оформите заявку на услугу, и мы свяжемся с Вами в ближайшее время, ответим на все интересующие вопросы и начнем работу',
    quantity: '15 р/т в сутки',
}
const reasonTitle = 'Главные требования к условиям хранения топлива'
const StorageService = () => {
    return (
        <>
            <ServicesBanner storage={storage}/>
            <Container maxWidth={'xl'}>
                <OrderService order={order}/>
                <ReasonsBlock title={reasonTitle} reasons={reasons}/>
                <Typography sx={{fontSize: {sm:'26px', xs: '20px'}, marginTop: '20px'}}>
                    Сохранность Ваших нефтепродуктов осуществляется согласно правилам статьи 891 ГК РФ, Приказа
                    Министерства энергетики РФ № 231 от 19.06.2003 г. «Об утверждении инструкции по контролю и
                    обеспечению сохранения качества нефтепродуктов в организациях нефтепродуктообеспечения» и других
                    обязательных правил и требований по хранению ГСМ.
                </Typography>
                <Typography sx={{fontSize: {sm:'26px', xs: '20px'}, marginTop: '20px'}}>
                    Мы делаем все для обеспечения сохранности нефтепродуктов и несем ответственность за утрату,
                    недостачу или ухудшение качества нефтепродуктов, принятых на хранение, согласно ГОСТ 1510-84 «Нефть
                    и нефтепродукты. Маркировка, упаковка, транспортировка и хранение".
                </Typography>
            </Container>
        </>
    );
};

export default StorageService;
