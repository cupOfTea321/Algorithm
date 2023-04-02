import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import circle from '../../assets/circle.png'
import blood from '../../assets/blood.png'

const advantages = [
    'Полный биологический распад при утечках в течение месяца',
    'Отсутствие устойчивого запаха',
    'Экономическая выгода при введение пограничного налога',
    'Биодизель - в качестве компонента дизельного? \n' +
    'Увеличивается полнота сгорания топлива за счёт содержания кислорода в биодизеле',
    'Легко смывается водой',
    'Повторное вовлечение отходов обратно в процесс производства',
]
const CircleBlock = () => {
    return (
        <Container maxWidth={'xl'}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography sx={{fontSize: {sm:'34px', xs: '28px'}, textAlign: 'center', marginTop: '40px', fontWeight: 'bold'}}>
                    Преимущества биодизельного топлива
                </Typography>
                <Box sx={{display: {sm: 'flex', xs: 'none'}, flexDirection: 'column', alignItems: 'center'}}>
                    <img src={circle} alt="circle" style={{width: '80%'}}/>
                </Box>
                <Box sx={{display: {sm: 'none', xs: 'flex', flexDirection: 'column', alignItems: 'center'}}}>
                    {advantages.map((advantage, index) => (
                        <Box sx={{textAlign: 'center'}} key={index}>
                            <Typography sx={{textAlign: 'center', marginTop: '10px', fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>
                                {advantage}
                            </Typography>
                            <img src={blood} alt='blood' style={{width: '20px', marginTop: '10px'}}/>
                        </Box>
                    ))}
                </Box>

            </Box>
        </Container>
    );
};

export default CircleBlock;
