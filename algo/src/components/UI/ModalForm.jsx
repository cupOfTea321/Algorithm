import React from 'react';
import FormBlock from "./FormBlock.jsx";
import MyForm from "./MyForm.jsx";
import {Paper} from "@mui/material";

const ModalForm = () => {
    const handleModalClick = (event) => {
        event.stopPropagation();
        // your code
    }
    return (
        <Paper sx={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',

        }} onClick={handleModalClick}>
            <MyForm/>
        </Paper>
    );
};

export default ModalForm;
