import React from 'react';
import {Box, Container} from "@mui/material";
import ServicesBanner from "../components/serviceComponents/ServicesBanner.jsx";
import OrderService from "../components/serviceComponents/OrderService.jsx";
import ReasonsBlock from "../components/serviceComponents/ReasonsBlock.jsx";
import {useTranslation} from "react-i18next";


const RegistrationService = () => {
    const { t, i18n } = useTranslation();
    const storage = {
        mainTitle: t("registrationMain"),
        secondTitle: t("registrationSecond"),
        list: [
            t("registration1"),
            t("registration2"),
            t("registration3"),
            t("registration4"),
        ]
    }
    const order = {
        secondTitle: t("orderAbout"),
        quantity: '',
    }
    const reasonTitle = t("registrationWays")
    const reasons = [
        t("registrationWay1"),
        t("registrationWay2"),
    ]

    const reasonTitle2 = t("registrationRequests")
    const reasons2 = [
        t("registrationRequest1"),
        t("registrationRequest2"),
        t("registrationRequest3"),
        t("registrationRequest4"),
    ]

    return (
        <>
            <ServicesBanner storage={storage}/>
            <Container maxWidth={'md'}>
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
