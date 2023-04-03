import React from 'react';
import {Button, Typography} from "@mui/material";
import './UIStyle.css'
import {useTranslation} from "react-i18next";
const MyBtn = ({color = 'white', border = '',backgroundColor = '#A40000', onClick, radius, display = 'flex', width = '300px', height = 'auto', type = 'button', disabled = false}) => {
    const { t, i18n } = useTranslation();
    return (
        <Button onClick={onClick} disabled={disabled} type={type} className={'myBtn allBtns'} sx={{
            display: { xs: display, md: 'flex' },
            backgroundColor: backgroundColor,
            border: border,
            borderRadius: radius,

            padding: {xl: '18px 30px',  md: '12px 20px', sm: '2px'},
            width: width,
            height: height,
        }}>
            <Typography sx={{
                fontSize: {lg: '20px', md: '16px', sm: '14px'},
                color: color,

            }}>
                {t('mybtn')}
            </Typography>

        </Button>
    );
};

export default MyBtn;
