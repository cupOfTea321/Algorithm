import React from 'react';
import {Box, Typography} from "@mui/material";

const ServiceImgBlock = ({image, name}) => {
    return (
        <Box sx={{
            marginBottom: '44%'
        }}>
            <Box sx={{
                // background: `rgba(255, 255, 255, 0.7)`,
                background: `linear-gradient(45deg, rgb(196, 196, 196), rgb(255, 255, 255))`,
                backgroundImage: `url(${image})`,
                opacity: '0.4',
                height: {sm:'360px', xs: '260px'},
                width: {lg: '560px', md: '480px', sm: '480px', xs: '80vw'},
                backgroundSize: 'cover',
                borderRadius: '20px',

            }}>

            </Box>
            <Typography sx={{fontSize: {sm: '34px', xs: '28px'}, color: '#A40000',
                textDecoration: 'underline', textAlign: 'center', marginTop: '-200px',
                filter: 'blur(0px)', opacity: '1'}}>
                {name}
            </Typography>
        </Box>


    );
};

export default ServiceImgBlock;
