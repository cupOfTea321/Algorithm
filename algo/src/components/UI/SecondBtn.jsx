import React from 'react';
import {Button, Typography} from "@mui/material";
import './UIStyle.css'
import {useTranslation} from "react-i18next";
const SecondBtn = ({href = '', onClick ,color = 'white', height = 'auto', width = '300px', text = 'Перейти к каталогу', fontSize = "fontSize: {lg: '20px', md: '16px', sm: '14px'},"}) => {
    const { t, i18n } = useTranslation();
    return (
        <Button href={href} onClick={onClick} className={'secBtn allBtns'} sx={{
            display: {md: 'flex' },
            // backgroundColor: '#A40000',
            border: '3px solid #A40000',
            // boxShadow: '0px 3px 0px #7D4151, inset 0px 0px 5px rgba(255, 239, 239, 0.13), inset 0px 4px 5px rgba(255, 239, 239, 0.25)',
            borderRadius: '32px',
            // borderRadius: '14px',
            width: width,
            height: height,
            padding: {xl: '18px 30px',  md: '6px 10px', sm: '2px'}
        }}>
            <Typography sx={{
                fontSize: fontSize,
                color: color,

            }}>
                {t("secondBtn")}
            </Typography>

        </Button>
    );
};

export default SecondBtn;
