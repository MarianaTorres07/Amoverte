import { Box, Typography } from '@mui/material';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  gradient: string;
}

const team: TeamMember[] = [
  {
    id: 'mariana',
    name: 'Mariana Pizarro',
    role: 'Fisioterapia deportiva',
    description: 'Lesiones de rodilla y readaptación al deporte de alto rendimiento.',
    gradient: 'linear-gradient(180deg, #5B52E3 0%, #423AC4 100%)',
  },
  {
    id: 'joaquin',
    name: 'Joaquín Correa',
    role: 'Traumatológica',
    description: 'Rehabilitación post-quirúrgica de hombro, cadera y columna.',
    gradient: 'linear-gradient(180deg, #1B1B2B 0%, #34324f 100%)',
  },
  {
    id: 'florencia',
    name: 'Florencia Sosa',
    role: 'Neurológica',
    description: 'Recuperación motora en ACV, Parkinson y lesiones medulares.',
    gradient: 'linear-gradient(180deg, #9FC71E 0%, #7fa617 100%)',
  },
  {
    id: 'rodrigo',
    name: 'Rodrigo Torres',
    role: 'Pediátrica',
    description: 'Retraso motor, torticolis congénita y desarrollo infantil.',
    gradient: 'linear-gradient(180deg, #423AC4 0%, #2B2570 100%)',
  },
];

function Team() {
  return (
    <Box component="section" id="equipo" sx={{ py: { xs: 10, md: 15 } }}>
      <Box sx={{ maxWidth: 1180, mx: 'auto', px: '8vw' }}>
        <Box sx={{ maxWidth: 640, mb: 7 }}>
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
            Equipo de trabajo
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
            Especialistas por área, no generalistas de todo.
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Cuatro kinesiólogos, cuatro campos de especialización. Te
            asignamos el perfil que corresponde a tu diagnóstico.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 3, md: 4 },
          }}
        >
          {team.map((member) => (
            <Box
              key={member.id}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 40px -20px rgba(66,58,196,0.25)',
                },
              }}
            >
              <Box
                sx={{
                  aspectRatio: '3 / 3.6',
                  background: member.gradient,
                }}
              />
              <Box sx={{ p: { xs: 2, md: 2.5 } }}>
                <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  {member.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'primary.dark',
                    mb: 1,
                    mt: 0.5,
                  }}
                >
                  {member.role}
                </Typography>
                <Typography sx={{ fontSize: '0.86rem', color: 'text.secondary' }}>
                  {member.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Team;