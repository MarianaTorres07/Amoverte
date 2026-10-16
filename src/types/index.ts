export interface ServiceTherapist {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  summary: string;
  details: string;
  gradient: string;
  image: string;
  imagePosition?: string;
  category: string;
  benefits?: string[];
  therapists: ServiceTherapist[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  bio?: string;
  specialties?: string[];
  locations?: string[];
}

export interface LocationStaff {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface LocationItem {
  id: string;
  name: string;
  tagline: string;
  address: string;
  mapsUrl: string;
  mapEmbedUrl: string;
  photo: string;
  phone: string;
  phoneRaw: string;
  instagram: string;
  instagramUrl: string;
  staff: LocationStaff[];
}

export interface ContactFormData {
  nombre: string;
  telefono: string;
  email: string;
  motivo: string;
  mensaje: string;
}