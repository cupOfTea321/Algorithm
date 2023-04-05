import React, {useState} from 'react';
import {Button} from "@mui/material";
import {useTranslation} from "react-i18next";

const ChangeLangBtn = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState('ru')

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    if (lang === 'ru'){
        return (
            <>
                <Button onClick={() => {
                    changeLanguage("en")
                    setLang('en')
                }} sx={{
                    borderRadius: '50%',
                    color: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(0, 0, 0, 0.25)',
                    height: '60px',
                    width: '36px',
                    fontSize: '18px'
                }}>
                    En
                </Button>

            </>
        )
    }
    return (
        <>
            <Button onClick={() => {
                changeLanguage("ru")
                setLang('ru')
            }} sx={{
                borderRadius: '50%',
                color: 'rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(0, 0, 0, 0.25)',
                height: '60px',
                width: '50px',
                fontSize: '18px'
            }}>
                Ru
            </Button>
        </>
    );
};

export default ChangeLangBtn;
