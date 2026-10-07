import { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
    description: 'Especialista en prevención, evaluación y rehabilitación de lesiones deportivas y acondicionamiento físico.',
    image: diegoImg,
  },
  {
    id: 'cesar',
    name: 'Cesar Augusto Balam Avila',
    role: 'Fisioterapeuta Deportivo',
    description: 'Readaptación física funcional, tratamiento de lesiones agudas y optimización del rendimiento deportivo.',
    image: cesarImg,
  },
  {
    id: 'diana',
    name: 'Diana Laura Basto Sanchez',
    role: 'Fisioterapeuta Geriátrica - Miembro Superior',
    description: 'Especialista en articulación de mano y miembro superior, así como en atención y movilidad para el adulto mayor.',
    image: dianaImg,
  },
  {
    id: 'abel',
    name: 'Abel Ang Martin',
    role: 'Fisioterapeuta Deportivo - ATM',
    description: 'Especialista en articulación temporomandibular (ATM), bruxismo, dolor orofacial y lesiones deportivas.',
    image: abelImg,
  },
  {
    id: 'william',
    name: 'William Alejandro León Durán',
    role: 'Fisioterapeuta Deportivo',
    description: 'Rehabilitación física integral, recuperación muscular y seguimiento personalizado para deportistas.',
    image: williamImg,
  },
];

function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

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

    const cardWidth = (container.firstElementChild as HTMLElement)?.offsetWidth || 300;
    const gap = 24;
    const step = cardWidth + gap;
    const targetScroll = direction === 'left' ? scrollLeft - step : scrollLeft + step;

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

  return (
    <Box component="section" id="equipo" sx={{ py: { xs: 8, md: 14 }, width: '100%', bgcolor: '#FAF9F6', overflow: 'hidden' }}>
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
              Equipo de trabajo
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.3rem', md: '2.8rem' },
                fontWeight: 700,
                letterSpacing: '-0.02em',
                mb: 1.5,
                color: '#1B1B2B',
              }}
            >
              Especialistas dedicados a tu recuperación.
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.6 }}>
              Nuestro equipo multidisciplinario combina la fisioterapia deportiva, geriátrica, de miembro superior y ATM para brindarte la atención personalizada que necesitas.
            </Typography>
          </Box>

          {/* Carousel Arrows (Desktop only) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, alignSelf: 'center' }}>
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
                boxShadow: canScrollLeft ? '0 4px 12px rgba(66,58,196,0.15)' : 'none',
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
                boxShadow: canScrollRight ? '0 4px 12px rgba(66,58,196,0.15)' : 'none',
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

        {/* Horizontal Carousel Track */}
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
              sx={{
                flex: '0 0 auto',
                width: {
                  xs: '84vw',
                  sm: 'calc(50% - 12px)',
                  md: 'calc(33.333% - 16px)',
                  lg: 'calc(25% - 18px)',
                },
                scrollSnapAlign: 'start',
                bgcolor: '#FFFFFF',
                border: '1px solid',
                borderColor: 'rgba(0,0,0,0.08)',
                borderRadius: 1,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 40px -10px rgba(66,58,196,0.18)',
                  borderColor: 'primary.main',
                },
              }}
            >
              {/* Photo Container */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  pt: 1.5,
                  px: 1.5,
                  bgcolor: '#F5F4F0',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 280, sm: 300, md: 320 },
                    borderRadius: 1,
                    overflow: 'hidden',
                    bgcolor: '#EAE7DF',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.4s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Text Information */}
              <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.05rem', md: '1.18rem' },
                    lineHeight: 1.3,
                    color: '#1B1B2B',
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.68rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'primary.main',
                    fontWeight: 700,
                    mb: 1.5,
                    mt: 1,
                    lineHeight: 1.4,
                  }}
                >
                  {member.role}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.88rem',
                    color: 'text.secondary',
                    lineHeight: 1.55,
                    mt: 'auto',
                  }}
                >
                  {member.description}
                </Typography>
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
                bgcolor: activeIndex === idx ? 'primary.main' : 'rgba(0,0,0,0.18)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: activeIndex === idx ? 'primary.main' : 'primary.light',
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Team;