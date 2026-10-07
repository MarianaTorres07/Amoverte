export interface Service {
  id: string;
  title: string;
  summary: string;
  details: string;
  gradient: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface LocationItem {
  id: string;
  name: string;
  tagline: string;
  address: string;
  mapsUrl: string;
  phone: string;
  phoneRaw: string;
  instagram: string;
  instagramUrl: string;
}

export interface ContactFormData {
  nombre: string;
  telefono: string;
  email: string;
  motivo: string;
  mensaje: string;
}