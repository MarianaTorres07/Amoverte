import { Box, Typography, Stack, Divider } from '@mui/material';
import logoBlanco from '../assets/Logos/LogoSecundario_Blanco.png';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Ubicaciones', href: '#ubicaciones' },
  { label: 'Contacto', href: '#contacto' },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        bgcolor: 'primary.dark',
        color: '#FFFFFF',
        pt: { xs: 4, md: 5 },
        pb: { xs: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: 'auto',
          px: { xs: 3, sm: 4, md: 6, lg: 8 },
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 3, sm: 0 }}
          sx={{
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            mb: 3,
          }}
        >
          <Box
            component="a"
            href="#home"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src={logoBlanco}
              alt="Amoverte Fisioterapia"
              sx={{
                height: { xs: 32, sm: 36, md: 40 },
                maxHeight: 44,
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>

          <Stack direction="row" spacing={{ xs: 2.5, sm: 3, md: 4 }} sx={{ flexWrap: 'wrap' }}>
            {footerLinks.map((link) => (
              <Typography
                key={link.href}
                component="a"
                href={link.href}
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: 'secondary.main' },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 2.5 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
            © 2026 Amoverte Fisioterapia. Todos los derechos reservados.
          </Typography>
          <Typography sx={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
            Mérida, Yucatán, México
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;