import React from 'react';
import {Backdrop, Box, Container, Grid, Typography} from "@mui/material";
import MyBtn from "./MyBtn.jsx";
import backRound from "../../assets/backRound.png";
import ModalForm from "./ModalForm.jsx";
import stagesBack from '../../assets/stages.png'
import {useTranslation} from "react-i18next";
const stageNumbers = [1, 2, 3, 4]

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
            paddingBottom: '10%',
        }}>
            <Container maxWidth={'xl'} sx={{marginTop: '5%', paddingTop: '5%', width: '100vw', }}>
                <Typography className={'oswFont'} variant={'h3'} sx={{color: 'white', fontSize: '40px', textAlign: 'center'}}>
                    {t("stagesBlock")}
                </Typography>
                <Grid container sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    {stageNumbers.map(stNum => (
                        <Grid key={stNum} item lg={3} md={6} sm={12} xs={12}>
                            <Typography variant={'h3'} sx={{fontSize: {md:'160px', sm: '120px', xs: '120px'}, lineHeight: '113.2%', color: '#A40000',}}>
                                {stNum}
                            </Typography>
                        </Grid>

                    ))}
                </Grid>
                <Grid container sx={{color: 'white', marginLeft: '-4%', display: 'flex', textAlign: 'center', marginTop: {lg: '-50px', md: '-280px', sm: '-520px', xs: '-500px'}}}>
                    {stages.map(stage => (
                        <Grid key={stage.name} item lg={3} md={6} sm={12} xs={12} sx={{marginBottom: {md: '60px', sm: '30px', xs: '25px'}}}>
                            <Typography className={'oswFont'} variant={'h4'} sx={{fontSize: {lg:'34px', md: '26px', sm: '32px', xs: '32px'}}}>
                                {stage.name}
                            </Typography>
                            <Typography variant={'h5'} sx={{fontSize: {lg: '24px', md: '18px', sm: '26px', xs: '18px'}}}>
                                {stage.about}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{display: 'flex', justifyContent: 'center', marginTop: {md: '-40px', xs:'20px'}}}>
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
                <Box component={'img'} src={backRound} alt="" sx={{width: {xl: '150px',sm: '100px', xs: '50px'}, position: 'absolute', right: 0, zIndex: '-1', bottom: {xl: '1300px', lg: '1200px', md: '1150px', sm: '1100px', xs: '1800px'}}}/>
                <Box component={'img'} src={backRound} alt="" sx={{width: {xl: '150px',sm: '100px', xs: '50px'}, position: 'absolute', left: {sm:'-60px', xs: '0'}, zIndex: '-1', bottom: {sm:'600px', xs: '1500px'} }}/>
                <Box component={'img'} src={backRound} alt="" sx={{width: {xl: '150px',sm: '100px', xs: '50px'}, position: 'absolute', right: 0, zIndex: '-1', bottom: {sm:'160px', xs: '1000px'}}}/>

            </Container>
        </Box>

    );
};

export default StagesBlock;
