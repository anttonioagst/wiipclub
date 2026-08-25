export const wiipoAssets = {
  capa: {
    comeceAqui: "/wiipo/capa/comece-aqui.jpg",
    workInPublic: "/wiipo/capa/work-in-public.jpg",
    hero: "/wiipo/capa/hero.jpg",
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
