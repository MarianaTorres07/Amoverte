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
    <Box component="section" id="home">
      {/* Gradient visual panel  */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 'auto', md: 640 },
          background: 'linear-gradient(120deg, #2B2570 0%, #5B52E3 55%, #423AC4 100%)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          py: { xs: 10, md: 0 },
        }}
      >
        {/* Glass content card  */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 3,
            maxWidth: 560,
            ml: { xs: 3, md: '8vw' },
            mr: { xs: 3, md: 0 },
            p: { xs: 4, md: 6 },
            border: '1.5px solid rgba(198,241,53,0.55)',
            bgcolor: 'rgba(27,27,43,0.18)',
            backdropFilter: 'blur(2px)',
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
            Fisioterapia clínica
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: '#fff',
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              mb: 2.5,
            }}
          >
            Cada grado de movimiento que{' '}
            <Box component="span" sx={{ color: 'secondary.main' }}>
              recuperás
            </Box>{' '}
            es terreno ganado.
          </Typography>

          <Typography sx={{ color: '#DEDCF7', maxWidth: '42ch', mb: 4 }}>
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
                px: { xs: 2.5, md: 3 },
                py: { xs: 1, md: 1.2 },
                fontSize: { xs: '0.85rem', md: '0.92rem' },
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
                px: { xs: 2.5, md: 3 },
                py: { xs: 1, md: 1.2 },
                fontSize: { xs: '0.85rem', md: '0.92rem' },
                '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
              }}
            >
              Conocer el enfoque
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Stats strip below the gradient panel */}
      <Box
        sx={{
          maxWidth: 1180,
          mx: 'auto',
          px: '8vw',
          py: { xs: 5, md: 8 },
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: { xs: 4, md: 6 },
        }}
      >
        {stats.map((stat) => (
          <Box key={stat.label} sx={{ borderLeft: '2px solid', borderColor: 'secondary.dark', pl: 2 }}>
            <Typography
              sx={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 600 }}
            >
              {stat.value}
            </Typography>
            <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary' }}>
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Hero;