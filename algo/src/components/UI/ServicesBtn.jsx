import React from 'react';
import {Button, Typography} from "@mui/material";
import '../components.css'
import {NavLink} from "react-router-dom";
const ServicesBtn = ({text, img, link}) => {
    return (
        <NavLink to={link}>
            <Button className={'servicesBtn'} sx={{
                display: 'flex',
                backgroundColor: '#A40000',
                padding: {xl: '18px 30px',  md: '6px 10px', sm: '2px'},
                justifyContent: 'flex-start',
                width: '250px',
                height: '70px'
            }}>
                <img className={'serviceImg'} src={img} style={{width: '30px'}}/>
                <Typography sx={{
                    fontSize: {lg: '20px', sm: '14px'},
                    color: 'white',
                    marginLeft: '20px'
                }}>
                    {text}
                </Typography>

            </Button>
        </NavLink>

    );
};

export default ServicesBtn;
