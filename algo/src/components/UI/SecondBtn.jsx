import React from 'react';
import {Button, Typography} from "@mui/material";
import './UIStyle.css'
import {useTranslation} from "react-i18next";
import {Link, NavLink} from "react-router-dom";
const SecondBtn = ({to = '/delivery', onClick ,color = 'white', height = 'auto', width = '300px', text = 'Перейти к каталогу', fontSize = "fontSize: {lg: '20px', md: '16px', sm: '14px'},"}) => {
    const { t, i18n } = useTranslation();
    return (
        <Link to={to}>
            <Button  onClick={onClick} className={'secBtn allBtns'} sx={{
                display: {md: 'flex' },
                // backgroundColor: '#A40000',
                border: '3px solid #A40000',
                borderRadius: '20px',
                width: width,
                height: height,
                padding: {xl: '18px 30px',  md: '6px 10px', sm: '2px'}
            }}>
                <Typography sx={{
                    fontSize: fontSize,
                    color: color,
                    fontWeight: 'bold',
                }}>
                    {t("secondBtn")}
                </Typography>

            </Button>
        </Link>

    );
};

export default SecondBtn;
