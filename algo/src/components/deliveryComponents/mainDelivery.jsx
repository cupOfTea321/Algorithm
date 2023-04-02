import React from 'react';
import {Backdrop, Box, Container, Typography} from "@mui/material";
import delivery1 from '../../assets/delivery1.png'
import delivery2 from '../../assets/delivery2.png'
import delivery3 from '../../assets/delivery3.png'
import MyBtn from "../UI/MyBtn.jsx";
import ModalForm from "../UI/ModalForm.jsx";


const MainDelivery = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <Container maxWidth={'xl'}>
            <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', gap: 4, alignItems: {sm: 'flex-start', xs:'center'}, }}>
                <Typography sx={{fontSize: {lg: '40px', md: '32px', sm: '28px', xs: '24px'}, textAlign: {sm: 'left', xs: 'center'}}}>
                    Топливо и нефтепродукты с доставкой за 24 часа
                </Typography>
                <Box sx={{display: 'flex', gap: 4, width: '60%', justifyContent: 'space-between', flexDirection: {sm:'row', xs: 'column'},}}>
                    <Box sx={{display: 'flex',  alignItems: 'center'}}>
                        <img src={delivery1} alt="" style={{width: '80px', marginRight: '20px'}}/>
                        <Box>
                            <Typography sx={{fontWeight: 'bold'}}>
                                Дизельное топливо
                            </Typography>
                            <Typography>Летнее</Typography>
                            <Typography>Зимнее</Typography>
                            <Typography>Межсезонное</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <img src={delivery2} alt="" style={{width: '80px', marginRight: '20px'}}/>
                        <Box>
                            <Typography sx={{fontWeight: 'bold'}}>
                                Бензин
                            </Typography>
                            <Typography>Бензин АИ-92</Typography>
                            <Typography>Бензин АИ-95</Typography>
                            <Typography>Бензин АИ-98</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', gap: 5, width: '65%', justifyContent: 'space-between', flexDirection: {sm:'row', xs: 'column'}, marginTop: '4%'}}>
                    <Box sx={{display: 'flex',  alignItems: 'center',}}>
                        <img src={delivery3} alt="" style={{width: '80px', marginRight: '20px'}}/>
                        <Typography sx={{fontWeight: 'bold'}}>
                            Биодизельное топливо
                        </Typography>
                    </Box>
                    <MyBtn onClick={handleToggle} height={'70px'} radius={'20px'} width={{sm: '320px', xs: '230px'}}/>
                    <Backdrop
                        sx={{ color: 'black',backgroundColor: 'rgba(0,0,0,0.3)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <ModalForm/>
                    </Backdrop>
                </Box>

            </Box>
        </Container>
    );
};

export default MainDelivery;
