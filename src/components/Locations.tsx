import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  Avatar,
  AvatarGroup,
  Collapse,
  IconButton,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LaunchIcon from '@mui/icons-material/Launch';
import GroupsIcon from '@mui/icons-material/Groups';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MapIcon from '@mui/icons-material/Map';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import type { LocationItem } from '../types';

import diegoImg from '../assets/photosEquipo/Diego Canul.jpeg';
import cesarImg from '../assets/photosEquipo/Cesar Balam Avila.jpeg';
import dianaImg from '../assets/photosEquipo/Diana Basto Sanchez.jpeg';
import abelImg from '../assets/photosEquipo/Abel Ang Martin.jpeg';
import williamImg from '../assets/photosEquipo/William León Duran.jpeg';

import cordemexPhoto from '../assets/photosAmoverte/Tezza-8780.jpg';
import floridaPhoto from '../assets/photosAmoverte/Tezza-3868.jpg';
import americasPhoto from '../assets/photosAmoverte/Tezza-4934.jpg';

const locations: LocationItem[] = [
  {
    id: 'cordemex',
    name: 'Amoverte Cordemex',
    tagline: 'Fisioterapia y Rehabilitación Integral',
    address: 'C. 49 285, Cordemex, 97115 Mérida, Yuc.',
    mapsUrl: 'https://maps.app.goo.gl/VHat94DD8KDB6nB36',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=C.+49+285,+Cordemex,+97115+M%C3%A9rida,+Yuc.&t=&z=15&ie=UTF8&iwloc=&output=embed',
    photo: cordemexPhoto,
    phone: '+52 951 262 8921',
    phoneRaw: '+529512628921',
    instagram: '@amoverte.mx',
    instagramUrl:
      'https://www.instagram.com/amoverte.mx?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
    staff: [
      {
        id: 'diego',
        name: 'Diego Canul González',
        role: 'Fisioterapeuta Deportivo',
        image: diegoImg,
      },
      {
        id: 'diana',
        name: 'Diana Laura Basto Sanchez',
        role: 'Fisioterapeuta Geriátrica - Miembro Superior',
        image: dianaImg,
      },
      {
        id: 'william',
        name: 'William Alejandro León Durán',
        role: 'Fisioterapeuta Deportivo',
        image: williamImg,
      },
    ],
  },
  {
    id: 'la-florida',
    name: 'Amoverte La Florida',
    tagline: 'Fisioterapia y Rehabilitación Especializada',
    address: 'C 23A 193, La Florida, 97138 Mérida, Yuc.',
    mapsUrl: 'https://maps.app.goo.gl/wLdCjSZiuBcpyNsHA',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=C+23A+193,+La+Florida,+97138+M%C3%A9rida,+Yuc.&t=&z=15&ie=UTF8&iwloc=&output=embed',
    photo: floridaPhoto,
    phone: '+52 951 262 8921',
    phoneRaw: '+529512628921',
    instagram: '@amoverte.mx',
    instagramUrl:
      'https://www.instagram.com/amoverte.mx?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
    staff: [
      {
        id: 'cesar',
        name: 'Cesar Augusto Balam Avila',
        role: 'Fisioterapeuta Deportivo',
        image: cesarImg,
      },
      {
        id: 'abel',
        name: 'Abel Ang Martin',
        role: 'Fisioterapeuta Deportivo - ATM',
        image: abelImg,
      },
      {
        id: 'diana',
        name: 'Diana Laura Basto Sanchez',
        role: 'Fisioterapeuta Geriátrica - Miembro Superior',
        image: dianaImg,
      },
    ],
  },
  {
    id: 'las-americas',
    name: 'Amoverte Las Américas',
    tagline: 'Fisioterapia y Readaptación Funcional',
    address:
      'C. 55 1010-c-120 y 132, Fraccionamiento Las Américas, 97302 Mérida, Yuc.',
    mapsUrl: 'https://maps.app.goo.gl/9BEgaZencaScvzMER8',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=C.+55+1010-c-120+y+132,+Fraccionamiento+Las+Am%C3%A9ricas,+97302+M%C3%A9rida,+Yuc.&t=&z=15&ie=UTF8&iwloc=&output=embed',
    photo: americasPhoto,
    phone: '+52 951 262 8921',
    phoneRaw: '+529512628921',
    instagram: '@amoverte.mx',
    instagramUrl:
      'https://www.instagram.com/amoverte.mx?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
    staff: [
      {
        id: 'william',
        name: 'William Alejandro León Durán',
        role: 'Fisioterapeuta Deportivo',
        image: williamImg,
      },
      {
        id: 'diego',
        name: 'Diego Canul González',
        role: 'Fisioterapeuta Deportivo',
        image: diegoImg,
      },
      {
        id: 'abel',
        name: 'Abel Ang Martin',
        role: 'Fisioterapeuta Deportivo - ATM',
        image: abelImg,
      },
    ],
  },
];

