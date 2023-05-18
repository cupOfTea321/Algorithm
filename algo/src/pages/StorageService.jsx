import React from 'react';
import {Container, Typography} from "@mui/material";
import ServicesBanner from "../components/serviceComponents/ServicesBanner.jsx";
import OrderService from "../components/serviceComponents/OrderService.jsx";
import ReasonsBlock from "../components/serviceComponents/ReasonsBlock.jsx";
import {useTranslation} from "react-i18next";


const StorageService = () => {
    const { t, i18n } = useTranslation();
    const reasons = [
        t("storageRequest1"),
        t("storageRequest2"),
        t("storageRequest3"),
        t("storageRequest4"),
        t("storageRequest5"),
    ]
    const storage = {
        mainTitle: t("storageMain"),
        secondTitle: t("storageMain2"),
        list: [
            t("storageP1"),
            t("storageP2"),
            t("storageP3"),
            t("storageP4"),
        ]
    }
    const order = {
        secondTitle: t("orderAbout"),
        quantity: t("orderPrice"),
    }
    const reasonTitle = t("storageRequests")
    return (
        <>
            <ServicesBanner storage={storage}/>
            <Container maxWidth={'xl'}>
                <OrderService order={order}/>
                <ReasonsBlock title={reasonTitle} reasons={reasons}/>
                <Typography className={'animate__animated animate__fadeInLeft wow'} sx={{fontSize: {sm:'26px', xs: '20px'}, marginTop: '20px'}}>
                    {t("storageDoc1")}
                </Typography>
                <Typography className={'animate__animated animate__fadeInLeft wow'} sx={{fontSize: {sm:'26px', xs: '20px'}, marginTop: '20px'}}>
                    {t("storageDoc2")}
                </Typography>
            </Container>
        </>
    );
};

export default StorageService;
