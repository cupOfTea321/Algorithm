import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import point from '../../assets/pointRight.png'
const advantages = [
    'Одни из первых, кто занимается биодизельным топливом',
    'Готовы к научно-исследовательскому обмену',
    'Информационная открытость',
    'Удобство логистики',
    'Высокий уровень оказания услуг',
    'Поддержка клиентов на каждом этапе',
    'Прозрачность поставки',
]
const AdvantagesBlock = () => {
    return (
        <Container maxWidth={'xl'}>
            <Typography className={'oswFont'} variant={'h4'} sx={{fontSize: {sm:'34px', xs: '28px'}, textAlign: 'center', marginTop: '5%', }}>
                Почему вы должны выбрать “Алгоритм”?
            </Typography>
            <Box sx={{marginTop: '4%', marginBottom: '5%'}}>
                {advantages.map((advantage, index) => (
                    <Box key={index} sx={{display: 'flex', alignItems: 'center'}}>
                        <img src={point} alt={'point'} style={{width: '20px', height: '20px'}}/>
                        <Typography variant={'h5'} sx={{fontSize: {sm:'28px', xs: '20px'}, marginLeft: '4%'}}>
                            {advantage}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default AdvantagesBlock;
