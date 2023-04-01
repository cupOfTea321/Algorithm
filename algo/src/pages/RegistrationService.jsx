import React from 'react';
import {Box, Container} from "@mui/material";
import ServicesBanner from "../components/serviceComponents/ServicesBanner.jsx";
import OrderService from "../components/serviceComponents/OrderService.jsx";
import ReasonsBlock from "../components/serviceComponents/ReasonsBlock.jsx";



const storage = {
    mainTitle: 'ОТГРУЗКА ТОПЛИВА',
    secondTitle: 'Обеспечиваем своевременную доставку топлива, оформленную документацию и высокий уровень оказания услуги',
    list: [
        'Не допускаем аварийных ситуаций',
        'Клиентская поддержка',
        'Качественная продукция',
        'Отгрузка в сутки: от 6 до 12 ЖД вагонов',
    ]
}
const order = {
    secondTitle: 'Оформите заявку на услугу, и мы свяжемся с Вами в ближайшее время, ответим на все интересующие вопросы и начнем работу',
    quantity: '',
}
const reasons = [
    'Ж/Д поставки',
    'Танкерные перевозки по воде',
]
const reasonTitle = 'Способы доставки:'
const reasons2 = [
    'Документальное оформление',
    'Допуск транспортного средства к перевозке',
    'Соблюдение требований безопасности при перевозке и отгрузке',
    'Подготовленные водители т/с',
]
const reasonTitle2 = 'Условия перевозки:'
const RegistrationService = () => {
    return (
        <>
            <ServicesBanner storage={storage}/>
            <Container maxWidth={'xl'}>
                <OrderService order={order}/>
                <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: {sm: 'row', xs: 'column'}}}>
                    <ReasonsBlock title={reasonTitle} reasons={reasons}/>
                    <ReasonsBlock title={reasonTitle2} reasons={reasons2}/>
                </Box>

            </Container>
        </>
    );
};

export default RegistrationService;
