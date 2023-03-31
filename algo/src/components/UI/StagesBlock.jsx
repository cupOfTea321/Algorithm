import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import MyBtn from "./MyBtn.jsx";
import backRound from "../../assets/backRound.png";

const stageNumbers = [1, 2, 3, 4]
const stages = [
    {name: 'Консультация', about: 'Обсуждение всех деталей по телефону или при личной встрече: выбор объема, вида топлива, консультация по продукции, выбор способа доставки'},
    {name: 'Договор', about: 'Формирование цены, заключение договора'},
    {name: 'Оплата', about: 'Проверка качества, оплата продукта, формирование следующей поставки'},
    {name: 'Поставка', about: 'Доставка с помощью бензовозов и ж/д перевозок'},
]
const StagesBlock = () => {
    return (
        <Box sx={{
            background: '#908B8B',
            height: {md: '740px', sm: '840px', xs: '790px'},
            borderRadius: '40%',
            width: '200%',
            marginLeft: '-50%',

        }}>
            <Container maxWidth={'xl'} sx={{marginTop: '5%', paddingTop: '5%', width: '100vw', }}>
                <Typography className={'oswFont'} variant={'h3'} sx={{color: 'white', fontSize: '40px', textAlign: 'center'}}>
                    Как происходит работа?
                </Typography>
                <Grid container sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    {stageNumbers.map(stNum => (
                        <Grid item lg={3} md={6} sm={12} xs={12}>
                            <Typography variant={'h3'} sx={{fontSize: {md:'160px', sm: '120px', xs: '120px'}, lineHeight: '113.2%', color: '#A40000',}}>
                                {stNum}
                            </Typography>
                        </Grid>

                    ))}
                </Grid>
                <Grid container sx={{color: 'white', marginLeft: '-4%', display: 'flex', textAlign: 'center', marginTop: {lg: '-50px', md: '-280px', sm: '-520px', xs: '-520px'}}}>
                    {stages.map(stage => (
                        <Grid item lg={3} md={6} sm={12} xs={12} sx={{marginBottom: {md: '60px', sm: '30px', xs: '25px'}}}>
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
                    <MyBtn radius={'14px'} height={'70px'}/>
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
