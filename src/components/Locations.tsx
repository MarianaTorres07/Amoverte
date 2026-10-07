import { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Stack, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LaunchIcon from '@mui/icons-material/Launch';
import type { LocationItem } from '../types';

const locations: LocationItem[] = [
  {
    id: 'cordemex',
    name: 'Amoverte Cordemex',
    tagline: 'Fisioterapia y Rehabilitación',
    address: 'C. 49 285, Cordemex, 97115 Mérida, Yuc.',
    mapsUrl: 'https://maps.app.goo.gl/VHat94DD8KDB6nB36',
    phone: '+52 951 262 8921',
    phoneRaw: '+529512628921',
    instagram: '@amoverte.mx',
    instagramUrl: 'https://www.instagram.com/amoverte.mx?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
  },
  {
    id: 'la-florida',
    name: 'Amoverte La Florida',
    tagline: 'Fisioterapia y Rehabilitación',
    address: 'C 23A 193, La Florida, 97138 Mérida, Yuc.',
    mapsUrl: 'https://maps.app.goo.gl/wLdCjSZiuBcpyNsHA',
    phone: '+52 951 262 8921',
    phoneRaw: '+529512628921',
    instagram: '@amoverte.mx',
    instagramUrl: 'https://www.instagram.com/amoverte.mx?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
  },
  {
    id: 'las-americas',
    name: 'Amoverte Las Américas',
    tagline: 'Fisioterapia y Rehabilitación',
    address: 'C. 55 1010-c-120 y 132, Fraccionamiento Las Américas, 97302 Mérida, Yuc.',
    mapsUrl: 'https://maps.app.goo.gl/9BEgaZencaScvzMER8',
    phone: '+52 951 262 8921',
    phoneRaw: '+529512628921',
    instagram: '@amoverte.mx',
    instagramUrl: 'https://www.instagram.com/amoverte.mx?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
  },
];

function Locations() {
  const [selectedTab, setSelectedTab] = useState<string>('all');

  const filteredLocations = selectedTab === 'all'
    ? locations
    : locations.filter((loc) => loc.id === selectedTab);

  return (
    <Box component="section" id="ubicaciones" sx={{ py: { xs: 8, md: 14 }, bgcolor: '#FFFFFF', width: '100%' }}>
      <Box sx={{ maxWidth: 1440, mx: 'auto', px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
        {/* Header */}
        <Box sx={{ maxWidth: 700, mb: { xs: 4, md: 6 }, mx: { xs: 'auto', md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            sx={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'primary.dark',
              fontWeight: 700,
              mb: 1.5,
            }}
          >
            Nuestras Sucursales
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.3rem', md: '2.8rem' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
              mb: 2,
              color: '#1B1B2B',
            }}
          >
            Ubicaciones estratégicas en Mérida
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.6 }}>
            Selecciona la sucursal de tu preferencia para consultar la dirección, contacto directo y cómo llegar.
          </Typography>
        </Box>

        {/* Tab Selector Menu - Horizontal Scroll Bar on Mobile */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: { xs: 'nowrap', sm: 'wrap' },
            gap: 1.5,
            mb: { xs: 4, md: 6 },
            justifyContent: { xs: 'flex-start', sm: 'flex-start' },
            overflowX: { xs: 'auto', sm: 'visible' },
            pb: { xs: 1, sm: 0 },
            px: { xs: 0.5, sm: 0 },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <Button
            onClick={() => setSelectedTab('all')}
            variant={selectedTab === 'all' ? 'contained' : 'outlined'}
            sx={{
              flexShrink: 0,
              borderRadius: 1,
              textTransform: 'none',
              fontWeight: 600,
              px: { xs: 2.5, sm: 3 },
              py: 1,
              fontSize: '0.88rem',
              borderColor: selectedTab === 'all' ? 'primary.main' : 'rgba(0,0,0,0.12)',
              bgcolor: selectedTab === 'all' ? 'primary.main' : '#FFFFFF',
              color: selectedTab === 'all' ? '#FFFFFF' : 'text.primary',
              '&:hover': {
                bgcolor: selectedTab === 'all' ? 'primary.dark' : '#F5F4F0',
                borderColor: 'primary.main',
              },
            }}
          >
            Todas (3)
          </Button>

          {locations.map((loc) => (
            <Button
              key={loc.id}
              onClick={() => setSelectedTab(loc.id)}
              variant={selectedTab === loc.id ? 'contained' : 'outlined'}
              sx={{
                flexShrink: 0,
                borderRadius: 1,
                textTransform: 'none',
                fontWeight: 600,
                px: { xs: 2.5, sm: 3 },
                py: 1,
                fontSize: '0.88rem',
                borderColor: selectedTab === loc.id ? 'primary.main' : 'rgba(0,0,0,0.12)',
                bgcolor: selectedTab === loc.id ? 'primary.main' : '#FFFFFF',
                color: selectedTab === loc.id ? '#FFFFFF' : 'text.primary',
                '&:hover': {
                  bgcolor: selectedTab === loc.id ? 'primary.dark' : '#F5F4F0',
                  borderColor: 'primary.main',
                },
              }}
            >
              {loc.name.replace('Amoverte ', '')}
            </Button>
          ))}
        </Box>

        {/* Locations Grid / Cards - Squared Mobile Style */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: selectedTab === 'all' ? 'repeat(2, 1fr)' : '1fr',
              md: selectedTab === 'all' ? 'repeat(3, 1fr)' : '1fr',
            },
            gap: { xs: 3, md: 4 },
            maxWidth: selectedTab === 'all' ? '100%' : 680,
            mx: selectedTab === 'all' ? 0 : 'auto',
          }}
        >
          {filteredLocations.map((loc) => (
            <Card
              key={loc.id}
              elevation={0}
              sx={{
                borderRadius: 1,
                border: '1.5px solid',
                borderColor: selectedTab === loc.id ? 'primary.main' : 'rgba(0,0,0,0.08)',
                bgcolor: '#FAF9F6',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                boxShadow: selectedTab === loc.id ? '0 12px 32px rgba(66,58,196,0.15)' : '0 2px 12px rgba(0,0,0,0.03)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 36px rgba(66,58,196,0.14)',
                  borderColor: 'primary.main',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 4 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Chip
                    label="Mérida, Yuc."
                    size="small"
                    sx={{
                      borderRadius: 1,
                      bgcolor: '#EFEEFC',
                      color: 'primary.dark',
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.68rem',
                      fontWeight: 700,
                    }}
                  />
                </Box>

                <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: '1.18rem', md: '1.3rem' }, color: '#1B1B2B', mb: 0.5 }}>
                  {loc.name}
                </Typography>
                <Typography sx={{ color: 'primary.main', fontSize: '0.85rem', fontWeight: 600, mb: 3 }}>
                  {loc.tagline}
                </Typography>

                <Stack spacing={2} sx={{ mb: 3.5, flexGrow: 1 }}>
                  {/* Address */}
                  <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <LocationOnIcon sx={{ color: 'primary.main', fontSize: 20, mt: 0.2 }} />
                    <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', lineHeight: 1.5 }}>
                      {loc.address}
                    </Typography>
                  </Box>

                  {/* Phone */}
                  <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <PhoneIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Typography
                      component="a"
                      href={`tel:${loc.phoneRaw}`}
                      sx={{
                        fontSize: '0.9rem',
                        color: '#1B1B2B',
                        fontWeight: 600,
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main' },
                      }}
                    >
                      {loc.phone}
                    </Typography>
                  </Box>

                  {/* Instagram */}
                  <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <InstagramIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Typography
                      component="a"
                      href={loc.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontSize: '0.9rem',
                        color: 'text.secondary',
                        fontWeight: 500,
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main' },
                      }}
                    >
                      {loc.instagram}
                    </Typography>
                  </Box>
                </Stack>

                {/* Mobile Action Buttons Bar */}
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button
                    component="a"
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    endIcon={<LaunchIcon />}
                    fullWidth
                    sx={{
                      borderRadius: 1,
                      textTransform: 'none',
                      fontWeight: 600,
                      py: 1.2,
                      fontSize: '0.88rem',
                      bgcolor: 'primary.main',
                      color: '#FFFFFF',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  >
                    Cómo llegar (Google Maps)
                  </Button>
                  <Button
                    component="a"
                    href={`tel:${loc.phoneRaw}`}
                    variant="outlined"
                    startIcon={<PhoneIcon />}
                    sx={{
                      borderRadius: 1,
                      textTransform: 'none',
                      fontWeight: 600,
                      py: 1.2,
                      fontSize: '0.88rem',
                      borderColor: 'rgba(0,0,0,0.18)',
                      color: 'text.primary',
                      display: { xs: 'flex', sm: 'none' },
                      '&:hover': {
                        borderColor: 'primary.main',
                        color: 'primary.main',
                      },
                    }}
                  >
                    Llamar
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Locations;
