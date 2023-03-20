import React from 'react';
import MyBar from "./MyBar.jsx";
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <MyBar/>
            <Box>
                <Outlet/>
            </Box>
        </>
    );
};

export default Layout;
