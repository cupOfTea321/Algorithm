import React from 'react';
import MyBar from "./MyBar.jsx";
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";

const Layout = () => {
    return (
        <>
            <MyBar/>
            <Box>
                <Outlet />
            </Box>
            <Footer/>
        </>
    );
};

export default Layout;
