import React from 'react';
import CollectorsMain from "../components/clientsComponents/CollectorsMain.jsx";
import CollectorsQualities from "../components/clientsComponents/CollectorsQualities.jsx";
import CollectorsLaws from "../components/clientsComponents/CollectorsLaws.jsx";
import {Box} from "@mui/material";

const CollectorsPage = () => {


    return (
        <>
            <CollectorsMain/>
            <CollectorsQualities/>
            <Box sx={{
                background: '#5b5959',
                color: 'white',
                paddingTop: '20px',
                paddingBottom: {md: '40px', sm: '80px', xs: '100px'},
                marginTop: '40px',
                marginBottom: '-90px'
            }}>
                <CollectorsLaws/>
            </Box>

        </>

    );
};

export default CollectorsPage;
