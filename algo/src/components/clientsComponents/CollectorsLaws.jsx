import React from 'react';
import {Backdrop, Box, Container, Grid, Typography} from "@mui/material";
import MyBtn from "../UI/MyBtn.jsx";
import {useTranslation} from "react-i18next";
import ModalForm from "../UI/ModalForm.jsx";
import DeleteIcon from '@mui/icons-material/Delete';
const CollectorsLaws = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const lawsList = [
        {title: t("collectorsLaw1"), body: t("collectorsText1")},
        {title: t("collectorsLaw2"), body: t("collectorsText2")},
        {title: t("collectorsLaw3"), body: t("collectorsText3")},
    ]
    return (
        <Container maxWidth={'md'}>
            <Box className={'animate__animated animate__fadeInUp wow'} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                <DeleteIcon sx={{width: '100px', height: '100px', color: '#A40000'}}/>
                <Typography className={'oswFont'} sx={{textAlign: 'center', fontSize: '28px', width: {sm: '60%', xs: '100%'}}}>
                    {t("collectorsLaws")}
                </Typography>
            </Box>
            <Grid spacing={4} container className={'animate__animated animate__fadeInLeft wow'}>
                {lawsList.map((law, index) => (
                    <Grid item md={6} sm={12} key={index} sx={{marginBottom: '20px'}}>
                        <Typography sx={{fontSize: '28px', color: '#A40000'}}>{law.title}</Typography>
                        <Typography sx={{fontSize: '28px'}}>{law.body}</Typography>
                    </Grid>

                ))}
                {/*<Typography sx={{fontSize: '28px', color: '#A40000', marginBottom: '10px'}}>{t("collectorsPoint2")}</Typography>*/}
                <Grid item md={6} sm={12} sx={{marginBottom: '20px'}}>
                    <Typography sx={{fontSize: '28px', color: '#A40000'}}>{t("collectorsPoint")}</Typography>

                </Grid>

            </Grid>
            <Box className={'animate__animated animate__fadeInUp wow'} sx={{display: 'flex', justifyContent: 'center', margin: '4% 0'}}>
                <MyBtn onClick={handleToggle} radius={'20px'} height={'70px'}/>
                <Backdrop
                    sx={{ color: 'black',backgroundColor: 'rgba(0,0,0,0.3)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <ModalForm/>
                </Backdrop>
            </Box>
        </Container>
    );
};

export default CollectorsLaws;
