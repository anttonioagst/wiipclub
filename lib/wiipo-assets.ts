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
  logo: {
    mark: "/wiipo/logo/mark.png",
    wordmark: "/wiipo/logo/wordmark.png",
    lockup: "/wiipo/logo/lockup.png",
    lockupFlat: "/wiipo/logo/lockup-flat.png",
    rosto3d: "/wiipo/logo/rosto-3d.png",
  },
  stickers: {
    oficialIdle: "/wiipo/stickers/oficial-idle.png",
    oficialWave: "/wiipo/stickers/oficial-wave.png",
    oficialThink: "/wiipo/stickers/oficial-think.png",
    oficialPeek: "/wiipo/stickers/oficial-peek.png",
    oficialSit: "/wiipo/stickers/oficial-sit.png",
    oficialPoint: "/wiipo/stickers/oficial-point.png",
    bone: "/wiipo/stickers/bone.png",
    oculos: "/wiipo/stickers/oculos.png",
    gorro: "/wiipo/stickers/gorro.png",
    fone: "/wiipo/stickers/fone.png",
    coroa: "/wiipo/stickers/coroa.png",
    cachecol: "/wiipo/stickers/cachecol.png",
  },
} as const;

export const officialStickers = [
  { src: wiipoAssets.stickers.oficialIdle, label: "idle" },
  { src: wiipoAssets.stickers.oficialWave, label: "wave" },
  { src: wiipoAssets.stickers.oficialThink, label: "think" },
  { src: wiipoAssets.stickers.oficialPeek, label: "peek" },
  { src: wiipoAssets.stickers.oficialSit, label: "sit" },
  { src: wiipoAssets.stickers.oficialPoint, label: "point" },
] as const;

export const outfitStickers = [
  { src: wiipoAssets.stickers.bone, label: "boné" },
  { src: wiipoAssets.stickers.oculos, label: "óculos" },
  { src: wiipoAssets.stickers.gorro, label: "gorro" },
  { src: wiipoAssets.stickers.fone, label: "fone" },
  { src: wiipoAssets.stickers.coroa, label: "coroa" },
  { src: wiipoAssets.stickers.cachecol, label: "cachecol" },
] as const;

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
