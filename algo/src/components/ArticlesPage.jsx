import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const ArticlesPage = () => {
    return (
        <Container maxWidth={'xl'}>
            <Box sx={{width: '80%', marginLeft: '10%', textAlign: 'center'}}>
                <Typography variant={'h3'} sx={{color: '#A40000', marginBottom: '4%', paddingTop: '4%'}}>
                    Статьи
                </Typography>
                <Typography variant={'h5'} sx={{fontSize: '36px'}}>
                    *Название статьи*
                </Typography>
                <Typography variant={'h6'} sx={{fontSize: '32px'}}>
                    Текст текст текст текст Текст текст текст текст Текст текст текст текст Текст текст текст текст Текст текст текст текст Текст текст текст текст Текст текст текст текст Текст текст текст текст Текст текст текст текст Текст текст текст текст Текст текст текст текст Текст текст текст текст
                </Typography>
                <Link style={{color: 'black', textDecoration: 'underline', fontSize: '26px'}}>
                    Читать дальше...
                </Link>
            </Box>

        </Container>
    );
};

export default ArticlesPage;
