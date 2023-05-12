import React from 'react';
import MyBar from "./MyBar.jsx";
import {Box, Container} from "@mui/material";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";
import {CSSTransition, SwitchTransition} from "react-transition-group";

const Layout = ({nodeRef, location}) => {
    return (
        <>
            <MyBar/>
                {/*<SwitchTransition>*/}
                {/*    <CSSTransition*/}
                {/*        key={location.pathname}*/}
                {/*        nodeRef={nodeRef}*/}
                {/*        timeout={500}*/}
                {/*        classNames="page"*/}
                {/*        unmountOnExit*/}
                {/*    >*/}
                {/*        {(state) => (*/}
                {/*            <Outlet ref={nodeRef} className="page"/>*/}
                {/*        )}*/}
                {/*    </CSSTransition>*/}
                {/*</SwitchTransition>*/}
            <Box>
                <Outlet />
            </Box>
            <Footer/>
        </>
    );
};

export default Layout;
