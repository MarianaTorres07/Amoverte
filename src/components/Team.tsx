import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  Button,
  Chip,
  Grid,
  Stack,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { TeamMember } from '../types';

import diegoImg from '../assets/photosEquipo/Diego Canul.jpeg';
import cesarImg from '../assets/photosEquipo/Cesar Balam Avila.jpeg';
import dianaImg from '../assets/photosEquipo/Diana Basto Sanchez.jpeg';
import abelImg from '../assets/photosEquipo/Abel Ang Martin.jpeg';
import williamImg from '../assets/photosEquipo/William León Duran.jpeg';

const team: TeamMember[] = [
  {
    id: 'diego',
    name: 'Diego Canul González',
    role: 'Fisioterapeuta Deportivo',
    description:
      'Especialista en prevención, evaluación y rehabilitación de lesiones deportivas y acondicionamiento físico.',
    image: diegoImg,
    bio: 'Diego cuenta con amplia experiencia en rehabilitación ortopédica y deportiva. Su enfoque combina la evaluación biomecánica precisa, la terapia manual descontracturante y el ejercicio funcional progresivo para garantizar que cada deportista o persona activa retome sus actividades con total confianza y seguridad.',
    specialties: [
      'Prevención y Readaptación de Lesiones',
      'Rehabilitación de Rodilla, Tobillo y Hombro',
      'Descarga Muscular y Terapia Manual',
      'Acondicionamiento Funcional Progresivo',
    ],
    locations: ['Amoverte Cordemex', 'Amoverte Las Américas'],
  },
  {
    id: 'cesar',
    name: 'Cesar Augusto Balam Avila',
    role: 'Fisioterapeuta Deportivo',
    description:
      'Readaptación física funcional, tratamiento de lesiones agudas y optimización del rendimiento deportivo.',
    image: cesarImg,
    bio: 'Cesar se especializa en la transición crítica entre la camilla y el campo de entrenamiento. Enfocado en el control neuromuscular, la fuerza excéntrica y la simulación de gestos deportivos reales, ayuda a deportistas de todos los niveles a superar desgarros, tendinopatías y sobrecargas musculares.',
    specialties: [
      'Readaptación Deportiva al Campo',
      'Manejo de Lesiones Musculares y Tendinosas',
      'Optimización del Gesto Deportivo',
      'Descarga Muscular Profunda',
    ],
    locations: ['Amoverte La Florida', 'Amoverte Cordemex'],
  },
  {
    id: 'diana',
    name: 'Diana Laura Basto Sanchez',
    role: 'Fisioterapeuta Geriátrica - Miembro Superior',
    description:
      'Especialista en articulación de mano y miembro superior, así como en atención y movilidad para el adulto mayor.',
    image: dianaImg,
    bio: 'Diana combina una profunda calidez humana con especialización de alta precisión. Por un lado, acompaña a adultos mayores en la preservación de su equilibrio, marcha y autonomía cotidiana; por el otro, lidera el área de rehabilitación de mano, dedos, muñeca y miembro superior para afecciones como túnel carpiano, tendinitis y post-fracturas.',
    specialties: [
      'Terapia Funcional y Marcha en Adulto Mayor',
      'Prevención Activa de Caídas',
      'Rehabilitación de Mano, Muñeca y Dedos',
      'Manejo de Artrosis y Artritis',
    ],
    locations: ['Amoverte Cordemex', 'Amoverte La Florida'],
  },
  {
    id: 'abel',
    name: 'Abel Ang Martin',
    role: 'Fisioterapeuta Deportivo - ATM',
    description:
      'Especialista en articulación temporomandibular (ATM), bruxismo, dolor orofacial y lesiones deportivas.',
    image: abelImg,
    bio: 'Abel es referente en el abordaje de la articulación temporomandibular (ATM), tratando con éxito dolores mandibulares, chasquidos articulares, bruxismo y cefaleas tensionales mediante terapia manual orofacial y descompresión cervical. Asimismo, atiende lesiones y descargas musculares para deportistas.',
    specialties: [
      'Articulación Temporomandibular (ATM)',
      'Bruxismo y Dolor Orofacial',
      'Descompresión Cervical y Postural',
      'Fisioterapia Deportiva y Descargas',
    ],
    locations: ['Amoverte La Florida', 'Amoverte Las Américas'],
  },
  {
    id: 'william',
    name: 'William Alejandro León Durán',
    role: 'Fisioterapeuta Deportivo',
    description:
      'Rehabilitación física integral, recuperación muscular y seguimiento personalizado para deportistas.',
    image: williamImg,
    bio: 'William se destaca por su acompañamiento integral y minucioso en procesos ortopédicos y post-quirúrgicos. Diseña programas personalizados para dolor de columna (lumbalgia, cervicalgia), hombro y cadera, guiando al paciente desde el alivio inicial del dolor hasta la completa independencia funcional.',
    specialties: [
      'Terapia Ortopédica y Columna Vertebral',
      'Rehabilitación Pre y Post-Quirúrgica',
      'Descarga Muscular y Recuperación Tisular',
      'Reeducación Postural Global',
    ],
    locations: ['Amoverte Las Américas', 'Amoverte Cordemex'],
  },
];

