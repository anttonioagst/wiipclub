import { CoverProfile } from "@/components/cover-profile";
import { SiteHeader } from "@/components/site-header";
import { infoSlides } from "@/lib/wiipo-assets";

export default function InfoPage() {
  return (
    <div className="bg-[#F8F7F5]">
      <SiteHeader active="/info" />
      <main className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-10">
        <CoverProfile slides={infoSlides} />
        <div className="flex flex-col gap-4 font-mono text-base leading-relaxed text-[#454547]">
          <p>
            O Wiip Club é a comunidade para quem trabalha em público: primeiro
            emprego, estágio, nova vaga, transição — ou simplesmente evoluir.
          </p>
          <p>
            Comece pelo básico, peça feedback de currículo e LinkedIn,
            acompanhe vagas reais, compartilhe o que está construindo e
            celebre as conquistas junto.
          </p>
          <p>Work in public.</p>
        </div>
      </main>
    </div>
  );
}
