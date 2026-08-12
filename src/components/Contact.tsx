import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Box, Typography, TextField, MenuItem, Button, Alert,} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

interface ContactFormData {
  nombre: string;
  telefono: string;
  email: string;
  motivo: string;
  mensaje: string;
}

const motivos = [
  'Fisioterapia deportiva',
  'Traumatológica',
  'Neurológica',
  'Pediátrica',
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
    <Box component="section" id="contacto" sx={{ bgcolor: '#EFEEFC', py: { xs: 10, md: 15 } }}>
      <Box
        sx={{
          maxWidth: 1180,
          mx: 'auto',
          px: '8vw',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
          gap: { xs: 6, md: 8 },
        }}
      >
        {/* ---------- LEFT: info panel ---------- */}
        <Box
          sx={{
            borderRadius: 1,
            background: 'linear-gradient(165deg, #2B2570 0%, #5B52E3 100%)',
            p: { xs: 4, md: 5 },
            color: '#fff',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'secondary.main',
              mb: 1,
            }}
          >
            Contacto
          </Typography>
          <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#fff', mb: 1 }}>
            Coordinemos tu primera evaluación
          </Typography>
          <Typography sx={{ color: '#DEDCF7', fontSize: '0.94rem', mb: 4, maxWidth: '34ch' }}>
            Respondemos dentro de las 24 hs hábiles. También podés
            escribirnos directo por WhatsApp.
          </Typography>

          <Box sx={{ display: 'grid', gap: 3 }}>
            {[
              { icon: <LocationOnIcon sx={{ color: 'secondary.main' }} />, title: 'Av. Colón 1452, Local 3', sub: 'Córdoba Capital, Argentina' },
              { icon: <PhoneIcon sx={{ color: 'secondary.main' }} />, title: '+54 351 555-0182', sub: 'Lun a vie, 8:00–20:00' },
              { icon: <EmailIcon sx={{ color: 'secondary.main' }} />, title: 'hola@amoverte.com.ar', sub: 'Turnos, consultas y obras sociales' },
            ].map((item) => (
              <Box key={item.title} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.12)', borderRadius: 2, p: 1, display: 'flex' }}>
                  {item.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.92rem' }}>{item.title}</Typography>
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
            bgcolor: 'background.default',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            p: { xs: 3, md: 5 },
            display: 'grid',
            gap: 3,
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
            {/* select = turns a TextField into a dropdown —*/}
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
            sx={{ borderRadius: 999, textTransform: 'none', fontWeight: 600, justifySelf: 'start', px: 4 }}
          >
            Enviar solicitud
          </Button>

          {submitted && (
            <Alert severity="success" onClose={() => setSubmitted(false)}>
              Solicitud recibida. Te contactamos dentro de las 24 hs hábiles.
            </Alert>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;