import { useState } from 'react';
import {AppBar,Toolbar,Box,Button,IconButton,Drawer,List,ListItem,ListItemButton,ListItemText,useMediaQuery,Divider,} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import logoImg from '../assets/Logos/LogoSecundario_m.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Ubicaciones', href: '#ubicaciones' },
  { label: 'Contacto', href: '#contacto' },
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
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(250, 250, 248, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #E3E1F2',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 5 }, minHeight: { xs: 56, md: 64 }, py: 0.8 }}>
          <Box
            component="a"
            href="#home"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src={logoImg}
              alt="Amoverte Fisioterapia"
              sx={{
                height: { xs: 34, sm: 40, md: 44 },
                maxHeight: 46,
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </Box>
          {isMobile ? (
            <IconButton onClick={handleToggle} aria-label="Abrir menú">
              <MenuIcon sx={{ color: 'text.primary' }} />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  sx={{
                    color: 'text.secondary',
                    textTransform: 'none',
                    fontWeight: 500,
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                href="#contacto"
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: '8px',
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  boxShadow: 'none',
                  '&:hover': { boxShadow: 'none' },
                }}
              >
                Reservar cita
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleClose}>
        <Box sx={{ width: 270, p: 2.5, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Box
              component="img"
              src={logoImg}
              alt="Amoverte Fisioterapia"
              sx={{ height: 32, width: 'auto', objectFit: 'contain' }}
            />
            <IconButton onClick={handleClose} aria-label="Cerrar menú">
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <List sx={{ p: 0, flexGrow: 1 }}>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component="a"
                  href={link.href}
                  onClick={handleClose}
                  sx={{ borderRadius: '8px', py: 1.2 }}
                >
                  <ListItemText
                    primary={link.label}
                    sx={{ '& .MuiListItemText-primary': { fontWeight: 500, fontSize: '0.98rem' } }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ pt: 2, pb: 1 }}>
            <Button
              component="a"
              href="#contacto"
              onClick={handleClose}
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 700,
                py: 1.4,
                fontSize: '0.95rem',
                boxShadow: 'none',
              }}
            >
              Reservar cita
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
