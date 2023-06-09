import React from 'react';
import {Backdrop, Box, Container, Typography} from "@mui/material";
import rightLine from '../../assets/rightLine.png'
import leftLine from '../../assets/leftLine.png'
import centerLine from '../../assets/centerLine.png'
import mobileLine from '../../assets/mobileLine.png'
import oil from '../../assets/oil.png'
import MyBtn from "../UI/MyBtn.jsx";
import SecondBtn from "../UI/SecondBtn.jsx";
import ModalForm from "../UI/ModalForm.jsx";
import {useTranslation} from "react-i18next";




const Lines = () => {
    const { t, i18n } = useTranslation();
    const afterLines = [
        t("area1"),
        t("area2"),
        t("area3"),
    ]
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return(
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} className={'animate__animated animate__fadeInUp wow'}>
            <Typography sx={{fontSize: {sm:'32px', xs: '28px'}, textAlign: 'center', marginTop: '40px', fontWeight: 'bold'}}>
                {t("areasBlock")}
            </Typography>
            <Typography sx={{fontSize: {sm:'24px', xs: '18px'}, textAlign: 'center', marginTop: '40px', width: '80%'}}>
                {t("areas")}
            </Typography>
            {/* ПК версия */}
            <Box sx={{display: {lg: 'flex', md: 'none', sm: 'none', xs: 'none'}, flexDirection: 'column', alignItems: 'center'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', height: '140px', marginTop: '20px'}}>
                    <Box component={'img'} sx={{backgroundSize: 'cover', margin: '0 140px'}} src={leftLine} alt=""/>
                    <Box component={'img'} sx={{backgroundSize: 'cover', margin: '0 140px', height: '140%'}} src={centerLine} alt=""/>
                    <Box component={'img'} sx={{ backgroundSize: 'cover', margin: '0 140px'}} src={rightLine} alt=""/>
                </Box>
                <Box sx={{display: 'flex', marginTop: '30px', marginLeft: '90px'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: {xl:'0 100px', lg: '0 150px'}}}>
                        <img id={'leftOil'} src={oil} alt="" style={{width: '30px'}}/>
                        <Typography sx={{fontSize: {sm:'24px', xs: '18px'}, width: '200%'}}>
                            {t("area1")}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '0 120px', marginTop: '50px'}}>
                        <img id={'centerOil'} src={oil} alt="" style={{width: '30px'}}/>
                        <Typography sx={{fontSize: {sm:'24px', xs: '18px'}, width: '140%'}}>
                            {t("area2")}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: {xl:'0 120px', lg: '0 170px'}}}>
                        <img id={'rightOil'} src={oil} alt="" style={{width: '30px'}}/>
                        <Typography sx={{fontSize: {md: '24px', sm: '18px'}, width: {lg: '200%'}}}>
                            {t("area3")}
                        </Typography>
                    </Box>
                </Box>


            </Box>
            {/*  Мобильная версия  */}
            <Box sx={{display: {lg: 'none', md: 'flex', sm: 'flex', xs: 'flex'}, flexDirection: 'column', alignItems: 'center'}}>
                {afterLines.map((item, index) => (
                    <Box key={index} sx={{textAlign: 'center'}}>
                        <img src={mobileLine} style={{height: '40px', width: '16px', backgroundSize: 'cover', marginBottom: '20px', marginTop: '20px'}} alt=""/>
                        <Typography sx={{fontSize: {sm:'28px', xs: '24px'}, textAlign: 'center'}}>{item}</Typography>
                    </Box>

                ))}
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: {sm: 'row', xs: 'column'},
                gap: 2,
                marginTop: '5%'
            }}>
                <MyBtn onClick={handleToggle} radius={'32px'} height={'70px'}/>
                <Backdrop
                    sx={{ color: 'black',backgroundColor: 'rgba(0,0,0,0.3)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <ModalForm/>
                </Backdrop>
                <SecondBtn href={'delivery'} color={'black'} height={'70px'}/>
            </Box>
        </Box>
    )
}
const LinesBlock = () => {

    return (
        <>
            <Container maxWidth={'xl'} sx={{display: {lg: 'block', md: 'none', sm: 'none', xs: 'none'}}}>
                <Lines/>
            </Container>
            <Container maxWidth={'md'} sx={{display: {lg: 'none', md: 'block', sm: 'block', xs: 'block'}}}>
                <Lines/>
            </Container>
        </>

    );
};

export default LinesBlock;
