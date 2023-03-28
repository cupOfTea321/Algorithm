import React from 'react';
import {Button, Typography} from "@mui/material";
import './UIStyle.css'
const SecondBtn = ({color = 'white', height = 'auto'}) => {
    return (
        <Button className={'secBtn allBtns'} sx={{
            display: {md: 'flex' },
            // backgroundColor: '#A40000',
            border: '3px solid #A40000',
            // boxShadow: '0px 3px 0px #7D4151, inset 0px 0px 5px rgba(255, 239, 239, 0.13), inset 0px 4px 5px rgba(255, 239, 239, 0.25)',
            borderRadius: '32px',
            // borderRadius: '14px',
            height: height,
            padding: {xl: '18px 30px',  md: '6px 10px', sm: '2px'}
        }}>
            <Typography sx={{
                fontSize: {lg: '20px', sm: '14px'},
                color: color,

            }}>
                Перейти к каталогу
            </Typography>

        </Button>
    );
};

export default SecondBtn;
