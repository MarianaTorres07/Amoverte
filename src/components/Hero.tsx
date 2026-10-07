import { Box, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '+3.400', label: 'pacientes tratados' },
  { value: '92%', label: 'alcanza su objetivo funcional' },
  { value: '4', label: 'especialidades clínicas' },
  { value: '45 min', label: 'por sesión, sin apuro' },
];

function Hero() {
  return (
    <Box component="section" id="home" sx={{ width: '100%' }}>
      {/* Gradient visual panel  */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 'auto', md: 620 },
          background: 'linear-gradient(120deg, #2B2570 0%, #5B52E3 55%, #423AC4 100%)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          py: { xs: 10, md: 8 },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 3,
            maxWidth: 1440,
            width: '100%',
            mx: 'auto',
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
          }}
        >
          {/* Glass content card  */}
          <Box
            sx={{
              maxWidth: 600,
              p: { xs: 4, md: 6 },
              border: '1.5px solid rgba(198,241,53,0.55)',
              bgcolor: 'rgba(27,27,43,0.22)',
              backdropFilter: 'blur(8px)',
              borderRadius: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'secondary.main', 
                mb: 2,
              }}
            >
              Centro de Fisioterapia y Rehabilitación
            </Typography>

            <Typography
              variant="h1"
              sx={{
                color: '#fff',
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                fontWeight: 700,
                lineHeight: 1.15,
                mb: 2.5,
              }}
            >
              Cada grado de movimiento que{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}>
                recuperás
              </Box>{' '}
              es terreno ganado.
            </Typography>

            <Typography sx={{ color: '#DEDCF7', maxWidth: '44ch', mb: 4, fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.6 }}>
              Planes de rehabilitación a medida, basados en evaluación funcional
              real y seguimiento cercano — no en rutinas genéricas.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ flexWrap: 'wrap' }}
              useFlexGap
            >
              <Button
                href="#contacto"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: 'secondary.main',
                  color: '#1B1B2B',
                  borderRadius: 999,
                  textTransform: 'none',
                  fontWeight: 600,
                  px: { xs: 3, md: 3.5 },
                  py: { xs: 1.2, md: 1.4 },
                  fontSize: { xs: '0.88rem', md: '0.95rem' },
                  '&:hover': { bgcolor: '#DAF95E' },
                }}
              >
                Reservar evaluación
              </Button>

              <Button
                href="#quienes-somos"
                variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.5)',
                  borderRadius: 999,
                  textTransform: 'none',
                  fontWeight: 600,
                  px: { xs: 3, md: 3.5 },
                  py: { xs: 1.2, md: 1.4 },
                  fontSize: { xs: '0.88rem', md: '0.95rem' },
                  '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
                }}
              >
                Conocer el enfoque
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* Stats strip below the gradient panel - Full Container Width */}
      <Box
        sx={{
          width: '100%',
          bgcolor: '#FAF9F6',
          borderBottom: '1px solid #E3E1F2',
          py: { xs: 5, md: 7 },
        }}
      >
        <Box
          sx={{
            maxWidth: 1440,
            mx: 'auto',
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 4, sm: 5, md: 6 },
          }}
        >
          {stats.map((stat) => (
            <Box
              key={stat.label}
              sx={{
                borderLeft: '3px solid',
                borderColor: 'secondary.dark',
                pl: { xs: 2.5, md: 3 },
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
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.6rem' },
                  fontWeight: 700,
                  color: '#1B1B2B',
                  lineHeight: 1.1,
                  mb: 0.8,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
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