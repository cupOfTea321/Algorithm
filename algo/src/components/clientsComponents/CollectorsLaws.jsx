import React from 'react';
import {Backdrop, Box, Container, Typography} from "@mui/material";
import MyBtn from "../UI/MyBtn.jsx";
import {useTranslation} from "react-i18next";
import ModalForm from "../UI/ModalForm.jsx";

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
        <Container maxWidth={'xl'}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10%', marginBottom: '5%'}}>
                <Typography className={'oswFont'} sx={{textAlign: 'center', fontSize: '34px', width: {sm: '60%', xs: '100%'}}}>
                    {t("collectorsLaws")}
                </Typography>
            </Box>
            <Box>
                {lawsList.map((law, index) => (
                    <Box key={index} sx={{marginBottom: '3%'}}>
                        <Typography sx={{fontSize: '28px', color: '#A40000'}}>{law.title}</Typography>
                        <Typography sx={{fontSize: '28px'}}>{law.body}</Typography>
                    </Box>

                ))}
                <Typography sx={{fontSize: '28px', color: '#A40000', marginBottom: '10px'}}>{t("collectorsPoint2")}</Typography>
                <Typography sx={{fontSize: '28px', color: '#A40000'}}>{t("collectorsPoint")}</Typography>

            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', margin: '4% 0'}}>
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
