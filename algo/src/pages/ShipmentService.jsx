import React from 'react';
import {Container, Typography} from "@mui/material";
import ServicesBanner from "../components/serviceComponents/ServicesBanner.jsx";
import OrderService from "../components/serviceComponents/OrderService.jsx";
import ReasonsBlock from "../components/serviceComponents/ReasonsBlock.jsx";
import {useTranslation} from "react-i18next";
import stonks from '../assets/stonks.jpg'


// Брокерские услуги
const ShipmentService = () => {
    const { t, i18n } = useTranslation();

    const storage = {
        mainTitle: t("shipmentMain"),
        secondTitle: t("shipmentSecond"),
        list: [
            t("shipment1"),
            t("shipment2"),
            t("shipment3"),
            t("shipment4"),
        ]
    }
    const order = {
        secondTitle: t("shipmentAbout"),
        quantity: t("shipmentPrice")
    }
    const reasonTitle = t("shipmentRequests")
    const reasons = [
        t("shipmentRequest1"),
        t("shipmentRequest2"),
        t("shipmentRequest3"),
        t("shipmentRequest4"),
    ]

    return (
        <>
            <ServicesBanner author={true} back={`linear-gradient(68.5deg, rgba(65, 59, 59, 0.62) 35.69%, rgba(105, 105, 105, 0) 133.84%), url(${stonks})`} storage={storage}/>
            <Container maxWidth={'md'}>
                <OrderService order={order}/>
                <ReasonsBlock title={reasonTitle} reasons={reasons}/>

            </Container>

        </>
    );
};

export default ShipmentService;
