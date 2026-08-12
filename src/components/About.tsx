import { useState } from 'react';
import {Box, Typography, Button, Dialog, DialogTitle, DialogContent, IconButton, Grid,} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function About() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Box component="section" id="quienes-somos" sx={{ bgcolor: '#EFEEFC', py: { xs: 10, md: 15 } }}>
      <Grid
        container
        component="div"
        spacing={{ xs: 8, md: 10 }}
        sx={{ maxWidth: 1180, mx: 'auto', px: '8vw', alignItems: 'center' }}
        >

        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                aspectRatio: '4 / 4.6',
                borderRadius: 5,
                background: 'linear-gradient(160deg, #5B52E3 0%, #423AC4 100%)',
              }}
            />
            <Box
              sx={{
                position: { xs: 'static', md: 'absolute' },
                bottom: -30,
                left: 24,
                mt: { xs: 2, md: 0 },
                bgcolor: 'background.default',
                borderRadius: 3,
                px: 3,
                py: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                boxShadow: '0 20px 40px -18px rgba(43,37,112,0.3)',
                width: 'fit-content',
              }}
            >
              <Box sx={{ width: 38, height: 38, borderRadius: 2, bgcolor: 'secondary.main' }} />
              <Box>
                <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.3rem', fontWeight: 600 }}>
                  15+
                </Typography>
                <Typography sx={{ fontSize: '0.76rem', color: 'text.secondary' }}>
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
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'primary.dark',
              mb: 2,
            }}
          >
            Quiénes somos
          </Typography>

          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 3 }}>
            Fisioterapia que parte del diagnóstico, no de la plantilla.
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 2 }}>
            Amoverte nació en 2013 con una idea simple: ningún cuerpo se
            recupera igual que otro. Por eso cada tratamiento empieza con una
            evaluación funcional completa antes de definir un solo ejercicio.
          </Typography>

          <Button
            onClick={handleOpen}
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{ borderRadius: 999, textTransform: 'none', fontWeight: 600, mt: 1 }}
          >
            Conocer más
          </Button>
        </Grid>
      </Grid>

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
            Con los años, el equipo creció hasta cubrir cuatro
            especialidades — deportiva, traumatológica, neurológica y
            pediátrica — sin perder ese enfoque inicial: escuchar primero,
            tratar después.
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