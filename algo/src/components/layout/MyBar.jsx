import React from 'react';
import {AppBar, Backdrop, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from "react-router-dom";
import logo from '../../assets/logo.png'
import MyBtn from "../UI/MyBtn.jsx";
import ModalForm from "../UI/ModalForm.jsx";
const pages = [
    {name: 'Главная', route: '/'},
    {name: 'О биодизеле', route: '/about'},
    {name: 'Клиентам/партнерам', route: '/clients'},
    {name: 'Услуги', route: '/services'},
    {name: 'Каталог', route: '/delivery'},
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const MyBar = () => {
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
                        <img src={logo} alt={'LOGO'}/>
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
                            <img src={logo} alt={'LOGO'}/>
                        </Box>
                        <Box  sx={{  display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <NavLink key={page.name} style={{color: 'black'}} to={page.route}>
                                    <MenuItem sx={{fontSize: {xl: '23px', lg: '18px'}}} onClick={handleCloseNavMenu}>
                                        {page.name}
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Box>
                        <MyBtn  onClick={handleToggle} radius={'14px'} display={'none'} width={'260px'}/>
                        <Backdrop
                            sx={{ color: 'black',backgroundColor: 'rgba(0,0,0,0.3)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                            onClick={handleClose}
                        >
                            <ModalForm/>
                        </Backdrop>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MyBar;
