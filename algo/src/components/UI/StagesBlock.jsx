import React from 'react';
import {Backdrop, Box, Container, Grid, Typography} from "@mui/material";
import MyBtn from "./MyBtn.jsx";
import backRound from "../../assets/backRound.png";
import ModalForm from "./ModalForm.jsx";
import stagesBack from '../../assets/stages.png'
import {useTranslation} from "react-i18next";

const StagesBlock = () => {
    const { t, i18n } = useTranslation();
    const stages = [
        {name: t("title1"), about: t("stage1")},
        {name: t("title2"), about: t("stage2")},
        {name: t("title3"), about: t("stage3")},
        {name: t("title4"), about: t("stage4")},
    ]
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{
            background: `url(${stagesBack})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            paddingBottom: '5%',
        }}>
            <Container maxWidth="md" sx={{marginTop: '5%', paddingTop: '5%', width: '100vw', }} className={'animate__animated animate__fadeInUp wow'}>
                <Typography className={'oswFont'} variant={'h3'} sx={{color: 'white', fontSize: {sm: '32px', xs: '28px'}, textAlign: 'center'}}>
                    {t("stagesBlock")}
                </Typography>
                <Grid spacing={1} container sx={{color: 'white', display: 'flex', textAlign: 'center', marginTop: {md: '30px', sm: '15px', xs: '10px'}}}>
                    {stages.map((stage, index) => (
                        <Grid key={stage.name} item lg={3} md={6} sm={12} xs={12} sx={{marginBottom: {md: '30px', sm: '15px', xs: '10px'}}}>
                            <Typography variant={'h3'} sx={{fontSize: {md:'160px', sm: '120px', xs: '120px'}, lineHeight: '113.2%', color: '#A40000', fontWeight: 'bold', textShadow: '0 0 5px rgba(0, 0, 0, 0.3)'}}>
                                {index + 1}
                            </Typography>
                            <Typography className={'oswFont'} variant={'h4'} sx={{fontSize: {lg:'26px', md: '24px', sm: '32px', xs: '32px'}}}>
                                {stage.name}
                            </Typography>
                            <Typography variant={'h5'} sx={{fontSize: {lg: '18px', md: '16px', sm: '26px', xs: '18px'}}}>
                                {stage.about}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{display: 'flex', justifyContent: 'center', }}>
                    <MyBtn onClick={handleToggle} radius={'14px'} height={'70px'}/>
                    <Backdrop
                        sx={{ color: 'black',backgroundColor: 'rgba(0,0,0,0.3)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <ModalForm/>
                    </Backdrop>
                </Box>
                {/*  Фоновые элементы  */}
                {/*<Box component={'img'} src={backRound} alt="" sx={{width: {xl: '150px',sm: '100px', xs: '50px'}, position: 'absolute', right: 0, zIndex: '-1', bottom: {xl: '1400px', lg: '1200px', md: '1150px', sm: '1100px', xs: '1800px'}}}/>*/}


            </Container>
            <Box component={'img'} src={backRound} alt="" sx={{width: {xl: '150px',sm: '100px', xs: '50px'}, position: 'absolute', left: {sm:'-60px', xs: '0'}, zIndex: '-1', bottom: {sm:'600px', xs: '1500px'} }}/>
            <Box component={'img'} src={backRound} alt="" sx={{width: {xl: '150px',sm: '100px', xs: '50px'}, position: 'absolute', right: 0, zIndex: '-1', bottom: {sm:'160px', xs: '1000px'}}}/>
        </Box>

    );
};

export default StagesBlock;
