import React from 'react';
import {Box, Typography} from "@mui/material";
import point from '../../assets/pointRight.png'

const ReasonsBlock = ({reasons, title}) => {
    return (
        <Box sx={{marginTop: '50px'}}>
            <Typography className={'oswFont'}
                        sx={{fontSize: {sm: '34px', xs: '28px'}, textAlign: {sm: 'left', xs: 'center'}}}>
                {title}
            </Typography>
            {reasons.map(reason => (
                <Box sx={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
                    <Box component={'img'} src={point} sx={{width: '25px', marginRight: '20px'}}/>
                    <Typography sx={{fontSize: {sm: '26px', xs: '20px'}}}>{reason}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default ReasonsBlock;
