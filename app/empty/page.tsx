import { AssinaturaDemo, CriarComunidadeDemo } from "@/components/assinatura-mascote";
import { EmptyState } from "@/components/empty-state";
import { SkoolCta, SkoolPricingDemo } from "@/components/skool-cta";
import { SiteHeader } from "@/components/site-header";
import { assinaturaFrames, emptyStates } from "@/lib/wiipo-assets";
import Image from "next/image";

export default function EmptyPage() {
  return (
    <div className="bg-[#F8F7F5]">
      <SiteHeader active="/empty" />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10">
        <section>
          <h1 className="font-sans text-2xl font-bold tracking-tight text-[#2D2B30]">
            Empty states
          </h1>
          <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-[#737373]">
            Só o mascote, PNG com alpha. O texto fica no HTML.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {emptyStates.map((item) => (
              <div
                key={item.id}
                className="rounded-[21px] border border-[#D4D4D4] bg-white"
              >
                <EmptyState src={item.src} title={item.title} text={item.text} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-sans text-xl font-bold text-[#2D2B30]">
            CTA no ritmo do Skool
          </h2>
          <p className="mt-1 max-w-2xl font-sans text-sm leading-relaxed text-[#737373]">
            O gato deita na borda do botão amarelo. O Wiipo faz o mesmo —
            recorte transparente, botão HTML.
          </p>
          <div className="mt-6">
            <SkoolPricingDemo />
          </div>
          <div className="mt-4 flex flex-col gap-6 rounded-[21px] border border-[#D4D4D4] bg-white px-6 py-8 md:flex-row md:justify-center">
            <SkoolCta label="criar comunidade" pose="loaf" />
            <SkoolCta label="criar comunidade" pose="perch" tone="ink" />
          </div>
        </section>

        <section>
          <h2 className="font-sans text-xl font-bold text-[#2D2B30]">
            Assinatura e criar comunidade
          </h2>
          <p className="mt-1 max-w-2xl font-sans text-sm leading-relaxed text-[#737373]">
            O botão é HTML. O Wiipo é recorte transparente — hover, press e
            sucesso trocam o frame.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center rounded-[21px] border border-[#D4D4D4] bg-white px-4 py-10">
              <p className="mb-6 font-sans text-xs tracking-wide text-[#737373] uppercase">
                assinar
              </p>
              <AssinaturaDemo />
            </div>
            <div className="flex flex-col items-center rounded-[21px] border border-[#D4D4D4] bg-white px-4 py-10">
              <p className="mb-6 font-sans text-xs tracking-wide text-[#737373] uppercase">
                criar comunidade
              </p>
              <CriarComunidadeDemo />
            </div>
          </div>
        </section>

        <section className="pb-8">
          <h2 className="font-sans text-xl font-bold text-[#2D2B30]">Frames</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {assinaturaFrames.map((frame) => (
              <figure
                key={frame.id}
                className="rounded-[21px] border border-[#D4D4D4] bg-white p-3"
              >
                <Image
                  src={frame.src}
                  alt={frame.title}
                  width={200}
                  height={240}
                  unoptimized
                  className="mx-auto h-28 w-auto object-contain"
                />
                <figcaption className="mt-2 text-center font-sans text-xs text-[#737373]">
                  {frame.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
