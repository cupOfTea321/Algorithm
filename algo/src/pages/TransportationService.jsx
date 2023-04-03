import React from 'react';
import {Container} from "@mui/material";
import ServicesBanner from "../components/serviceComponents/ServicesBanner.jsx";
import OrderService from "../components/serviceComponents/OrderService.jsx";
import ReasonsBlock from "../components/serviceComponents/ReasonsBlock.jsx";
import {useTranslation} from "react-i18next";



const TransportationService = () => {
    const { t, i18n } = useTranslation();

    const storage = {
        mainTitle: t("transportationMain"),
        secondTitle: t("transportationSecond"),
        list: [
            t("transport1"),
            t("transport2"),
            t("transport3"),
            t("transport4"),
        ]
    }
    const order = {
        secondTitle: t("orderAbout"),
        quantity: t("transportPrice"),
    }
    const reasonTitle = t("transportRequests")
    const reasons = [
        t("transportRequest1"),
        t("transportRequest2"),
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

export default TransportationService;
