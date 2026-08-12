import {useState} from 'react';
import {AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Typography, useMediaQuery} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import {useTheme} from '@mui/material/styles';

const navLinks = [
    {label: 'Home', href: '#home'},
    {label: 'Quiénes somos', href: '#quienes-somos'},
    {label: 'Servicios', href: '#servicios'},
    {label: 'Equipo', href: '#equipo'},
    {label: 'Contacto', href: '#contacto'},
];

function NavBar() {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const handleToggle = () => setMobileOpen((prev) => !prev);
    const handleClose = () => setMobileOpen(false);

    return (
        <>
        <AppBar
            position= "sticky"
            sx={{
                bgcolor: 'rgba(250, 250, 248, 0.9)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid #E3E1F2',
            }}
        >
            <Toolbar sx={{justifyContent: 'space-between', px:{xs:2, md:6}}}>
                <Typography
                variant = "h6"
                component = "a"
                href = "#"
                sx={{
                    color: 'text.primary',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    textDecoration: 'none',
                }}
                >
                    Amoverte
                </Typography>
                {isMobile ? ( 
                    <IconButton onClick={handleToggle} aria-label="Abrir menú">
                        <MenuIcon sx={{color: 'text.primary'}}  />
                    </IconButton> 
                ): ( 
                    <Box sx={{display: 'flex', alignItems:'center', gap: 4}}>
                        {navLinks.map((link) => (
                            <Button
                                key={link.href}
                                href={link.href}
                                sx={{
                                    color: 'text.secondary', textTransform: 'none', fontWeight: 500,}}
                                >
                                    {link.label}
                            </Button>
                        ))}
                        <Button
                            href="#contacto"
                            variant="contained"
                            color="primary"
                            sx={{borderRadius: 999, textTransform: 'none', px: 3}}
                            >
                                Reservar cita
                        </Button>                   
                    </Box>
                )}
             </Toolbar>   
        </AppBar>

        <Drawer anchor="right" open={mobileOpen} onClose={handleClose}>
            <List sx={{width:240}}>
                {navLinks.map((link) => (
                    <ListItem key={link.href} disablePadding>
                        <ListItemButton component="a" href={link.href} onClick={handleClose}>
                            <ListItemText primary={link.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#contacto" onClick={handleClose}>
                        <ListItemText primary="Reservar cita" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
        
        </>
    );
}

export default NavBar;
