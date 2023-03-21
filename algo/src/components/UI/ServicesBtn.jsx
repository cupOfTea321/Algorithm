import React from 'react';
import {Button, Typography} from "@mui/material";

const ServicesBtn = ({text}) => {
    return (
        <Button className={'servicesBtn'} sx={{
            display: {md: 'flex' },
            backgroundColor: '#A40000',
            padding: {xl: '18px 30px',  md: '6px 10px', sm: '2px'},
            width: '250px',
        }}>
            <Typography sx={{
                fontSize: {lg: '20px', sm: '14px'},
                color: 'white',

            }}>
                {text}
            </Typography>

        </Button>
    );
};

export default ServicesBtn;
