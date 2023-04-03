import React from 'react';
import {Container} from "@mui/material";
import ServicesBanner from "../components/serviceComponents/ServicesBanner.jsx";
import OrderService from "../components/serviceComponents/OrderService.jsx";
import ReasonsBlock from "../components/serviceComponents/ReasonsBlock.jsx";
import {useTranslation} from "react-i18next";




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
            <ServicesBanner storage={storage}/>
            <Container maxWidth={'xl'}>
                <OrderService order={order}/>
                <ReasonsBlock title={reasonTitle} reasons={reasons}/>
            </Container>
        </>
    );
};

export default ShipmentService;
