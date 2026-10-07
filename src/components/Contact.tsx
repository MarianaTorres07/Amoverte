import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Box, Typography, TextField, MenuItem, Button, Alert,} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import type { ContactFormData } from '../types';

const motivos = [
  'Fisioterapia deportiva',
  'Fisioterapia Ortopédica',
  'Readaptación',
  'Geriátrica',
  'Rehabilitación',
  'No estoy seguro/a',
];

const initialFormState: ContactFormData = {
  nombre: '',
  telefono: '',
  email: '',
  motivo: motivos[0],
  mensaje: '',
};

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;


    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    setSubmitted(true);
    setFormData(initialFormState); // reset the form
  };

  return (
    <Box component="section" id="contacto" sx={{ bgcolor: 'primary.light', py: { xs: 6, md: 12 }, width: '100%', scrollMarginTop: { xs: '70px', md: '90px' } }}>
      <Box
        sx={{
          maxWidth: 1440,
          mx: 'auto',
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
          gap: { xs: 3.5, md: 7 },
        }}
      >
        {/* ---------- LEFT: info panel ---------- */}
        <Box
          sx={{
            borderRadius: '12px',
            background: 'linear-gradient(165deg, #2B2570 0%, #5B52E3 100%)',
            p: { xs: 3, sm: 4, md: 5 },
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'secondary.main',
              fontWeight: 700,
              mb: 1.5,
            }}
          >
            Contacto
          </Typography>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 700, color: '#fff', mb: 1.5 }}>
            Coordinemos tu primera evaluación
          </Typography>
          <Typography sx={{ color: '#DEDCF7', fontSize: '0.95rem', mb: 3.5, maxWidth: '36ch', lineHeight: 1.6 }}>
            Respondemos dentro de las 24 hs hábiles para agendar tu consulta.
          </Typography>

          <Box sx={{ display: 'grid', gap: 2.5, flexGrow: 1 }}>
            {[
              { icon: <LocationOnIcon sx={{ color: 'secondary.main' }} />, title: '3 Sucursales en Mérida', sub: 'Cordemex, La Florida y Las Américas' },
              { icon: <PhoneIcon sx={{ color: 'secondary.main' }} />, title: '+52 951 262 8921', sub: 'Atención personalizada y citas' },
              { icon: <EmailIcon sx={{ color: 'secondary.main' }} />, title: '@amoverte.mx', sub: 'Instagram y redes sociales' },
            ].map((item) => (
              <Box key={item.title} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.12)', borderRadius: '8px', p: 1, display: 'flex' }}>
                  {item.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.94rem' }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: '0.86rem', color: '#C9C6F2' }}>{item.sub}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ---------- RIGHT: the form ---------- */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'rgba(0,0,0,0.08)',
            borderRadius: '12px',
            p: { xs: 3, sm: 4, md: 5 },
            display: 'grid',
            gap: 2.5,
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        >
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
            <TextField
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            select
            label="Motivo de consulta"
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            fullWidth
          >
            {motivos.map((motivo) => (
              <MenuItem key={motivo} value={motivo}>
                {motivo}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Contanos qué te pasa"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: { xs: '100%', sm: 'auto' },
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 700,
              justifySelf: 'start',
              px: 4,
              py: 1.4,
              fontSize: '0.94rem',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            Enviar solicitud
          </Button>

          {submitted && (
            <Alert severity="success" onClose={() => setSubmitted(false)} sx={{ borderRadius: '8px' }}>
              Solicitud recibida. Te contactamos dentro de las 24 hs hábiles.
            </Alert>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;