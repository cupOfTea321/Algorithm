import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import danger from '../../assets/danger.png'
import danger2 from '../../assets/danger2.png'
import backVector1 from "../../assets/backVector1.png";
import backVector2 from "../../assets/backVector2.png";
import {useTranslation} from "react-i18next";










const NewsAboutBlock = () => {
    const { t, i18n } = useTranslation();
    const problems = [
        {title: t("problemTitle1"), text: t("problem1")},
        {title: t("problemTitle2"), text: t("problem2")},
        {title: t("problemTitle3"), text: t("problem3")},
        {title: t("problemTitle4"), text: t("problem4")},
    ]
    const problemTitle = { fontWeight: 'bold', fontSize: {xs: '18px'}, color: '#A40000'}
    const problemText = {marginBottom: '20px', fontSize: {xs: '18px'}}
    return (
        <Container maxWidth={'md'}>
            <Box>
                <Typography className={'animate__animated animate__fadeInUp wow'} sx={{fontSize: {sm:'32px', xs: '28px'}, textAlign: 'center', marginTop: '20px', fontWeight: 'bold'}}>
                    {t("comparisonBlock")}
                </Typography>
                <Box component={'hr'} sx={{backgroundColor: '#A40000', color: '#A40000', height: '2px', border: 'none', width: '80%', margin: '0 auto'}}/>
                <Box  sx={{display: 'flex', marginTop: '30px', flexDirection: {md: 'row', sm: 'column', xs: 'column'}}}>

                    <Box sx={{ width: {md: '65%'}, marginRight: '10px'}} className={'animate__animated animate__fadeInLeft wow'}>
                        {problems.map((problem, index) => (
                            <Box key={index}>
                                <Typography sx={problemTitle}>{problem.title}</Typography>
                                <Typography sx={problemText}>{problem.text}</Typography>
                            </Box>

                        ))}
                    </Box>
                    <Box sx={{width: {md: '35%'}}} className={'animate__animated animate__fadeInRight wow'}>
                        <Typography sx={problemTitle}>
                            {t("problemTitle5")}
                        </Typography>
                        <Typography sx={problemText}>
                            {t("problem5")}
                        </Typography>

                        <Typography sx={problemText}>
                            {t("problemTitle6")}
                        </Typography>
                        <Typography sx={problemText}>
                            {t("problem6")}
                        </Typography>

                    </Box>
                </Box>
            </Box>

            {/*  Фоновые элементы  */}
            <Box component={'img'} src={backVector1} alt="" sx={{width: {xl: '250px',sm: '200px', xs: '150px'}, position: 'absolute', zIndex: '-1', left: 0, bottom: {xl: '2000px', lg: '2000px', md: '1850px', sm: '1800px', xs: '4000px'}}}/>
            <Box component={'img'} src={backVector2} alt="" sx={{width: {xl: '250px',sm: '200px', xs: '150px'}, position: 'absolute', right: '0', zIndex: '-1', bottom: {xl: '1000px', lg: '1000px', md: '1150px', sm: '1100px', xs: '2600px'}}}/>

        </Container>
    );
};

export default NewsAboutBlock;
