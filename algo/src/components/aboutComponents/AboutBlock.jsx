import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import rightPoint from '../../assets/pointRight.png'
const points = [
    'введение пограничного налога на выбросы СО2;',
    'проведение аудита выбросов в компаниях;',
    'контроль за изменением котировок выбросов CO2;',
    'налог на цемент , сталь и удобрения.',
]
const AboutBlock = () => {
    return (
        <Container maxWidth={'xl'}>
            <Box sx={{
                color: 'white',
                // width: {md: '63%', xs: '100%'},
                display: 'flex',

                alignItems: 'center',
                flexDirection: {lg: 'row', md:'column', sm: 'column', xs: 'column'},
                paddingTop: {lg: '15%', md: '25%', sm: '30%', xs: '50%'},
                gap: 2
            }}>
                <Box sx={{color: 'black', background: 'white', width: {lg: '45%', md: '80%'}, padding: '10px', borderRadius: '20px ', marginRight: {lg: '60px', md: '0', sm: '0', xs: '0'}}}>
                    <Typography variant={'h4'} sx={{marginBottom: '20px', paddingTop: '20px'}}>
                        Что нужно знать о топливе?
                    </Typography>
                    <Typography sx={{fontSize: {xl: '32px', lg: '28px', md: '26px', sm: '20px', xs: '16px'}, marginBottom: '20px'}}>
                        Биодизель - тип горючего, состоящий из биологического сырья, которое решает проблему необходимости снижения выбросов СО2.
                    </Typography>
                    <Typography sx={{fontSize: {xl: '32px', lg: '28px', md: '26px', sm: '20px', xs: '16px'}, marginBottom: '20px'}}>
                        Сейчас практически все государства приняли Парижское соглашение в рамках конвенции ООН об изменении климата.
                    </Typography>
                    <Typography sx={{fontSize: {xl: '32px', lg: '28px', md: '26px', sm: '20px', xs: '16px'}, marginBottom: '20px'}}>
                        Введена новая система CBAM
                        по учету обороту выбросов углекислого газа.
                    </Typography>
                </Box>
                <Box>
                    <Typography component={'h2'} sx={{fontSize: '34px', }}>
                        Чем чревато введение СВАМ:
                    </Typography>
                    {points.map(point => (
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <img src={rightPoint} alt="rightPoint" style={{height: '40px', width: '40px', marginRight: '20px'}}/>
                            <Typography sx={{fontSize: '24px', marginBottom: '20px', marginTop: '10px'}}>
                                {point}
                            </Typography>
                        </Box>

                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default AboutBlock;
