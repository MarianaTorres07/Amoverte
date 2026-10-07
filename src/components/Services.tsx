import { useRef, useState } from 'react';
import {Box, Typography, IconButton, Dialog, DialogTitle, DialogContent,} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';
import type { Service } from '../types';

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
    id: 'ortopédica',
    title: 'Fisioterapia Ortopédica',
    summary: 'Rehabilitación post-quirúrgica de hombro, cadera y columna con protocolo progresivo.',
    details:
      'Acompañamos cada etapa post-quirúrgica, desde la movilización temprana hasta la recuperación funcional completa, en coordinación directa con el equipo traumatológico tratante.',
    gradient: 'linear-gradient(160deg, #1B1B2B 0%, #34324f 100%)',
  },
  {
    id: 'readaptacion',
    title: 'Readaptación',
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
    id: 'rehabilitacion',
    title: 'Rehabilitación',
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

    const amount = (el.firstElementChild as HTMLElement)?.offsetWidth || 340;
    const maxScroll = el.scrollWidth - el.clientWidth;

    if (direction === 'right') {
      if (el.scrollLeft >= maxScroll - 5) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: amount + 24, behavior: 'smooth' });
      }
    } else {
      if (el.scrollLeft <= 5) {
        el.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: -(amount + 24), behavior: 'smooth' });
      }
    }
  };

  return (
    <Box component="section" id="servicios" sx={{ py: { xs: 8, md: 14 }, width: '100%', bgcolor: '#FAF9F6' }}>
      <Box sx={{ maxWidth: 1440, mx: 'auto', px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
        <Box sx={{ maxWidth: 700, mb: { xs: 5, md: 7 }, mx: { xs: 'auto', md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
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
            Nuestros servicios
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.3rem', md: '2.8rem' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#1B1B2B',
            }}
          >
            Tratamos con precisión, área por área.
          </Typography>
        </Box>

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: { xs: 2.5, sm: 3, md: 3.5 },
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            py: 1,
            px: 0.5,
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {services.map((service) => (
            <Box
              key={service.id}
              onClick={() => setSelectedService(service)}
              sx={{
                flex: '0 0 auto',
                width: {
                  xs: '84vw',
                  sm: 'calc(50% - 12px)',
                  md: 'calc(33.333% - 16px)',
                  lg: 'calc(25% - 18px)',
                },
                minWidth: { xs: 260, sm: 280 },
                scrollSnapAlign: 'start',
                cursor: 'pointer',
                bgcolor: '#FFFFFF',
                border: '1.5px solid',
                borderColor: 'rgba(0,0,0,0.08)',
                borderRadius: 1.5,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 16px 36px rgba(66,58,196,0.15)',
                  borderColor: 'primary.main',
                },
              }}
            >
              <Box sx={{ aspectRatio: '16 / 9', background: service.gradient }} />
              <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 1, color: '#1B1B2B' }}>
                  {service.title}
                </Typography>
                <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary', lineHeight: 1.55 }}>
                  {service.summary}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Carousel Navigation Arrows */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
          <IconButton
            onClick={() => scroll('left')}
            aria-label="Anterior servicio"
            sx={{
              width: 44,
              height: 44,
              bgcolor: '#FFFFFF',
              border: '1.5px solid',
              borderColor: 'rgba(0,0,0,0.12)',
              borderRadius: 1,
              color: 'primary.main',
              '&:hover': { bgcolor: 'primary.main', color: '#FFFFFF', borderColor: 'primary.main' },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => scroll('right')}
            aria-label="Siguiente servicio"
            sx={{
              width: 44,
              height: 44,
              bgcolor: '#FFFFFF',
              border: '1.5px solid',
              borderColor: 'rgba(0,0,0,0.12)',
              borderRadius: 1,
              color: 'primary.main',
              '&:hover': { bgcolor: 'primary.main', color: '#FFFFFF', borderColor: 'primary.main' },
            }}
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