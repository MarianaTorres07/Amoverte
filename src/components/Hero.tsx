import { Box, Typography, Button, Stack, Chip } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Real clinic photo from Amoverte
import heroClinicImg from '../assets/photosAmoverte/IMG_2950.jpg';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '+3.400', label: 'pacientes tratados en Mérida' },
  { value: '92%', label: 'alcanza su objetivo funcional' },
  { value: '3 sedes', label: 'Cordemex · Américas · La Florida' },
  { value: '50-60 min', label: 'de atención personalizada' },
];

function Hero() {
  return (
    <Box component="section" id="home" sx={{ width: '100%', bgcolor: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      {/* ========================================================
          HERO MAIN CONTAINER (Inspired by Reference Image 1)
          Left: Full-Bleed Photo to the screen edge (top, bottom, left)
          Right: Content (Eyebrow, Title, Subtitle, Buttons, Badges)
         ======================================================== */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1.08fr' },
          minHeight: { xs: 'auto', md: '640px', lg: '700px' },
          background:
            'radial-gradient(circle at 92% 35%, rgba(198,241,53,0.08) 0%, transparent 45%), radial-gradient(circle at 95% 85%, rgba(91,82,226,0.05) 0%, transparent 50%), #FFFFFF',
        }}
      >
        {/* ========================================================
            LEFT COLUMN: Real Clinic Photo (Full bleed to screen edge)
           ======================================================== */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: 340, sm: 420, md: '100%' },
            minHeight: { md: '100%' },
            overflow: 'hidden',
            order: { xs: 2, md: 1 },
          }}
        >
          <Box
            component="img"
            src={heroClinicImg}
            alt="Fisioterapia Consciente Amoverte en Mérida"
            sx={{
              position: { xs: 'relative', md: 'absolute' },
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: { xs: 'center 20%', md: 'center 22%' },
              display: 'block',
              // Fade orgánico hacia el texto (derecha en desktop, abajo en mobile) exactamente como la referencia:
              maskImage: {
                xs: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                md: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)',
              },
              WebkitMaskImage: {
                xs: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                md: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)',
              },
            }}
          />
        </Box>

        {/* ========================================================
            RIGHT COLUMN: Title & CTAs (Inspired by Reference Image 1)
           ======================================================== */}
        <Box
          sx={{
            order: { xs: 1, md: 2 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            py: { xs: 5, sm: 7, md: 8, lg: 10 },
            pl: { xs: 3, sm: 5, md: 4, lg: 6, xl: 8 },
            pr: { xs: 3, sm: 5, md: 5, lg: 7, xl: 9 },
          }}
        >
          <Box sx={{ maxWidth: 620 }}>
            {/* Brand Eyebrow Tag */}
            <Chip
              label="Fisioterapia Consciente · Mérida"
              sx={{
                bgcolor: 'secondary.main',
                color: '#1B1B2B',
                fontWeight: 800,
                fontSize: { xs: '0.74rem', sm: '0.8rem' },
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                px: 1,
                py: 2,
                borderRadius: 999,
                mb: 2.5,
                boxShadow: '0 2px 10px rgba(198,241,53,0.3)',
              }}
            />

            {/* Main Headline */}
            <Typography
              variant="h1"
              sx={{
                color: '#1B1B2B',
                fontSize: { xs: '2.1rem', sm: '2.7rem', md: '3.1rem', lg: '3.5rem' },
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                mb: 2.5,
              }}
            >
              Muévete Mejor, Recupérate Más Rápido y{' '}
              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 4,
                    width: '100%',
                    height: '6px',
                    bgcolor: 'secondary.main',
                    zIndex: -1,
                    opacity: 0.6,
                    borderRadius: 2,
                  },
                }}
              >
                Vuelve a Sentirte Fuerte
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                color: '#55566B',
                fontSize: { xs: '0.98rem', sm: '1.05rem', md: '1.12rem' },
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Evaluación funcional profunda, alivio real del dolor y planes de
              rehabilitación personalizados en Mérida. Sin rutinas genéricas:
              acompañamos cada etapa de tu recuperación con rigor clínico y calidez humana.
            </Typography>

            {/* CTA Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 4.5 }}
            >
              {/* Primary Appointment Button */}
              <Button
                href="#contacto"
                variant="contained"
                startIcon={<CalendarMonthIcon />}
                sx={{
                  bgcolor: '#1B1B2B',
                  color: '#FFFFFF',
                  borderRadius: 999,
                  textTransform: 'none',
                  fontWeight: 700,
                  px: { xs: 3, sm: 3.8 },
                  py: { xs: 1.4, sm: 1.6 },
                  fontSize: { xs: '0.94rem', md: '1rem' },
                  boxShadow: '0 6px 20px rgba(27,27,43,0.25)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    boxShadow: '0 8px 24px rgba(43,37,112,0.35)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Agendar Cita
              </Button>

              {/* Secondary Services Button */}
              <Button
                href="#servicios"
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: '#1B1B2B',
                  bgcolor: '#FFFFFF',
                  borderColor: 'rgba(27,27,43,0.25)',
                  borderRadius: 999,
                  textTransform: 'none',
                  fontWeight: 700,
                  px: { xs: 3, sm: 3.5 },
                  py: { xs: 1.4, sm: 1.6 },
                  fontSize: { xs: '0.94rem', md: '1rem' },
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    bgcolor: 'rgba(91,82,226,0.06)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Ver Servicios
              </Button>
            </Stack>

            {/* Trust Badges */}
            <Box
              sx={{
                pt: 3,
                borderTop: '1px solid rgba(0,0,0,0.08)',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 2.5,
              }}
            >
              {/* Badge 1: Certifications & 1-on-1 */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    bgcolor: 'rgba(91,82,226,0.1)',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <VerifiedUserIcon sx={{ fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: '#1B1B2B',
                      lineHeight: 1.25,
                    }}
                  >
                    Fisioterapeutas Certificados
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.76rem',
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    Atención personalizada 1 a 1
                  </Typography>
                </Box>
              </Box>

              {/* Badge 2: 3 Locations in Merida */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    bgcolor: 'rgba(198,241,53,0.3)',
                    color: '#2B2570',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: '#1B1B2B',
                      lineHeight: 1.25,
                    }}
                  >
                    3 Sedes en Mérida
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.76rem',
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    Cordemex · Américas · La Florida
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ========================================================
          STATS STRIP (Credibility & Metrics)
         ======================================================== */}
      <Box
        sx={{
          width: '100%',
          bgcolor: '#FFFFFF',
          borderTop: '1px solid #E8E6F0',
          borderBottom: '1px solid #E8E6F0',
          py: { xs: 4, sm: 5, md: 6 },
        }}
      >
        <Box
          sx={{
            maxWidth: 1440,
            mx: 'auto',
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 3.5, sm: 4, md: 6 },
          }}
        >
          {stats.map((stat) => (
            <Box
              key={stat.label}
              sx={{
                borderLeft: '3px solid',
                borderColor: 'primary.main',
                pl: { xs: 2, md: 2.8 },
                py: 0.5,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateX(4px)',
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: { xs: '1.7rem', sm: '2.1rem', md: '2.5rem' },
                  fontWeight: 800,
                  color: '#1B1B2B',
                  lineHeight: 1.1,
                  mb: 0.6,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.82rem', md: '0.92rem' },
                  color: 'text.secondary',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;