function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;

    const maxScroll = scrollWidth - clientWidth;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < maxScroll - 5);

    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }

    const progress = Math.min(Math.max(0, scrollLeft / maxScroll), 1);
    const index = Math.round(progress * (team.length - 1));
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    checkScroll();
    container.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      container.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) return;

    const cardWidth =
      (container.firstElementChild as HTMLElement)?.offsetWidth || 300;
    const gap = 24;
    const step = cardWidth + gap;
    const targetScroll =
      direction === 'left' ? scrollLeft - step : scrollLeft + step;

    container.scrollTo({
      left: Math.min(Math.max(0, targetScroll), maxScroll),
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const { scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) return;

    const step = maxScroll / (team.length - 1);
    const targetScroll = Math.min(Math.max(0, index * step), maxScroll);
    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };

  const handleOpenMember = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleNextMember = () => {
    if (!selectedMember) return;
    const idx = team.findIndex((m) => m.id === selectedMember.id);
    setSelectedMember(team[(idx + 1) % team.length]);
  };

  const handlePrevMember = () => {
    if (!selectedMember) return;
    const idx = team.findIndex((m) => m.id === selectedMember.id);
    setSelectedMember(team[(idx - 1 + team.length) % team.length]);
  };


  return (
    <Box
      component="section"
      id="equipo"
      sx={{
        py: { xs: 8, md: 14 },
        width: '100%',
        bgcolor: '#FAF9F6',
        overflow: 'hidden',
        scrollMarginTop: { xs: '70px', md: '90px' },
      }}
    >
      <Box sx={{ maxWidth: 1440, mx: 'auto', px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
        {/* Header with Navigation Controls */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            mb: { xs: 4, md: 6 },
            gap: 3,
          }}
        >
          <Box sx={{ maxWidth: 700 }}>
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
              PERSONAL CLÍNICO
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.85rem', sm: '2.3rem', md: '2.8rem' },
                fontWeight: 700,
                letterSpacing: '-0.02em',
                mb: 1.5,
                color: '#1B1B2B',
                lineHeight: 1.15,
              }}
            >
              Personal de Amoverte
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.6,
              }}
            >
              Fisioterapeutas especialistas certificados en Mérida. Haz clic en
              cada integrante para ver su perfil completo, sedes de atención y
              agendar tu valoración.
            </Typography>
          </Box>

          {/* Carousel Arrows (Desktop only) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1.5,
              alignSelf: 'center',
            }}
          >
            <IconButton
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Anterior integrante"
              sx={{
                width: 48,
                height: 48,
                bgcolor: '#FFFFFF',
                border: '1.5px solid',
                borderColor: canScrollLeft ? 'primary.main' : 'rgba(0,0,0,0.12)',
                color: canScrollLeft ? 'primary.main' : 'text.disabled',
                boxShadow: canScrollLeft
                  ? '0 4px 12px rgba(66,58,196,0.15)'
                  : 'none',
                transition: 'all 0.25s ease',
                '&:hover': {
                  bgcolor: canScrollLeft ? 'primary.main' : '#FFFFFF',
                  color: canScrollLeft ? '#FFFFFF' : 'text.disabled',
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Siguiente integrante"
              sx={{
                width: 48,
                height: 48,
                bgcolor: '#FFFFFF',
                border: '1.5px solid',
                borderColor: canScrollRight ? 'primary.main' : 'rgba(0,0,0,0.12)',
                color: canScrollRight ? 'primary.main' : 'text.disabled',
                boxShadow: canScrollRight
                  ? '0 4px 12px rgba(66,58,196,0.15)'
                  : 'none',
                transition: 'all 0.25s ease',
                '&:hover': {
                  bgcolor: canScrollRight ? 'primary.main' : '#FFFFFF',
                  color: canScrollRight ? '#FFFFFF' : 'text.disabled',
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Horizontal Carousel Track ("Carrete" sketch) */}
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            gap: { xs: 2.5, sm: 3, md: 3.5 },
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            py: 2,
            px: 0.5,
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {team.map((member) => (
            <Box
              key={member.id}
              onClick={() => handleOpenMember(member)}
              sx={{
                flex: '0 0 auto',
                width: {
                  xs: '80vw',
                  sm: '280px',
                  md: '300px',
                  lg: '310px',
                },
                scrollSnapAlign: 'start',
                bgcolor: '#FFFFFF',
                border: '1.5px solid rgba(0,0,0,0.08)',
                borderRadius: 3,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                transition:
                  'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px -10px rgba(91,82,226,0.22)',
                  borderColor: 'primary.main',
                  '& .team-member-img': {
                    transform: 'scale(1.05)',
                  },
                  '& .team-action-btn': {
                    bgcolor: 'primary.main',
                    color: '#FFFFFF',
                  },
                  '& .team-role-box': {
                    bgcolor: 'primary.main',
                    color: '#FFFFFF',
                    borderColor: 'primary.main',
                  },
                },
              }}
            >
              {/* Photo Section: [ FOTO ] */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 300, sm: 320, md: 340 },
                  bgcolor: '#F3F2EE',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  className="team-member-img"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 12%',
                    transition: 'transform 0.4s ease',
                    display: 'block',
                  }}
                />
              </Box>

              {/* Information Section: [ Especialidad ] Box */}
              <Box
                sx={{
                  p: { xs: 2.2, sm: 2.5 },
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  bgcolor: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                <Box sx={{ mb: 1.8 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '1.05rem', md: '1.15rem' },
                      lineHeight: 1.3,
                      color: '#1B1B2B',
                      fontFamily: "'Space Grotesk', sans-serif",
                      mb: 1.2,
                    }}
                  >
                    {member.name}
                  </Typography>

                  {/* Dedicated [ Especialidad ] Box */}
                  <Box
                    className="team-role-box"
                    sx={{
                      py: 0.9,
                      px: 1.4,
                      borderRadius: 2,
                      bgcolor: 'rgba(91,82,226,0.08)',
                      border: '1.5px solid rgba(91,82,226,0.18)',
                      color: 'primary.dark',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      lineHeight: 1.35,
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {member.role}
                  </Box>
                </Box>

                {/* Card Action Link */}
                <Box
                  className="team-action-btn"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0.8,
                    py: 1,
                    px: 1.5,
                    borderRadius: 1.5,
                    bgcolor: '#FAF9F6',
                    border: '1px solid rgba(0,0,0,0.06)',
                    color: 'primary.main',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <span>Ver perfil completo</span>
                  <ArrowForwardIcon sx={{ fontSize: '0.9rem' }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Pagination Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
          {team.map((member, idx) => (
            <Box
              key={`dot-${member.id}`}
              onClick={() => scrollToIndex(idx)}
              sx={{
                width: activeIndex === idx ? 28 : 10,
                height: 10,
                borderRadius: 999,
                bgcolor:
                  activeIndex === idx ? 'primary.main' : 'rgba(0,0,0,0.18)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor:
                    activeIndex === idx ? 'primary.main' : 'primary.light',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ========================================================
          RESPONSIVE TEAM MEMBER MODAL
          Desktop: 2 Columns / Mobile: Stacked
         ======================================================== */}
      <Dialog
        open={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
        maxWidth="md"
        fullWidth
        scroll="body"
        slotProps={{
          paper: {
            sx: {
              position: 'relative',
              borderRadius: { xs: 2.5, md: 3.5 },
              overflow: 'hidden',
              bgcolor: '#FFFFFF',
              boxShadow: '0 25px 60px -15px rgba(27,27,43,0.35)',
              m: { xs: 1.5, sm: 3 },
            },
          },
          backdrop: {
            sx: {
              bgcolor: 'rgba(27,27,43,0.7)',
              backdropFilter: 'blur(8px)',
            },
          },
        }}
      >
        {selectedMember && (
          <Box sx={{ p: { xs: 2, sm: 3.5, md: 4.5 } }}>
            {/* Prominent, guaranteed-visible Close Button (Fixed at top-right of modal) */}
            <IconButton
              onClick={() => setSelectedMember(null)}
              aria-label="Cerrar modal"
              sx={{
                position: 'absolute',
                top: { xs: 10, sm: 16 },
                right: { xs: 10, sm: 16 },
                zIndex: 40,
                width: { xs: 38, sm: 42 },
                height: { xs: 38, sm: 42 },
                bgcolor: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(8px)',
                border: '1.5px solid rgba(0, 0, 0, 0.12)',
                color: '#1B1B2B',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.12)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: '#F5F4F0',
                  transform: 'scale(1.08)',
                  borderColor: 'primary.main',
                },
              }}
            >
              <CloseIcon sx={{ fontSize: { xs: 20, sm: 22 } }} />
            </IconButton>

            {/* Top Navigation Bar: Specialist tag & Prev/Next (with right padding so it never collides with the X button) */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1.5,
                pb: 2,
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                mb: 3,
                pr: { xs: 5.5, sm: 6.5 },
              }}
            >
              <Chip
                label="Especialista"
                sx={{
                  display: { xs: 'inline-flex', sm: 'none' },
                  bgcolor: 'secondary.main',
                  color: '#1B1B2B',
                  fontWeight: 800,
                  fontSize: '0.72rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              />
              <Chip
                label="Fisioterapeuta Especialista"
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  bgcolor: 'secondary.main',
                  color: '#1B1B2B',
                  fontWeight: 800,
                  fontSize: '0.74rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              />

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  size="small"
                  onClick={handlePrevMember}
                  aria-label="Especialista anterior"
                  sx={{
                    width: { xs: 32, sm: 36 },
                    height: { xs: 32, sm: 36 },
                    border: '1.5px solid rgba(0,0,0,0.12)',
                    color: '#1B1B2B',
                    '&:hover': {
                      bgcolor: 'rgba(91,82,226,0.08)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <ArrowBackIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={handleNextMember}
                  aria-label="Especialista siguiente"
                  sx={{
                    width: { xs: 32, sm: 36 },
                    height: { xs: 32, sm: 36 },
                    border: '1.5px solid rgba(0,0,0,0.12)',
                    color: '#1B1B2B',
                    '&:hover': {
                      bgcolor: 'rgba(91,82,226,0.08)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <ArrowForwardIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>

            {/* 2-Column Responsive Layout */}
            <Grid container spacing={{ xs: 3, md: 4.5 }} sx={{ alignItems: 'flex-start' }}>
              {/* Left Column: Portrait Photo & Sedes */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    bgcolor: '#F5F4F0',
                    border: '1.5px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                    mb: 2.5,
                  }}
                >
                  <Box
                    component="img"
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    sx={{
                      width: '100%',
                      height: { xs: 290, sm: 350, md: 420 },
                      objectFit: 'contain',
                      bgcolor: '#F3F2EE',
                      display: 'block',
                    }}
                  />
                </Box>

                {/* Sedes de atención */}
                {selectedMember.locations && (
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: '#FAF9F6',
                      borderRadius: 2,
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.74rem',
                        fontFamily: "'Space Mono', monospace",
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'primary.dark',
                        fontWeight: 700,
                        mb: 1.2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.8,
                      }}
                    >
                      <LocationOnIcon sx={{ fontSize: 16 }} />
                      Sedes de atención en Mérida:
                    </Typography>
                    <Stack spacing={0.8}>
                      {selectedMember.locations.map((loc) => (
                        <Typography
                          key={loc}
                          sx={{
                            fontSize: '0.84rem',
                            fontWeight: 600,
                            color: '#1B1B2B',
                          }}
                        >
                          • {loc}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                )}
              </Grid>

              {/* Right Column: Name, Bio, Specialties and CTAs */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: '1.6rem', sm: '1.95rem', md: '2.2rem' },
                    lineHeight: 1.2,
                    color: '#1B1B2B',
                    mb: 0.8,
                  }}
                >
                  {selectedMember.name}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'primary.main',
                    fontWeight: 700,
                    mb: 2.5,
                  }}
                >
                  {selectedMember.role}
                </Typography>

                {/* Biography */}
                <Typography
                  sx={{
                    fontSize: { xs: '0.98rem', md: '1.04rem' },
                    color: '#1B1B2B',
                    lineHeight: 1.7,
                    fontWeight: 400,
                    mb: 3,
                  }}
                >
                  {selectedMember.bio || selectedMember.description}
                </Typography>

                {/* Specialties */}
                {selectedMember.specialties && (
                  <Box
                    sx={{
                      mb: 3.5,
                      p: 2.2,
                      bgcolor: '#FAF9F6',
                      borderRadius: 2,
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: 'primary.dark',
                        mb: 1.5,
                      }}
                    >
                      Áreas de especialización clínica:
                    </Typography>
                    <Stack spacing={1}>
                      {selectedMember.specialties.map((spec, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 1.2,
                          }}
                        >
                          <CheckCircleIcon
                            sx={{
                              color: 'secondary.dark',
                              fontSize: 18,
                              mt: 0.2,
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: '0.88rem',
                              color: 'text.secondary',
                              lineHeight: 1.45,
                            }}
                          >
                            {spec}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                )}

                {/* Bottom Action Button */}
                <Box
                  sx={{
                    pt: 2.5,
                    borderTop: '1.5px solid rgba(0,0,0,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    variant="contained"
                    component="a"
                    href={`https://wa.me/529512628921?text=${encodeURIComponent(
                      `Hola, me gustaría agendar una cita con ${selectedMember.name} en Amoverte.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<WhatsAppIcon sx={{ fontSize: 22 }} />}
                    sx={{
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      px: 3.5,
                      py: 1.35,
                      bgcolor: 'primary.main',
                      color: '#FFFFFF',
                      boxShadow: '0 4px 14px rgba(91,82,226,0.3)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                        boxShadow: '0 6px 20px rgba(91,82,226,0.4)',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    Programar Cita
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}

export default Team;