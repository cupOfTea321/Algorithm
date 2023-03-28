import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import danger from '../../assets/danger.png'
import danger2 from '../../assets/danger2.png'









const problems = [
    {title: 'Основная проблема ископаемого топлива -', text: 'содержание ароматических и полициклических ароматических углеводородов.'},
    {title: 'Ограничения:', text: '- содержание общих ароматических углеводородов ограниченно 20%;\n' +
            '- ПAУ - до 8%.'},
    {title: 'Теплота сгорания:', text: '- 43 кДж.'},
    {title: '', text: 'На сгорание таких углеводородов необходимо значительно большее количество кислорода,\n' +
            '    и поэтому обычное дизельное топливо выбрасывает большое количество сажи.\n' +
            '    ПAУ могут не сгореть в камере сгорания и будут выбрасываться в окружающую среду.'},
]
const NewsAboutBlock = () => {
    return (
        <Container maxWidth={'xl'}>
            <Box>
                <Typography sx={{fontSize: {sm:'34px', xs: '28px'}, textAlign: 'center', marginTop: '40px', fontWeight: 'bold'}}>
                    Сравнение с ископаемым топливом:
                </Typography>
                <Box sx={{display: 'flex', alignItems: 'center', flexDirection: {sm: 'row', xs: 'column'}, marginTop: '20px'}}>
                    <Box sx={{width: '100%'}}>
                        <img src={danger} alt="danger"/>
                    </Box>
                    <Box sx={{marginLeft: '20px', width: '100%'}}>
                        {problems.map(problem => (
                            <>
                                <Typography sx={{fontWeight: 'bold', fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>{problem.title}</Typography>
                                <Typography sx={{fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>{problem.text}</Typography>
                            </>

                        ))}
                    </Box>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '20px', flexDirection: {sm: 'row', xs: 'column-reverse'}}}>
                    <Box sx={{width: '100%'}}>
                        <Typography sx={{fontWeight: 'bold', fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>
                            Теплота сгорания биодизельного топлива:
                        </Typography>
                        <Typography sx={{fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>
                            - 38 кДж.
                        </Typography>

                        <Typography sx={{fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>
                            За счет разницы плотности данный показатель уравнивается и, учитывая полноту сгорания, расход топлива остается одинаковым.
                        </Typography>
                        <Typography sx={{fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>
                            Биологическое топливо содержит меньше примесей в сравнении с традиционными, а это позволяет механизмам и двигателям работать дольше.
                        </Typography>

                    </Box>
                    <Box sx={{width: '100%'}}>
                        <img src={danger2} alt="danger"/>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default NewsAboutBlock;
