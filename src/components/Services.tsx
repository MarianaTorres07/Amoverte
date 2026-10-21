import { useRef, useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  Button,
  Chip,
  Avatar,
  AvatarGroup,
  Grid,
  Stack,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import type { Service, ServiceTherapist } from '../types';

import diegoImg from '../assets/photosEquipo/Diego Canul.jpeg';
import cesarImg from '../assets/photosEquipo/Cesar Balam Avila.jpeg';
import dianaImg from '../assets/photosEquipo/Diana Basto Sanchez.jpeg';
import abelImg from '../assets/photosEquipo/Abel Ang Martin.jpeg';
import williamImg from '../assets/photosEquipo/William León Duran.jpeg';
import americaImg from '../assets/photosEquipo/America.jpeg';
import fernandaImg from '../assets/photosEquipo/Maria Fernanda.jpeg';

import valoracionImg from '../assets/photosAmoverte/Tezza-4934.jpg';
import seniorBallImg from '../assets/photosAmoverte/Tezza-9154.jpg';
import seniorGeriatricImg from '../assets/photosAmoverte/IMG_8453.jpg';
import athleticBoxImg from '../assets/photosAmoverte/349.png';
import kneeRehabImg from '../assets/photosAmoverte/IMG_2950.jpg';
import atmClinicImg from '../assets/photosAmoverte/Tezza-0683.jpg';
import bandTherapyImg from '../assets/photosAmoverte/IMG_8472.jpg';
import legRehabImg from '../assets/photosAmoverte/Tezza-7774.jpg';
import compressionBootsImg from '../assets/photosAmoverte/IMG_2941.jpg';
import manualStretchImg from '../assets/photosAmoverte/Tezza-9035.jpg';

// Especialistas de Amoverte para la sección "- Fisios que..."
const therapists: Record<string, ServiceTherapist> = {
  diego: {
    id: 'diego',
    name: 'Diego Canul González',
    role: 'Fisioterapeuta Deportivo',
    image: diegoImg,
  },
  cesar: {
    id: 'cesar',
    name: 'Cesar Augusto Balam Avila',
    role: 'Fisioterapeuta Deportivo',
    image: cesarImg,
  },
  diana: {
    id: 'diana',
    name: 'Diana Laura Basto Sanchez',
    role: 'Fisioterapeuta Geriátrica - Miembro Superior',
    image: dianaImg,
  },
  abel: {
    id: 'abel',
    name: 'Abel Ang Martin',
    role: 'Fisioterapeuta Deportivo - ATM',
    image: abelImg,
  },
  william: {
    id: 'william',
    name: 'William Alejandro León Durán',
    role: 'Fisioterapeuta Deportivo',
    image: williamImg,
  },
  america: {
    id: 'america',
    name: 'América',
    role: 'Fisioterapeuta Geriátrica',
    image: americaImg,
  },
  fernanda: {
    id: 'fernanda',
    name: 'María Fernanda Ferrer Rabanales',
    role: 'Fisioterapeuta Deportiva',
    image: fernandaImg,
  },
};

const services: Service[] = [
  {
    id: 'valoracion-tratamiento',
    title: 'Valoración + Tratamiento',
    summary: 'Evaluación de tu estado físico y funcional con diseño de tratamiento 100% personalizado.',
    details:
      'En Amoverte evaluamos tu estado físico y funcional para identificar tus necesidades y diseñar un tratamiento personalizado, enfocado en tus objetivos de recuperación y bienestar.',
    gradient: 'linear-gradient(135deg, #2B2570 0%, #5B52E3 100%)',
    image: valoracionImg,
    imagePosition: 'center 10%',
    category: 'Evaluación',
    benefits: [
      'Evaluación biomecánica y postural completa',
      'Identificación de causas raíz del dolor o limitación',
      'Tratamiento activo desde la primera sesión',
    ],
    therapists: [
      therapists.diego,
      therapists.diana,
      therapists.abel,
      therapists.cesar,
      therapists.william,
      therapists.america,
      therapists.fernanda,
    ],
  },
  {
    id: 'funcional-adulto-mayor',
    title: 'Terapia Funcional para Adulto Mayor',
    summary: 'Fuerza, equilibrio, movilidad y coordinación para favorecer la independencia y seguridad diaria.',
    details:
      'Trabajamos la fuerza, el equilibrio, la movilidad y la coordinación para favorecer la independencia y seguridad del adulto mayor en sus actividades diarias.',
    gradient: 'linear-gradient(135deg, #5B52E3 0%, #423AC4 100%)',
    image: seniorBallImg,
    imagePosition: 'center 4%',
    category: 'Adulto Mayor',
    benefits: [
      'Entrenamiento de equilibrio y prevención activa de caídas',
      'Ejercicios funcionales para autonomía e independencia en el hogar',
      'Movilidad articular suave y fortalecimiento adaptado',
    ],
    therapists: [therapists.diana, therapists.america],
  },
  {
    id: 'terapia-geriatrica',
    title: 'Terapia Geriátrica (Adulto Mayor)',
    summary: 'Atención fisioterapéutica especializada para mantener y mejorar la movilidad, prevenir limitaciones funcionales y favorecer una mejor calidad de vida durante el envejecimiento.',
    details:
      'Brindamos atención fisioterapéutica especializada para mantener y mejorar la movilidad, prevenir limitaciones funcionales y favorecer una mejor calidad de vida durante el envejecimiento.',
    gradient: 'linear-gradient(135deg, #423AC4 0%, #2B2570 100%)',
    image: seniorGeriatricImg,
    imagePosition: 'center 20%',
    category: 'Adulto Mayor',
    benefits: [
      'Mantenimiento y estimulación de la marcha funcional',
      'Manejo del dolor crónico articular (artrosis/artritis)',
      'Atención en camilla y seguimiento humano especializado',
    ],
    therapists: [therapists.diana, therapists.america],
  },
  {
    id: 'fisioterapia-deportiva',
    title: 'Fisioterapia Deportiva',
    summary: 'Atención de lesiones deportivas que favorecen la recuperación y un regreso seguro al deporte.',
    details:
      'En Amoverte atendemos lesiones deportivas mediante tratamientos especializados que favorecen la recuperación física, disminuyen las limitaciones funcionales y facilitan un regreso seguro a la actividad deportiva.',
    gradient: 'linear-gradient(135deg, #2B2570 0%, #5B52E3 100%)',
    image: athleticBoxImg,
    imagePosition: 'center 0%',
    category: 'Deportiva',
    benefits: [
      'Recuperación acelerada de esguinces, desgarros y tendinopatías',
      'Manejo de sobrecargas y optimización del gesto deportivo',
      'Protocolos basados en evidencia clínica y deportiva',
    ],
    therapists: [
      therapists.diego,
      therapists.cesar,
      therapists.william,
      therapists.abel,
      therapists.fernanda,
    ],
  },
  {
    id: 'readaptacion-deportiva',
    title: 'Readaptación Deportiva',
    summary: 'Preparación progresiva para reincorporarse al entrenamiento y la competencia con seguridad.',
    details:
      'Preparamos al deportista para recuperar progresivamente sus capacidades físicas y funcionales, facilitando su reincorporación al entrenamiento y la competencia con mayor seguridad.',
    gradient: 'linear-gradient(135deg, #9FC71E 0%, #7fa617 100%)',
    image: kneeRehabImg,
    imagePosition: 'center 15%',
    category: 'Deportiva',
    benefits: [
      'Transición entre la camilla y el campo de juego',
      'Reentrenamiento del gesto y control neuromuscular',
      'Prevención de re-lesiones bajo demandas reales de carga',
    ],
    therapists: [
      therapists.cesar,
      therapists.diego,
      therapists.william,
      therapists.fernanda,
    ],
  },
  {
    id: 'terapia-atm',
    title: 'Terapia ATM (Articulación Temporomandibular)',
    summary: 'Tratamiento mandibular para disminuir molestias al hablar, masticar y tensión orofacial.',
    details:
      'Tratamos alteraciones de la articulación temporomandibular y la musculatura asociada para mejorar la movilidad mandibular y disminuir molestias al hablar, masticar o realizar movimientos de la mandíbula.',
    gradient: 'linear-gradient(135deg, #5B52E3 0%, #2B2570 100%)',
    image: atmClinicImg,
    imagePosition: 'center 35%',
    category: 'Especializada',
    benefits: [
      'Alivio de chasquidos, dolor mandibular y bruxismo',
      'Descompresión de musculatura masticatoria y cervical',
      'Reeducación biomecánica de la apertura bucal',
    ],
    therapists: [therapists.abel],
  },
  {
    id: 'terapia-mano-dedos',
    title: 'Terapia de Mano y Dedos',
    summary: 'Abordaje de lesiones y alteraciones funcionales para recuperar movilidad, fuerza y actividades diarias.',
    details:
      'Abordamos lesiones y alteraciones funcionales de la mano y los dedos para recuperar la movilidad, la fuerza y la capacidad de realizar actividades cotidianas.',
    gradient: 'linear-gradient(135deg, #1B1B2B 0%, #423AC4 100%)',
    image: bandTherapyImg,
    imagePosition: 'center 10%',
    category: 'Especializada',
    benefits: [
      'Recuperación de la pinza, prensión y destreza fina',
      'Rehabilitación de túnel carpiano, tendinitis y fracturas',
      'Terapia manual de precisión y movilización articular',
    ],
    therapists: [therapists.diana],
  },
  {
    id: 'terapia-ortopedica',
    title: 'Terapia Ortopédica',
    summary: 'Atención especializada para afecciones musculoesqueléticas, dolor y recuperación funcional.',
    details:
      'Ofrecemos atención especializada para lesiones y afecciones musculoesqueléticas, enfocada en disminuir el dolor, recuperar la movilidad y mejorar la función física.',
    gradient: 'linear-gradient(135deg, #2B2570 0%, #34324f 100%)',
    image: legRehabImg,
    imagePosition: 'center 12%',
    category: 'Ortopedia',
    benefits: [
      'Alivio del dolor de espalda, cuello, hombro, cadera y rodilla',
      'Rehabilitación pre y post-quirúrgica integral',
      'Recuperación del rango de movimiento y fuerza muscular',
    ],
    therapists: [therapists.william, therapists.diego, therapists.cesar],
  },
  {
    id: 'descarga-muscular-completa',
    title: 'Descarga Muscular Completa',
    summary: 'Liberación de tensión muscular en todo el cuerpo para favorecer la recuperación física y movilidad.',
    details:
      'Tratamiento enfocado en liberar tensión muscular en diferentes regiones del cuerpo, favorecer la recuperación física y mejorar la sensación de bienestar y movilidad.',
    gradient: 'linear-gradient(135deg, #7fa617 0%, #5B52E3 100%)',
    image: compressionBootsImg,
    imagePosition: 'center 15%',
    category: 'Descargas',
    benefits: [
      'Presoterapia con botas de compresión y descarga profunda',
      'Reducción inmediata de fatiga muscular y sobrecarga',
      'Favorece la circulación sanguínea y oxigenación tisular',
    ],
    therapists: [
      therapists.diego,
      therapists.cesar,
      therapists.william,
      therapists.abel,
      therapists.fernanda,
    ],
  },
  {
    id: 'descarga-muscular-zona',
    title: 'Descarga Muscular por Zona',
    summary: 'Atención localizada para aliviar contracturas y tensión en una región específica del cuerpo.',
    details:
      'Atención localizada en una región específica del cuerpo para aliviar la tensión muscular y favorecer la recuperación, ideal para personas físicamente activas y deportistas.',
    gradient: 'linear-gradient(135deg, #9FC71E 0%, #2B2570 100%)',
    image: manualStretchImg,
    imagePosition: 'center 15%',
    category: 'Descargas',
    benefits: [
      'Enfoque específico en zona sobrecargada (piernas, espalda, cuello)',
      'Terapia manual profunda combinada con técnicas de recuperación',
      'Efectividad rápida para continuar tus actividades y entrenamientos',
    ],
    therapists: [
      therapists.diego,
      therapists.cesar,
      therapists.william,
      therapists.abel,
      therapists.fernanda,
    ],
  },
];

const categories = [
  'Todos',
  'Evaluación',
  'Adulto Mayor',
  'Deportiva',
  'Especializada',
  'Ortopedia',
  'Descargas',
];

function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredServices =
    selectedCategory === 'Todos'
      ? services
      : services.filter((s) => s.category === selectedCategory);

  const selectedService =
    selectedIndex !== null ? services[selectedIndex] : null;

  const handleOpenDetail = (service: Service) => {
    const idx = services.findIndex((s) => s.id === service.id);
    setSelectedIndex(idx !== -1 ? idx : null);
  };

  const handleNextService = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % services.length);
  };

  const handlePrevService = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + services.length) % services.length);
  };


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
    <Box
      component="section"
      id="servicios"
      sx={{
        pt: { xs: 7, md: 10 },
        pb: { xs: 2.5, md: 3 },
        width: '100%',
        bgcolor: '#FAF9F6',
        position: 'relative',
        scrollMarginTop: { xs: '70px', md: '90px' },
      }}
    >
      <Box sx={{ maxWidth: 1440, mx: 'auto', px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
        {/* Header */}
        <Box
          sx={{
            maxWidth: 760,
            mb: { xs: 4, md: 5 },
            mx: { xs: 'auto', md: 0 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
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
            Servicios de Amoverte
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.85rem', sm: '2.3rem', md: '2.8rem' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#1B1B2B',
              lineHeight: 1.18,
              mb: 1.5,
            }}
          >
            Fisioterapia Consciente y Especializada
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.98rem', md: '1.08rem' },
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            Tratamientos diseñados a tu medida con tecnología, rigor clínico y
            calidez humana en Mérida. Haz clic en cada servicio para ver su
            especificación detallada y fisioterapeutas a cargo.
          </Typography>
        </Box>

        {/* Category Filters */}
        <Box
          sx={{
            display: 'flex',
            gap: 1.2,
            overflowX: 'auto',
            pb: 2,
            mb: 3,
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setSelectedCategory(cat)}
                clickable
                sx={{
                  px: 1,
                  py: 2.2,
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '0.88rem',
                  borderRadius: '24px',
                  bgcolor: isSelected ? 'primary.main' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#2B2570',
                  border: '1.5px solid',
                  borderColor: isSelected ? 'primary.main' : 'rgba(0,0,0,0.08)',
                  boxShadow: isSelected
                    ? '0 4px 14px rgba(91,82,226,0.28)'
                    : 'none',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    bgcolor: isSelected ? 'primary.dark' : 'rgba(91,82,226,0.08)',
                    borderColor: 'primary.main',
                  },
                }}
              />
            );
          })}
        </Box>

        {/* Carousel / Cards List */}
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
          {filteredServices.map((service) => (
            <Box
              key={service.id}
              onClick={() => handleOpenDetail(service)}
              sx={{
                flex: '0 0 auto',
                width: {
                  xs: '84vw',
                  sm: 'calc(50% - 12px)',
                  md: 'calc(33.333% - 16px)',
                  lg: 'calc(25% - 18px)',
                },
                minWidth: { xs: 270, sm: 290 },
                scrollSnapAlign: 'start',
                cursor: 'pointer',
                bgcolor: '#FFFFFF',
                border: '1.5px solid',
                borderColor: 'rgba(0,0,0,0.08)',
                borderRadius: 2.5,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 18px rgba(0,0,0,0.04)',
                transition:
                  'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 18px 36px rgba(91,82,226,0.18)',
                  borderColor: 'primary.main',
                  '& .service-card-img': {
                    transform: 'scale(1.05)',
                  },
                  '& .service-action-btn': {
                    bgcolor: 'primary.main',
                    color: '#FFFFFF',
                  },
                },
              }}
            >
              {/* Card Image Container */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: { xs: '4 / 3.4', sm: '4 / 3.2' },
                  overflow: 'hidden',
                  bgcolor: '#1B1B2B',
                }}
              >
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  className="service-card-img"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: service.imagePosition || 'center 15%',
                    transition: 'transform 0.5s ease',
                    filter: 'brightness(0.95)',
                  }}
                />
                {/* Subtle vignette */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(27,27,43,0.35) 100%)',
                  }}
                />

                {/* Badge Category */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    bgcolor: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(6px)',
                    px: 1.4,
                    py: 0.4,
                    borderRadius: '12px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'primary.dark',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {service.category}
                </Box>
              </Box>

              {/* Card Content */}
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.12rem',
                      lineHeight: 1.3,
                      mb: 1.2,
                      color: '#1B1B2B',
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.88rem',
                      color: 'text.secondary',
                      lineHeight: 1.55,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {service.summary}
                  </Typography>
                </Box>

                {/* Card Footer: Therapists previews & action pill */}
                <Box
                  sx={{
                    pt: 2,
                    borderTop: '1px solid rgba(0,0,0,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AvatarGroup
                      max={3}
                      sx={{
                        '& .MuiAvatar-root': {
                          width: 28,
                          height: 28,
                          fontSize: '0.72rem',
                          border: '2px solid #FFFFFF',
                        },
                      }}
                    >
                      {service.therapists.map((t) => (
                        <Avatar key={t.id} alt={t.name} src={t.image} />
                      ))}
                    </AvatarGroup>
                    <Typography
                      sx={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: 'text.secondary',
                        display: { xs: 'none', sm: 'block' },
                      }}
                    >
                      {service.therapists.length === 1
                        ? '1 especialista'
                        : `${service.therapists.length} fisios`}
                    </Typography>
                  </Box>

                  {/* Sketch "Servicio" button with click indicator */}
                  <Box
                    className="service-action-btn"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      px: 1.5,
                      py: 0.6,
                      borderRadius: '8px',
                      bgcolor: 'rgba(91,82,226,0.08)',
                      color: 'primary.main',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <span>Ver</span>
                    <ArrowForwardIcon sx={{ fontSize: '0.9rem' }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Carousel Navigation Arrows */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2.5,
            mt: 4,
          }}
        >
          <IconButton
            onClick={() => scroll('left')}
            aria-label="Anterior servicio"
            sx={{
              width: 46,
              height: 46,
              bgcolor: '#FFFFFF',
              border: '1.5px solid',
              borderColor: 'rgba(0,0,0,0.12)',
              borderRadius: 2,
              color: 'primary.main',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: 'primary.main',
                color: '#FFFFFF',
                borderColor: 'primary.main',
                transform: 'scale(1.05)',
              },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <Typography
            sx={{
              fontSize: '0.86rem',
              fontWeight: 600,
              color: 'text.secondary',
              fontFamily: "'Space Mono', monospace",
            }}
          >
            {filteredServices.length} servicios disponibles
          </Typography>

          <IconButton
            onClick={() => scroll('right')}
            aria-label="Siguiente servicio"
            sx={{
              width: 46,
              height: 46,
              bgcolor: '#FFFFFF',
              border: '1.5px solid',
              borderColor: 'rgba(0,0,0,0.12)',
              borderRadius: 2,
              color: 'primary.main',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: 'primary.main',
                color: '#FFFFFF',
                borderColor: 'primary.main',
                transform: 'scale(1.05)',
              },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* ========================================================
          REDESIGNED SERVICE MODAL
          Clean 2-Column Layout on Desktop, Full Image Showcase (NO dark overlay!)
         ======================================================== */}
      <Dialog
        open={selectedService !== null}
        onClose={() => setSelectedIndex(null)}
        maxWidth="lg"
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
        {selectedService && (
          <Box sx={{ p: { xs: 2, sm: 3.5, md: 4.5 } }}>
            {/* Prominent, guaranteed-visible Close Button (Fixed at top-right of modal) */}
            <IconButton
              onClick={() => setSelectedIndex(null)}
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

            {/* Top Navigation Bar: Category & Prev/Next (with right padding so it never collides with the X button) */}
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0, flexShrink: 1 }}>
                <Chip
                  label={selectedService.category}
                  size="small"
                  sx={{
                    bgcolor: 'secondary.main',
                    color: '#1B1B2B',
                    fontWeight: 800,
                    fontSize: { xs: '0.7rem', sm: '0.76rem' },
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    maxWidth: { xs: 180, sm: 'none' },
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.74rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'primary.dark',
                    fontWeight: 700,
                    display: { xs: 'none', md: 'block' },
                  }}
                >
                  Fisioterapia Consciente Amoverte
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
                <IconButton
                  size="small"
                  onClick={handlePrevService}
                  aria-label="Servicio anterior"
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
                  onClick={handleNextService}
                  aria-label="Servicio siguiente"
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

            {/* Main Content: 2 Columns on Desktop, Stacked on Mobile */}
            <Grid container spacing={{ xs: 3, md: 4.5 }} sx={{ alignItems: 'flex-start' }}>
              {/* Left Column: Full Complete Photo Showcase (100% uncropped with objectFit: contain!) */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    bgcolor: '#14141E',
                    border: '1.5px solid rgba(0,0,0,0.12)',
                    boxShadow: '0 12px 32px rgba(27,27,43,0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: { xs: 340, sm: 440, md: 520 },
                  }}
                >
                  {/* Ambient soft blurred backdrop matching the photo */}
                  <Box
                    component="img"
                    src={selectedService.image}
                    alt=""
                    aria-hidden="true"
                    sx={{
                      position: 'absolute',
                      inset: -20,
                      width: 'calc(100% + 40px)',
                      height: 'calc(100% + 40px)',
                      objectFit: 'cover',
                      filter: 'blur(30px) brightness(0.35)',
                      opacity: 0.75,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* 100% Complete, uncropped original image (objectFit: contain) */}
                  <Box
                    component="img"
                    src={selectedService.image}
                    alt={selectedService.title}
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      width: '100%',
                      height: { xs: 340, sm: 440, md: 520 },
                      objectFit: 'contain', // Full complete photo visible, zero cropping!
                      display: 'block',
                    }}
                  />


                </Box>
              </Grid>

              {/* Right Column: Title, Details, Benefits, Therapists and CTAs */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: '1.6rem', sm: '1.95rem', md: '2.15rem' },
                    lineHeight: 1.2,
                    color: '#1B1B2B',
                    mb: 1.5,
                  }}
                >
                  {selectedService.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: '0.98rem', md: '1.05rem' },
                    color: '#1B1B2B',
                    lineHeight: 1.7,
                    fontWeight: 400,
                    mb: 3,
                  }}
                >
                  {selectedService.details}
                </Typography>

                {/* Benefits */}
                {selectedService.benefits && (
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
                      Qué incluye esta sesión en Amoverte:
                    </Typography>
                    <Stack spacing={1.2}>
                      {selectedService.benefits.map((b, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                          <CheckCircleIcon sx={{ color: 'secondary.dark', fontSize: 18, mt: 0.2 }} />
                          <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary', lineHeight: 1.45 }}>
                            {b}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                )}

                {/* Therapists */}
                <Box sx={{ mb: 3.5 }}>
                  <Typography
                    sx={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'primary.dark',
                      fontWeight: 700,
                      mb: 1.5,
                    }}
                  >
                    Fisioterapeutas especialistas que te atienden:
                  </Typography>

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: '1fr',
                        sm:
                          selectedService.therapists.length > 1
                            ? 'repeat(auto-fit, minmax(200px, 1fr))'
                            : '1fr',
                      },
                      gap: 1.5,
                    }}
                  >
                    {selectedService.therapists.map((t) => (
                      <Box
                        key={t.id}
                        sx={{
                          p: 1.4,
                          borderRadius: 2,
                          border: '1.5px solid rgba(0,0,0,0.08)',
                          bgcolor: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.4,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                        }}
                      >
                        <Avatar
                          src={t.image}
                          alt={t.name}
                          sx={{
                            width: 44,
                            height: 44,
                            border: '2px solid #5B52E2',
                          }}
                        />
                        <Box sx={{ minWidth: 0 }}>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: '0.88rem',
                              color: '#1B1B2B',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {t.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '0.74rem',
                              color: 'primary.main',
                              fontWeight: 600,
                            }}
                          >
                            {t.role}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>

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
                      `Hola, me gustaría agendar una cita para el servicio de "${selectedService.title}" en Amoverte.`
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

export default Services;