import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
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
        <Box sx={{
            // display: 'flex',
            background: '#908B8B',
            color: 'white',
            borderRadius: '20px',
            padding: '30px',

            justifyContent: 'space-between',
            alignItems: 'center',
            // flexDirection: {lg: 'row', md: 'column', xs: 'column'},
            textAlign: {lg: 'left', md: 'center', xs: 'center'},
            width: {md: '80%', sm: '100%'},
            margin: '0 auto',
            marginTop: '-10%',
        }}>
            <Typography className={'oswFont'} sx={{ fontSize: {lg: '44px', md: '32px', sm: '28px', xs: '28px'}, textAlign: 'center'}}>
                {t("collectorsActions")}
            </Typography>
            <Grid container sx={{width: '100%', marginTop: '5%', }}>
                {list.map((item, index) => (
                    <Grid key={index} item lg={3} md={6} sm={6} xs={12} sx={{width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '20px'}}>
                        <Box sx={{backgroundImage: `url(${starBack})`, height: '122px', width: '132px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Box component={'img'} src={plus} sx={{height: '45px', backgroundSize: 'cover', width: '45px', }}/>
                        </Box>
                        <Typography sx={{fontSize: '24px', width: '100%', textAlign: 'center'}}>
                            {item}
                        </Typography>

                    </Grid>
                ))}
            </Grid>
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
        </Box>
    );
};

export default CollectorsQualities;
