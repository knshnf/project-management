import { useState } from 'react';
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
import { Avatar } from '@mui/material';
import { useEffect } from 'react';

import Navigation from './Navigation'

import { useRouter } from 'next/router'
import AccountMenu from './AccountMenu';


const Header = ( ()=> {
    const [user, setUser] = useState(null)

    const router = useRouter()

    const drawerWidth = 240;
    const navItems = ['Dashboard', 'Task Board', 'Configuration'];

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            PROJECT MANAGEMENT BOARD
        </Typography>
        <Divider />
            <Navigation />
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', height: '70px'}}>
            <CssBaseline />
            <AppBar component="nav" sx={{ bgcolor: 'white', boxShadow: 0, borderBottom: '1px solid #C1C7CD'}}>
            <Toolbar sx={{ justifyContent: 'space-between', overflowX: 'hidden'}} variant="dense">
                <Box sx={{ flex: 1}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: 'black' } }}
                    >
                    PROJECT MANAGEMENT BOARD
                    </Typography>
                </Box>
                <Box>
                    <Navigation />
                </Box>
                <Box sx={{ display: 'flex', flex: 1, justifyContent: 'right'}}>
                    {/* <Button
                        onClick={handleLogout}
                    >
                        Logout
                    </Button> */}
                    {/* <Button>
                        <Box sx={{display: 'flex'}}>
                            <Box>
                                <Avatar variant="square" color="#f2f2f8">
                                    K
                                </Avatar>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Box>
                                    <Typography> {user?.username} </Typography>
                                </Box>
                                <Box>
                                    <Typography> {user?.role} </Typography>
                                </Box>
                            </Box>
                            
                        </Box>
                    </Button> */}
                    <AccountMenu user={user}/>
                </Box>   
            </Toolbar>
            </AppBar>
            <nav>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            </nav>
        </Box>
    )

})

export default Header