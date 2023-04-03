import React from 'react';
import {Box, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import '../components.css'
const ServiceImgBlock = ({image, name, link}) => {
    return (
        <Link to={link}  >
            <Box className={'servicesImg'}  sx={{
                // background: `rgba(255, 255, 255, 0.7)`,
                background: `linear-gradient(45deg, rgb(196, 196, 196), rgb(255, 255, 255))`,
                marginBottom: '44%',
                backgroundSize: 'cover',
                borderRadius: '20px',
                height: {sm:'360px', xs: '260px'},
                width: {lg: '560px', md: '480px', sm: '480px', xs: '80vw'},
            }}>
                <Box  sx={{


                    borderRadius: '20px',
                    backgroundImage: `url(${image})`,
                    opacity: '0.4',
                    height: {sm:'360px', xs: '260px'},
                    width: {lg: '560px', md: '480px', sm: '480px', xs: '80vw'},


                }}>

                </Box>
                <Typography className={'serviceName'} sx={{fontSize: {sm: '34px', xs: '28px'}, color: '#A40000',
                    textDecoration: 'underline', textAlign: 'center', marginTop: '-200px',
                    filter: 'blur(0px)', opacity: '1'}}>
                    {name}
                </Typography>
            </Box>
        </Link>



    );
};

export default ServiceImgBlock;
