export const wiipoAssets = {
  capa: {
    comeceAqui: "/wiipo/capa/comece-aqui.jpg",
    workInPublic: "/wiipo/capa/work-in-public.jpg",
    hero: "/wiipo/capa/hero.jpg",
    conquistas: "/wiipo/capa/conquistas.jpg",
    vagas: "/wiipo/capa/vagas.jpg",
    linkedin: "/wiipo/capa/linkedin.jpg",
  },
  perfil: {
    avatar: "/wiipo/perfil/avatar.jpg",
    avatarCream: "/wiipo/perfil/avatar-cream.jpg",
  },
  ui: {
    idle: "/wiipo/ui/idle.jpg",
    peek: "/wiipo/ui/peek.jpg",
    wave: "/wiipo/ui/wave.jpg",
    point: "/wiipo/ui/point.jpg",
    celebrate: "/wiipo/ui/celebrate.jpg",
  },
  modelo: {
    ficha: "/wiipo/modelo/ficha.jpg",
    turnaround: "/wiipo/modelo/turnaround.jpg",
  },
  classroom: {
    empty: "/wiipo/classroom/empty.png",
    emptySolo: "/wiipo/classroom/empty-solo.png",
  },
} as const;

export const coverSlides = [
  {
    src: wiipoAssets.capa.comeceAqui,
    alt: "Wiip Club — comece aqui",
    label: "Comece aqui",
  },
  {
    src: wiipoAssets.capa.workInPublic,
    alt: "Wiip Club — work in public",
    label: "Work in public",
  },
  {
    src: wiipoAssets.capa.hero,
    alt: "Wiip Club — hero",
    label: "Comunidade",
  },
] as const;

export const infoSlides = [
  {
    src: wiipoAssets.capa.comeceAqui,
    alt: "Wiip Club — comece aqui",
    label: "Comece aqui",
  },
  {
    src: wiipoAssets.capa.linkedin,
    alt: "Wiip Club — currículos e LinkedIn",
    label: "LinkedIn",
  },
  {
    src: wiipoAssets.capa.vagas,
    alt: "Wiip Club — vagas e oportunidades",
    label: "Vagas",
  },
  {
    src: wiipoAssets.capa.workInPublic,
    alt: "Wiip Club — work in public",
    label: "Work in public",
  },
  {
    src: wiipoAssets.capa.conquistas,
    alt: "Wiip Club — conquistas",
    label: "Conquistas",
  },
  {
    src: wiipoAssets.capa.hero,
    alt: "Wiip Club — comunidade",
    label: "Comunidade",
  },
] as const;

export type GallerySlide = {
  src: string;
  alt: string;
  label: string;
};
