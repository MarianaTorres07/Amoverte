import { useRef, useState } from 'react';
import {Box, Typography, IconButton, Dialog, DialogTitle, DialogContent,} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';

interface Service {
  id: string;
  title: string;
  summary: string;
  details: string;
  gradient: string;
}

const services: Service[] = [
  {
    id: 'deportiva',
    title: 'Fisioterapia deportiva',
    summary: 'Readaptación al deporte y prevención de lesiones recurrentes en rodilla, tobillo y hombro.',
    details:
      'Trabajamos junto a deportistas amateurs y de alto rendimiento en la vuelta segura a la actividad, con protocolos progresivos de carga, fuerza y movilidad diseñados según el deporte y la lesión específica.',
    gradient: 'linear-gradient(160deg, #5B52E3 0%, #423AC4 100%)',
  },
  {
    id: 'traumatologica',
    title: 'Traumatológica',
    summary: 'Rehabilitación post-quirúrgica de hombro, cadera y columna con protocolo progresivo.',
    details:
      'Acompañamos cada etapa post-quirúrgica, desde la movilización temprana hasta la recuperación funcional completa, en coordinación directa con el equipo traumatológico tratante.',
    gradient: 'linear-gradient(160deg, #1B1B2B 0%, #34324f 100%)',
  },
  {
    id: 'neurologica',
    title: 'Neurológica y pediátrica',
    summary: 'Recuperación motora en ACV y Parkinson, y seguimiento del desarrollo infantil temprano.',
    details:
      'Programas individualizados de neurorehabilitación para adultos post-ACV o con Parkinson, y seguimiento del desarrollo psicomotor en la primera infancia.',
    gradient: 'linear-gradient(160deg, #9FC71E 0%, #7fa617 100%)',
  },
  {
    id: 'geriatrica',
    title: 'Geriátrica',
    summary: 'Prevención de caídas, equilibrio y movilidad funcional en adultos mayores.',
    details:
      'Trabajo de fuerza, equilibrio y coordinación adaptado a adultos mayores, enfocado en preservar la independencia funcional en las actividades del día a día.',
    gradient: 'linear-gradient(160deg, #423AC4 0%, #2B2570 100%)',
  },
  {
    id: 'oncologica',
    title: 'Rehabilitación oncológica',
    summary: 'Recuperación funcional durante y después de tratamientos oncológicos.',
    details:
      'Ejercicio terapéutico supervisado y manejo del linfedema, adaptado a cada etapa del tratamiento oncológico, en coordinación con el equipo médico tratante.',
    gradient: 'linear-gradient(160deg, #7fa617 0%, #5B52E3 100%)',
  },
];

function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    const amount = 340;
    const maxScroll = el.scrollWidth - el.clientWidth;

    if (direction === 'right') {
      if (el.scrollLeft >= maxScroll - 5) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: amount, behavior: 'smooth' });
      }
    } else {
      if (el.scrollLeft <= 5) {
        el.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: -amount, behavior: 'smooth' });
      }
    }
  };

  return (
    <Box component="section" id="servicios" sx={{ py: { xs: 10, md: 15 } }}>
      <Box sx={{ maxWidth: 1180, mx: 'auto', px: '8vw' }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            sx={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'primary.dark',
              mb: 1,
            }}
          >
            Nuestros servicios
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
            Tratamos con precisión, área por área.
          </Typography>
        </Box>

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: 3,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            pb: 2,
            '&::-webkit-scrollbar': { height: 6 },
            '&::-webkit-scrollbar-thumb': { bgcolor: 'divider', borderRadius: 3 },
          }}
        >
          {services.map((service) => (
            <Box
              key={service.id}
              onClick={() => setSelectedService(service)}
              sx={{
                flex: '0 0 300px',
                scrollSnapAlign: 'start',
                cursor: 'pointer',
                bgcolor: 'background.default',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 24px 44px -22px rgba(66,58,196,0.3)',
                },
              }}
            >
              <Box sx={{ aspectRatio: '4 / 3', background: service.gradient }} />
              <Box sx={{ p: 3 }}>
                <Typography sx={{ fontWeight: 600, mb: 1 }}>{service.title}</Typography>
                <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                  {service.summary}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Arrows now centered below the carousel, always visible (mobile + desktop) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
          <IconButton
            onClick={() => scroll('left')}
            aria-label="Anterior"
            sx={{ border: '1px solid', borderColor: 'divider' }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => scroll('right')}
            aria-label="Siguiente"
            sx={{ border: '1px solid', borderColor: 'divider' }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Dialog
        open={selectedService !== null}
        onClose={() => setSelectedService(null)}
        maxWidth="sm"
        fullWidth
      >
        {selectedService && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {selectedService.title}
              <IconButton onClick={() => setSelectedService(null)} aria-label="Cerrar">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Typography sx={{ color: 'text.secondary' }}>{selectedService.details}</Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}

export default Services;