function Locations() {
  const [activeStaffId, setActiveStaffId] = useState<string | null>(null);

  const [viewModes, setViewModes] = useState<Record<string, 'map' | 'photo'>>({
    cordemex: 'map',
    'la-florida': 'map',
    'las-americas': 'map',
  });

  const toggleStaff = (id: string) => {
    setActiveStaffId((prev) => (prev === id ? null : id));
  };

  const toggleViewMode = (id: string, mode: 'map' | 'photo') => {
    setViewModes((prev) => ({ ...prev, [id]: mode }));
  };

  const handleSelectStaff = (therapistName: string, locationName: string) => {
    window.dispatchEvent(
      new CustomEvent('select-service', {
        detail: `Cita en ${locationName} con ${therapistName}`,
      })
    );
    const contactSection = document.getElementById('contacto');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      id="ubicaciones"
      sx={{
        py: { xs: 8, md: 14 },
        bgcolor: '#FFFFFF',
        width: '100%',
        scrollMarginTop: { xs: '70px', md: '90px' },
      }}
    >
      <Box sx={{ maxWidth: 1440, mx: 'auto', px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
        {/* Header */}
        <Box
          sx={{
            maxWidth: 720,
            mb: { xs: 5, md: 7 },
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
            Nuestras Sucursales
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.85rem', sm: '2.3rem', md: '2.8rem' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
              mb: 2,
              color: '#1B1B2B',
              lineHeight: 1.15,
            }}
          >
            UBICACIONES
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.96rem', md: '1.06rem' },
              lineHeight: 1.6,
            }}
          >
            Contamos con 3 sedes equipadas en Mérida para brindarte atención
            cercana y personalizada. Consulta el croquis/mapa interactivo y el
            equipo de especialistas de cada sede.
          </Typography>
        </Box>

        {/* ========================================================
            3 Cards Layout ("x 3." from hand-drawn sketch):
            [Croquis / Map] -> [Dirección] -> [Click MAPS] -> [Personal x SEDE (Click)]
           ======================================================== */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: { xs: 3.5, md: 4 },
            alignItems: 'start',
          }}
        >
          {locations.map((loc) => {
            const isStaffOpen = activeStaffId === loc.id;
            const viewMode = viewModes[loc.id] || 'map';

            return (
              <Card
                key={loc.id}
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: '1.5px solid rgba(0,0,0,0.08)',
                  bgcolor: '#FAF9F6',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.04)',
                  transition:
                    'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 18px 36px rgba(91,82,226,0.14)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                {/* 1. TOP BOX: "Croquis" / Google Maps Embed (with photo toggle) */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 220, sm: 240 },
                    bgcolor: '#EAE8E3',
                    overflow: 'hidden',
                  }}
                >
                  {viewMode === 'map' ? (
                    <Box
                      component="iframe"
                      src={loc.mapEmbedUrl}
                      title={`Mapa de ${loc.name}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        border: 0,
                        display: 'block',
                      }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  ) : (
                    <Box
                      component="img"
                      src={loc.photo}
                      alt={`Instalaciones de ${loc.name}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 20%',
                        display: 'block',
                      }}
                    />
                  )}

                  {/* Top floating switch: Croquis vs Foto */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      bgcolor: 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: 2,
                      p: 0.4,
                      display: 'flex',
                      gap: 0.5,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    }}
                  >
                    <Button
                      size="small"
                      onClick={() => toggleViewMode(loc.id, 'map')}
                      startIcon={<MapIcon sx={{ fontSize: '0.9rem' }} />}
                      sx={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'none',
                        px: 1,
                        py: 0.4,
                        minWidth: 'auto',
                        borderRadius: 1.5,
                        bgcolor:
                          viewMode === 'map' ? 'primary.main' : 'transparent',
                        color: viewMode === 'map' ? '#FFFFFF' : '#1B1B2B',
                        '&:hover': {
                          bgcolor:
                            viewMode === 'map'
                              ? 'primary.dark'
                              : 'rgba(0,0,0,0.06)',
                        },
                      }}
                    >
                      Croquis
                    </Button>
                    <Button
                      size="small"
                      onClick={() => toggleViewMode(loc.id, 'photo')}
                      startIcon={<PhotoCameraIcon sx={{ fontSize: '0.9rem' }} />}
                      sx={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'none',
                        px: 1,
                        py: 0.4,
                        minWidth: 'auto',
                        borderRadius: 1.5,
                        bgcolor:
                          viewMode === 'photo' ? 'primary.main' : 'transparent',
                        color: viewMode === 'photo' ? '#FFFFFF' : '#1B1B2B',
                        '&:hover': {
                          bgcolor:
                            viewMode === 'photo'
                              ? 'primary.dark'
                              : 'rgba(0,0,0,0.06)',
                        },
                      }}
                    >
                      Sede
                    </Button>
                  </Box>
                </Box>

                {/* Card Main Content */}
                <CardContent
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1.2,
                    }}
                  >
                    <Chip
                      label="Mérida, Yuc."
                      size="small"
                      sx={{
                        borderRadius: 1,
                        bgcolor: '#EFEEFC',
                        color: 'primary.dark',
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.7rem',
                        fontWeight: 700,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: '0.78rem',
                        color: 'text.secondary',
                        fontWeight: 600,
                      }}
                    >
                      {loc.staff.length} especialistas
                    </Typography>
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '1.24rem', md: '1.32rem' },
                      color: '#1B1B2B',
                      fontFamily: "'Space Grotesk', sans-serif",
                      mb: 0.4,
                    }}
                  >
                    {loc.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'primary.main',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      mb: 2.5,
                    }}
                  >
                    {loc.tagline}
                  </Typography>

                  {/* 2. "-> Direccion" as annotated in the sketch */}
                  <Stack spacing={1.6} sx={{ mb: 2.5 }}>
                    <Box
                      sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}
                    >
                      <LocationOnIcon
                        sx={{ color: 'primary.main', fontSize: 20, mt: 0.2 }}
                      />
                      <Typography
                        sx={{
                          fontSize: '0.88rem',
                          color: '#2B2570',
                          lineHeight: 1.45,
                          fontWeight: 500,
                        }}
                      >
                        {loc.address}
                      </Typography>
                    </Box>

                    <Box
                      sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}
                    >
                      <PhoneIcon sx={{ color: 'primary.main', fontSize: 19 }} />
                      <Typography
                        component="a"
                        href={`tel:${loc.phoneRaw}`}
                        sx={{
                          fontSize: '0.86rem',
                          color: '#1B1B2B',
                          fontWeight: 600,
                          textDecoration: 'none',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        {loc.phone}
                      </Typography>
                    </Box>

                    <Box
                      sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}
                    >
                      <InstagramIcon
                        sx={{ color: 'primary.main', fontSize: 19 }}
                      />
                      <Typography
                        component="a"
                        href={loc.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          fontSize: '0.86rem',
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

                  {/* 3. "[ ] -> Click MAPS." as annotated in sketch */}
                  <Button
                    component="a"
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    endIcon={<LaunchIcon />}
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 700,
                      py: 1.2,
                      fontSize: '0.88rem',
                      bgcolor: 'primary.main',
                      color: '#FFFFFF',
                      boxShadow: '0 4px 12px rgba(91,82,226,0.22)',
                      mb: 2,
                      '&:hover': {
                        bgcolor: 'primary.dark',
                        boxShadow: '0 6px 16px rgba(91,82,226,0.32)',
                      },
                    }}
                  >
                    Cómo llegar (Google Maps)
                  </Button>

                  {/* 4. "Personal x SEDE. -> Click" as annotated in sketch */}
                  <Box
                    sx={{
                      borderTop: '1px solid rgba(0,0,0,0.08)',
                      pt: 2,
                    }}
                  >
                    <Box
                      onClick={() => toggleStaff(loc.id)}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 1.2,
                        borderRadius: 2,
                        bgcolor: isStaffOpen
                          ? 'rgba(91,82,226,0.1)'
                          : '#FFFFFF',
                        border: '1px solid',
                        borderColor: isStaffOpen
                          ? 'primary.main'
                          : 'rgba(0,0,0,0.08)',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          bgcolor: 'rgba(91,82,226,0.08)',
                          borderColor: 'primary.main',
                        },
                      }}
                    >
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <GroupsIcon
                          sx={{
                            color: isStaffOpen ? 'primary.main' : '#55566B',
                            fontSize: 20,
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: '0.86rem',
                            fontWeight: 700,
                            color: isStaffOpen ? 'primary.main' : '#1B1B2B',
                          }}
                        >
                          Personal de la Sede
                        </Typography>
                      </Box>

                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <AvatarGroup
                          max={3}
                          sx={{
                            '& .MuiAvatar-root': {
                              width: 26,
                              height: 26,
                              fontSize: '0.7rem',
                            },
                          }}
                        >
                          {loc.staff.map((s) => (
                            <Avatar key={s.id} alt={s.name} src={s.image} />
                          ))}
                        </AvatarGroup>

                        <IconButton
                          size="small"
                          sx={{
                            p: 0.3,
                            transform: isStaffOpen
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
                            transition: 'transform 0.25s ease',
                            color: isStaffOpen ? 'primary.main' : '#55566B',
                          }}
                        >
                          <ExpandMoreIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>

                    {/* Collapsible Staff List */}
                    <Collapse in={isStaffOpen}>
                      <Box
                        sx={{
                          mt: 1.5,
                          p: 1.5,
                          bgcolor: '#FFFFFF',
                          borderRadius: 2,
                          border: '1px solid rgba(0,0,0,0.06)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1.2,
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
                          }}
                        >
                          Fisioterapeutas asignados:
                        </Typography>

                        {loc.staff.map((staffMember) => (
                          <Box
                            key={staffMember.id}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: 1.5,
                              p: 1,
                              borderRadius: 1.5,
                              bgcolor: '#FAF9F6',
                              border: '1px solid rgba(0,0,0,0.04)',
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.2,
                                minWidth: 0,
                              }}
                            >
                              <Avatar
                                src={staffMember.image}
                                alt={staffMember.name}
                                sx={{
                                  width: 38,
                                  height: 38,
                                  border: '1.5px solid #5B52E2',
                                }}
                              />
                              <Box sx={{ minWidth: 0 }}>
                                <Typography
                                  sx={{
                                    fontWeight: 700,
                                    fontSize: '0.84rem',
                                    color: '#1B1B2B',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                  }}
                                >
                                  {staffMember.name}
                                </Typography>
                                <Typography
                                  sx={{
                                    fontSize: '0.72rem',
                                    color: 'primary.main',
                                    fontWeight: 600,
                                  }}
                                >
                                  {staffMember.role}
                                </Typography>
                              </Box>
                            </Box>

                            <Button
                              size="small"
                              onClick={() =>
                                handleSelectStaff(staffMember.name, loc.name)
                              }
                              startIcon={
                                <CalendarMonthIcon sx={{ fontSize: '0.82rem' }} />
                              }
                              sx={{
                                flexShrink: 0,
                                fontSize: '0.7rem',
                                textTransform: 'none',
                                fontWeight: 700,
                                px: 1,
                                py: 0.4,
                                bgcolor: 'rgba(91,82,226,0.1)',
                                color: 'primary.main',
                                borderRadius: 1.2,
                                '&:hover': {
                                  bgcolor: 'primary.main',
                                  color: '#FFFFFF',
                                },
                              }}
                            >
                              Agendar
                            </Button>
                          </Box>
                        ))}
                      </Box>
                    </Collapse>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Locations;
