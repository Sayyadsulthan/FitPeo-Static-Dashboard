import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import theme from '../utils/theme.json';

import {
    settingImg,
    bellImg,
    notificationImg,
    userProfile,
    menuImg,
    logo,
    logoutImg,
} from '../assets/index';

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];
const navItems = [settingImg, bellImg, notificationImg, userProfile];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center', height: '10vh' }}
            // height={'10vh'}
            display={'block'}
        >
            {/* <Typography variant='h6' sx={{ my: 2 }}>
                MUI
            </Typography> */}
            <img
                src={logo}
                alt=''
                width={'40px'}
                // height={'40px'}
                style={{
                    borderRadius: '1rem',
                    // border: '1px solid',
                    objectFit: 'cover',
                    padding: '5px',
                    background: '#3b3a3a',
                    color: 'white',
                    // marginRight: '10px',
                }}
            />
            <Divider />
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
            </Search>

            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {navItems.map((item, ind) => (
                    <img
                        src={item}
                        alt=''
                        key={ind}
                        width={'40px'}
                        height={'40px'}
                        style={{
                            borderRadius: '1rem',
                            // border: '1px solid',
                            objectFit: 'cover',
                            padding: '5px',
                            // display: 'block',
                            // background: '#3b3a3a',
                            color: 'white',
                            // marginRight: '10px',
                        }}
                    />
                    // <ListItem key={item} disablePadding>
                    //     <ListItemButton sx={{ textAlign: 'center' }}>
                    //         <ListItemText primary={item} />
                    //     </ListItemButton>
                    // </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    console.log(theme.dark.colors.nav.body);
    return (
        <Box
            sx={{
                display: 'flex',
                color: theme.dark.colors.text,
                bgcolor: theme.dark.colors.nav.body,
            }}
        >
            <CssBaseline />
            <AppBar component='nav' sx={{ bgcolor: theme.dark.colors.nav.body }}>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography> */}
                    <img
                        src={logo}
                        alt=''
                        width={'40px'}
                        height={'40px'}
                        style={{
                            // borderRadius: '1rem',
                            // // border: '1px solid',
                            objectFit: 'cover',
                            padding: '5px',
                            // background: '#3b3a3a',
                            color: 'white',
                            // marginRight: '10px',
                        }}
                    />
                    <Box display={'flex'} justifyContent={'space-between'} width={'95%'}>
                        <Search sx={{ display: { xs: 'none', sm: 'block', display: 'flex' } }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder='Search…'
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'flex',
                                },
                                flexDirection: 'row',
                                gap: '20px',
                            }}
                        >
                            {navItems.map((item, ind) => (
                                <img
                                    src={item}
                                    alt=''
                                    key={ind}
                                    width={'40px'}
                                    height={'40px'}
                                    style={{
                                        borderRadius: '2rem',
                                        // border: '1px solid',
                                        objectFit: 'cover',
                                        padding: '5px',
                                        background: '#3b3a3a',
                                        color: 'white',
                                        // marginRight: '10px',
                                    }}
                                />
                                // <Button key={item} sx={{ color: '#fff' }}>
                                //     {item}
                                // </Button>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    // variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        bgcolor: theme.dark.colors.nav.body,
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar;
