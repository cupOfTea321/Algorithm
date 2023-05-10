import React from 'react';
import {Box, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import '../components.css'
const DocImgBlock = ({image, name, link}) => {
    return (
        <Link to={link}  >
            <Box className={'servicesImg'}  sx={{
                background: `linear-gradient(45deg, rgb(196, 196, 196), rgb(255, 255, 255))`,
                marginBottom: '44%',
                backgroundSize: 'cover',
                borderRadius: '20px',
                height: {sm:'360px', xs: '200px'},
                width: {xl: '560px',lg: '420px', md: '480px', sm: '420px', xs: '320px'},
            }}>
                <Box  sx={{


                    borderRadius: '20px',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    opacity: '0.4',
                    height: {sm:'360px', xs: '200px'},
                    width: {xl: '560px', lg: '420px',md: '480px', sm: '420px', xs: '320px'},


                }}>

                </Box>

            </Box>

        </Link>



    );
};

export default DocImgBlock;
