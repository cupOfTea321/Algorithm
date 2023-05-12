import React from 'react';
import {AppBar, Backdrop, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from "react-router-dom";
import logo from '../../assets/footerLogo.png'
import MyBtn from "../UI/MyBtn.jsx";
import ModalForm from "../UI/ModalForm.jsx";
import ChangeLangBtn from "../UI/ChangeLangBtn.jsx";
import {useTranslation} from "react-i18next";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const MyBar = () => {
    const { t, i18n } = useTranslation();
    const pages = [
        {name: t("main"), route: '/'},
        {name: t("about"), route: '/about'},
        {name: t("clients"), route: '/clients'},
        {name: t("services"), route: '/services'},
        {name: t("catalog"), route: '/delivery'},
    ];
    //for backdrop
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="static"
                sx={{
                    backgroundColor: 'white',
                    height: '123px',

        }}>
            {/*под мобильники*/}
            <Container maxWidth="xl"
            sx={{

            }}>
                <Toolbar disableGutters sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    // alignItems: 'center',
                    marginTop: '20px'
                }}>
                    <Box
                        component={'a'}
                        href={'/'}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                        }}>
                        <Box component={'img'} sx={{width: {md: '80px', sm: '60px'}}} src={logo} alt={'LOGO'}/>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                            style={{height: '75px', width: '75px'}}
                        >
                            <MenuIcon  style={{height: '45px', width: '45px'}}/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                color: 'black'
                            }}
                        >
                            {/*мобильное меню*/}
                            {pages.map((page) => (
                                <NavLink key={page.name} style={{color: 'black'}}  to={page.route}>
                                    <MenuItem   onClick={handleCloseNavMenu}>
                                            {page.name}
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{
                        alignItems: 'center',
                        display: 'flex',

                    }}>
                        <Box
                            sx={{
                                mr: 2,
                                // height: '60px',
                                display: { xs: 'flex', md: 'none' },
                                // flexGrow: 1,
                            }}>
                            <Box component={'img'} sx={{width: {md: '80px', sm: '60px', xs: '60px'}}} src={logo} alt={'LOGO'}/>
                        </Box>
                        <Box  sx={{  display: { xs: 'none', md: 'flex' }}}>
                            {pages.map((page) => (
                                <NavLink key={page.name} style={{color: 'black', paddingRight: '20px'}} to={page.route}>
                                    <MenuItem sx={{fontSize: {xl: '23px', lg: '18px'}}} onClick={handleCloseNavMenu}>
                                        {page.name}
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Box>
                        <Box sx={{paddingRight: '10px'}}>
                            <MyBtn weight={'normal'}  onClick={handleToggle} radius={'14px'} display={'none'} width={'260px'}/>
                        </Box>

                        <Backdrop
                            sx={{ color: 'black',backgroundColor: 'rgba(0,0,0,0.3)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                            onClick={handleClose}
                        >
                            <ModalForm/>
                        </Backdrop>
                        <Box sx={{marginLeft: '10px'}}>
                            <ChangeLangBtn/>
                        </Box>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MyBar;
