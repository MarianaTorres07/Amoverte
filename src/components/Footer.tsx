import { Box, Typography, Stack } from '@mui/material';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        px: '8vw',
        py: { xs: 4, md: 5 },
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 3, sm: 0 }}
        sx={{
            justifyContent:"space-between",
            alignItems: { xs: 'flex-start', sm: 'center' },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
          }}
        >
          Amoverte
        </Typography>

        <Stack direction="row" spacing={{ xs: 2.5, md: 4 }} sx={{ flexWrap: 'wrap' }}>
          {footerLinks.map((link) => (
            <Typography
              key={link.href}
              component="a"
              href={link.href}
              sx={{
                fontSize: '0.86rem',
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' },
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Stack>
      </Stack>

      <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', mt: { xs: 3, sm: 4 } }}>
        © 2026 Amoverte. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;