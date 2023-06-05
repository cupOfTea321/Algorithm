import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import starBack from "../../assets/starBack.png";
import plus from "../../assets/plus.png";
import backRound from "../../assets/backRound.png";
import {useTranslation} from "react-i18next";

const CollectorsQualities = () => {
    const { t, i18n } = useTranslation();
    const list = [
        t("collectorsAction1"),
        t("collectorsAction2"),
        t("collectorsAction3"),
        t("collectorsAction4"),
    ]
    return (
        <Container maxWidth={'md'}>
        <Box  sx={{
            background: '#908B8B',
            color: 'white',
            borderRadius: '20px',
            padding: '30px',

            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: {lg: 'left', md: 'center', xs: 'center'},
            margin: '0 auto',
            marginTop: '-10%',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
        }} className={'animate__animated animate__fadeInUp wow '}>
            <Typography className={'oswFont'} sx={{ fontSize: {md: '32px', sm: '28px', xs: '28px'}, textAlign: 'center'}}>
                {t("collectorsActions")}
            </Typography>
            <Grid container sx={{width: '100%', marginTop: '5%', }}>
                {list.map((item, index) => (
                    <Grid key={index} item lg={3} md={6} sm={6} xs={12} sx={{width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '20px'}}>
                        <Box sx={{backgroundImage: `url(${starBack})`, height: '82px', width: '91px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Box component={'img'} src={plus} sx={{height: '35px', backgroundSize: 'cover', width: '35px', }}/>
                        </Box>
                        <Typography sx={{fontSize: '24px', width: '100%', textAlign: 'center'}}>
                            {item}
                        </Typography>

                    </Grid>
                ))}
            </Grid>

        </Box>
    {/* Фоновые круги */}
    <Box component={'img'} src={backRound} sx={{
        position: 'absolute',
        width: '150px',
        zIndex: '-2',
        left: '5%',
        top: '610px'
    }}/>
    <Box component={'img'} src={backRound} sx={{
        position: 'absolute',
        width: '150px',
        zIndex: '-1',
        right: '5%',
        top: '710px'
    }}/>
    <Box component={'img'} src={backRound} sx={{
        position: 'absolute',
        width: '150px',
        zIndex: '-1',
        left: '50%',
        top: '800px'
    }}/>
    </Container>
    );
};

export default CollectorsQualities;
