import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import {
  officialStickers,
  outfitStickers,
  wiipoAssets,
} from "@/lib/wiipo-assets";

const logos = [
  { src: wiipoAssets.logo.mark, label: "mark", w: 160, h: 160 },
  { src: wiipoAssets.logo.wordmark, label: "wordmark", w: 280, h: 66 },
  { src: wiipoAssets.logo.lockup, label: "lockup", w: 280, h: 85 },
  { src: wiipoAssets.logo.rosto3d, label: "rosto 3D", w: 140, h: 168 },
] as const;

const demoCards = [
  {
    src: wiipoAssets.stickers.oficialWave,
    title: "Bem-vindo",
    text: "O Wiipo oficial, de chapéu.",
  },
  {
    src: wiipoAssets.stickers.oculos,
    title: "Estudo",
    text: "Colega de óculos, pra cards de aula.",
  },
  {
    src: wiipoAssets.stickers.coroa,
    title: "Conquista",
    text: "Versão com coroa, pra milestone.",
  },
] as const;

export default function AssetsPage() {
  return (
    <div className="bg-[#F8F7F5]">
      <SiteHeader active="/assets" />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10">
        <section>
          <h1 className="font-sans text-2xl font-bold tracking-tight text-[#2D2B30]">
            Logo
          </h1>
          <p className="mt-2 max-w-2xl font-sans text-sm text-[#737373]">
            O mark é o mesmo ícone do lockup, recortado: squircle com o
            rosto do Wiipo. O nome no produto continua Geist Pixel.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {logos.map((logo) => (
              <figure
                key={logo.src}
                className="flex flex-col items-center justify-center rounded-[21px] border border-[#D4D4D4] bg-white p-5"
              >
                <Image
                  src={logo.src}
                  alt={logo.label}
                  width={logo.w}
                  height={logo.h}
                  unoptimized
                  className="h-20 w-auto object-contain"
                />
                <figcaption className="mt-3 font-sans text-xs text-[#737373]">
                  {logo.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-sans text-xl font-bold text-[#2D2B30]">
            Wiipo oficial
          </h2>
          <p className="mt-1 font-sans text-sm text-[#737373]">
            Só este usa o chapéu. Posturas simples pra cards e UI.
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {officialStickers.map((sticker) => (
              <figure
                key={sticker.src}
                className="rounded-[21px] border border-[#D4D4D4] bg-white p-3"
              >
                <Image
                  src={sticker.src}
                  alt={sticker.label}
                  width={200}
                  height={260}
                  unoptimized
                  className="mx-auto h-28 w-auto object-contain"
                />
                <figcaption className="mt-2 text-center font-sans text-xs text-[#737373]">
                  {sticker.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-sans text-xl font-bold text-[#2D2B30]">
            Roupas
          </h2>
          <p className="mt-1 font-sans text-sm text-[#737373]">
            Colegas com roupa diferente — sem o chapéu do mascote.
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {outfitStickers.map((sticker) => (
              <figure
                key={sticker.src}
                className="rounded-[21px] border border-[#D4D4D4] bg-white p-3"
              >
                <Image
                  src={sticker.src}
                  alt={sticker.label}
                  width={200}
                  height={260}
                  unoptimized
                  className="mx-auto h-28 w-auto object-contain"
                />
                <figcaption className="mt-2 text-center font-sans text-xs text-[#737373]">
                  {sticker.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="pb-8">
          <h2 className="font-sans text-xl font-bold text-[#2D2B30]">
            Em cards
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {demoCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[21px] border border-[#D4D4D4] bg-white p-5"
              >
                <Image
                  src={card.src}
                  alt=""
                  width={180}
                  height={220}
                  unoptimized
                  className="mx-auto h-32 w-auto object-contain"
                />
                <h3 className="mt-4 font-sans text-base font-bold text-[#2D2B30]">
                  {card.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-[#737373]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
