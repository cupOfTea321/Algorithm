import React from 'react';
import {Container} from "@mui/material";
import ServicesBanner from "../components/serviceComponents/ServicesBanner.jsx";
import OrderService from "../components/serviceComponents/OrderService.jsx";
import ReasonsBlock from "../components/serviceComponents/ReasonsBlock.jsx";


const reasons = [
    'приём ж/д вагонов-цистерн или автоцистерн;',
    'слив-налив из ж/д вагонов-цистерн или автоцистерн, предоставленных клиентом.',
]
const storage = {
    mainTitle: 'ПЕРЕВАЛКА ТОПЛИВА',
    secondTitle: 'Гарантируем, что ваш заказ будет доставлен вовремя при соблюдении всех правил безопасности',
    list: [
        'Не допускаем аварийных ситуаций',
        'Всегда на связи',
        'Бесперебойная перевозка',
        'Контроль температурного режима',
    ]
}
const order = {
    secondTitle: 'Оформите заявку на услугу, и мы свяжемся с Вами в ближайшее время, ответим на все интересующие вопросы и начнем работу',
    quantity: '500 р/т',
}
const reasonTitle = 'Что входит в услугу:'
const TransportationService = () => {
    return (
        <>
            <ServicesBanner storage={storage}/>
            <Container maxWidth={'xl'}>
                <OrderService order={order}/>
                <ReasonsBlock title={reasonTitle} reasons={reasons}/>
            </Container>
        </>
    );
};

export default TransportationService;
