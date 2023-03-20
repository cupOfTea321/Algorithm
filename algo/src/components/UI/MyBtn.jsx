import React from 'react';
import {Button, Typography} from "@mui/material";
import './UIStyle.css'
const MyBtn = () => {
    return (
        <Button className={'myBtn'} sx={{
            display: { xs: 'none', md: 'flex' },
            backgroundColor: '#A40000',
            borderRadius: '14px',
            padding: {xl: '18px 30px',  md: '6px 10px', sm: '2px'}
        }}>
            <Typography sx={{
                fontSize: {lg: '20px', sm: '14px'},
                color: 'white',

            }}>
                Оставить заявку
            </Typography>

        </Button>
    );
};

export default MyBtn;
