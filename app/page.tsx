import Image from "next/image";
import { CoverProfile } from "@/components/cover-profile";
import { SiteHeader } from "@/components/site-header";
import { SubscribeButton } from "@/components/subscribe-button";
import { wiipoAssets } from "@/lib/wiipo-assets";

const uiSprites = [
  { src: wiipoAssets.ui.idle, label: "idle" },
  { src: wiipoAssets.ui.peek, label: "hover / peek" },
  { src: wiipoAssets.ui.wave, label: "wave" },
  { src: wiipoAssets.ui.point, label: "point" },
  { src: wiipoAssets.ui.celebrate, label: "celebrate" },
] as const;

export default function Home() {
  return (
    <div className="bg-[#F8F7F5]">
      <SiteHeader active="/" />

      <main className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-4 py-10 lg:grid-cols-3">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <CoverProfile />
          <div className="flex flex-col gap-4 font-mono text-base leading-relaxed text-[#454547]">
            <p>
              Sua carreira não precisa ser construída sozinho. O Wiip Club é a
              comunidade para quem trabalha em público: primeiro emprego,
              estágio, nova vaga, transição — ou simplesmente evoluir.
            </p>
            <p className="whitespace-pre-line">
              Troque experiências, receba feedback, compartilhe o que está
              construindo e evolua junto.
              {"\n\n"}
              Work in public.
            </p>
          </div>
        </div>

        <aside className="overflow-hidden rounded-[21px] border border-[#D4D4D4] bg-white lg:sticky lg:top-24">
          <div className="relative h-40 bg-[#F8F7F5]">
            <Image
              src={wiipoAssets.capa.hero}
              alt=""
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
          <div className="flex flex-col gap-5 p-6">
            <div className="flex items-start gap-3">
              <Image
                src={wiipoAssets.perfil.avatar}
                alt="Perfil Wiipo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-[12px] border border-[#E5E5E5] object-cover"
              />
              <div>
                <h2 className="font-mono text-xl font-bold text-[#2D2B30]">
                  Wiip Club
                </h2>
                <p className="font-mono text-sm text-[#737373]">biip.club</p>
              </div>
            </div>
            <SubscribeButton />
            <p className="text-center font-mono text-xs text-[#A3A3A3]">
              passe o mouse no botão — o Wiipo aparece
            </p>
          </div>
        </aside>
      </main>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="mb-4 font-mono text-lg font-bold text-[#2D2B30]">
          Assets do Wiipo
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {uiSprites.map((sprite) => (
            <figure
              key={sprite.src}
              className="overflow-hidden rounded-[21px] border border-[#D4D4D4] bg-white p-3"
            >
              <Image
                src={sprite.src}
                alt={sprite.label}
                width={240}
                height={240}
                className="mx-auto h-28 w-28 object-contain"
              />
              <figcaption className="mt-2 text-center font-mono text-xs text-[#737373]">
                {sprite.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
