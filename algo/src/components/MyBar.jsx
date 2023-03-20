import React from 'react';
import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from "react-router-dom";
import logo from '../assets/logo.png'
import MyBtn from "./UI/MyBtn.jsx";
const pages = [
    {name: 'Главная', route: '/'},
    {name: 'О биодизеле', route: '/about'},
    {name: 'Клиентам/партнерам', route: '/delivery'},
    {name: 'Услуги', route: '/services'},
    {name: 'Каталог', route: '/clients'},
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const MyBar = () => {
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
                        >
                            <MenuIcon />
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
                                display: { xs: 'flex', md: 'none' },
                                // flexGrow: 1,
                            }}>
                            <img src={logo} alt={'LOGO'}/>
                        </Box>
                        <Box  sx={{  display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <NavLink key={page.name} style={{color: 'black'}} to={page.route}>
                                    <MenuItem sx={{fontSize: '23px'}} onClick={handleCloseNavMenu}>
                                        {page.name}
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Box>
                        <MyBtn />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MyBar;
