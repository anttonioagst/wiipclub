import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { wiipoAssets } from "@/lib/wiipo-assets";

export default function ClassroomPage() {
  return (
    <div className="flex min-h-full flex-col bg-[#F8F7F5]">
      <SiteHeader active="/classroom" />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-16">
        <Image
          src={wiipoAssets.classroom.empty}
          alt=""
          width={1100}
          height={656}
          priority
          unoptimized
          className="h-auto w-full max-w-[560px] object-contain"
        />
        <h1 className="mt-8 text-center font-mono text-2xl font-bold text-[#2D2B30]">
          Ainda não tem curso
        </h1>
        <p className="mt-2 max-w-md text-center font-mono text-sm leading-relaxed text-[#737373]">
          Quando o primeiro curso do Wiip Club sair, ele aparece aqui.
        </p>
      </main>
    </div>
  );
}
