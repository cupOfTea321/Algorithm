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
    return (
        <Container maxWidth={'xl'}>
            <Box>
                <Typography className={'animate__animated animate__fadeInUp wow'} sx={{fontSize: {sm:'34px', xs: '28px'}, textAlign: 'center', marginTop: '40px', fontWeight: 'bold'}}>
                    {t("comparisonBlock")}
                </Typography>
                <Box  sx={{display: 'flex', alignItems: 'center', flexDirection: {sm: 'row', xs: 'column'}, marginTop: '60px'}}>
                    <Box sx={{width: '100%'}} className={'animate__animated animate__fadeInLeft wow'}>
                        <img src={danger} alt="danger"/>
                    </Box>
                    <Box sx={{marginLeft: '20px', width: '100%'}} className={'animate__animated animate__fadeInRight wow'}>
                        {problems.map((problem, index) => (
                            <Box key={index}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>{problem.title}</Typography>
                                <Typography sx={{marginBottom: '20px',fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>{problem.text}</Typography>
                            </Box>

                        ))}
                    </Box>
                </Box>
                <Box  sx={{display: 'flex', alignItems: 'center', marginTop: '20px', flexDirection: {sm: 'row', xs: 'column-reverse'}}}>
                    <Box sx={{width: '100%'}} className={'animate__animated animate__fadeInLeft wow'}>
                        <Typography sx={{fontWeight: 'bold', fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>
                            {t("problemTitle5")}
                        </Typography>
                        <Typography sx={{marginBottom: '20px',fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>
                            {t("problem5")}
                        </Typography>

                        <Typography sx={{marginBottom: '20px', fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>
                            {t("problemTitle6")}
                        </Typography>
                        <Typography sx={{fontSize: {xl:'28px', lg: '24px', md: '22px', sm: '22px', xs: '24px'}}}>
                            {t("problem6")}
                        </Typography>

                    </Box>
                    <Box sx={{width: '100%'}} className={'animate__animated animate__fadeInRight wow'}>
                        <img src={danger2} alt="danger"/>
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
