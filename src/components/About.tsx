import { useState } from 'react';
import {Box, Typography, Button, Dialog, DialogTitle, DialogContent, IconButton, Grid,} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function About() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Box component="section" id="quienes-somos" sx={{ bgcolor: '#EFEEFC', py: { xs: 8, md: 14 }, width: '100%' }}>
      <Box sx={{ maxWidth: 1440, mx: 'auto', px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          sx={{ alignItems: 'center' }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  aspectRatio: '4 / 4.2',
                  borderRadius: 2,
                  background: 'linear-gradient(160deg, #5B52E3 0%, #423AC4 100%)',
                }}
              />
              <Box
                sx={{
                  position: { xs: 'static', md: 'absolute' },
                  bottom: -24,
                  left: 24,
                  mt: { xs: 2, md: 0 },
                  bgcolor: '#FFFFFF',
                  borderRadius: 1.5,
                  px: 3,
                  py: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  boxShadow: '0 16px 36px -10px rgba(43,37,112,0.22)',
                  width: 'fit-content',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <Box sx={{ width: 38, height: 38, borderRadius: 1, bgcolor: 'secondary.main' }} />
                <Box>
                  <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: '#1B1B2B' }}>
                    15+
                  </Typography>
                  <Typography sx={{ fontSize: '0.76rem', color: 'text.secondary', fontWeight: 500 }}>
                    años de experiencia
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
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
              Quiénes somos
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.3rem', md: '2.8rem' },
                fontWeight: 700,
                letterSpacing: '-0.02em',
                mb: 2.5,
                color: '#1B1B2B',
              }}
            >
              Fisioterapia que parte del diagnóstico, no de la plantilla.
            </Typography>

            <Typography sx={{ color: 'text.secondary', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.6, mb: 3 }}>
              Amoverte nació en 2013 con una idea simple: ningún cuerpo se
              recupera igual que otro. Por eso cada tratamiento empieza con una
              evaluación funcional completa antes de definir un solo ejercicio.
            </Typography>

            <Button
              onClick={handleOpen}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: 1,
                textTransform: 'none',
                fontWeight: 600,
                px: 3.5,
                py: 1.2,
                fontSize: '0.92rem',
              }}
            >
              Conocer más
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* ---------- MODAL ---------- */}
      <Dialog
        open={modalOpen}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Nuestra historia
          <IconButton onClick={handleClose} aria-label="Cerrar">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Typography sx={{ color: 'text.secondary', mb: 2 }}>
            Todo empezó en un consultorio de dos ambientes, con una camilla y
            una convicción: la rehabilitación real no se resuelve con
            rutinas de manual, sino con seguimiento cercano y ajustes
            constantes según cómo responde cada paciente.
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 2 }}>
            Con los años, el equipo creció hasta reunir a especialistas en
            fisioterapia deportiva, geriátrica, articulación de mano y miembro
            superior, y articulación temporomandibular (ATM), sin perder ese
            enfoque inicial: escuchar primero, tratar después.
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Hoy seguimos midiendo el progreso igual que el primer día: no en
            sesiones completadas, sino en lo que cada paciente puede volver
            a hacer.
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default About;