import React from 'react';
import {Container} from "@mui/material";
import ServicesBanner from "../components/serviceComponents/ServicesBanner.jsx";
import OrderService from "../components/serviceComponents/OrderService.jsx";
import ReasonsBlock from "../components/serviceComponents/ReasonsBlock.jsx";



const storage = {
    mainTitle: 'БРОКЕРСКИЕ УСЛУГИ',
    secondTitle: 'Осуществляем взаимодействие с клиринговыми компаниями, поставщиками и контрагентами, обладая при этом полным членством на бирже',
    list: [
        'Проконсультируем на всех этапах',
        'Гарантируем качество',
        'Прозрачность операций',
        'Безопасность при проведении расчета',
    ]
}
const order = {
    secondTitle: 'Оформите заявку на услугу, и мы свяжемся с Вами в ближайшее время, чтобы предоставить точный расчёт',
    quantity: '50 р/т - заключение сделки',
}
const reasonTitle = 'Формат взаимодействия и расчет цены:'
const reasons = [
    'Заключение сделки',
    'Возмещение расходов',
    'Биржевый сбор',
    'Клиринговый сбор',
]
const ShipmentService = () => {
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

export default ShipmentService;
