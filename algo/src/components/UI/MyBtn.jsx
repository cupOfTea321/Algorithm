import React from 'react';
import {Button, Typography} from "@mui/material";
import './UIStyle.css'
const MyBtn = ({radius, display = 'flex'}) => {
    return (
        <Button className={'myBtn allBtns'} sx={{
            display: { xs: display, md: 'flex' },
            backgroundColor: '#A40000',
            borderRadius: radius,
            padding: {xl: '18px 30px',  md: '12px 20px', sm: '2px'}
        }}>
            <Typography sx={{
                fontSize: {lg: '20px', md: '16px', sm: '14px'},
                color: 'white',

            }}>
                Оставить заявку
            </Typography>

        </Button>
    );
};

export default MyBtn;
