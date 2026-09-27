"use client";

import Image from "next/image";
import { wiipoAssets } from "@/lib/wiipo-assets";

type Tone = "cream" | "ink";
type Pose = "loaf" | "loafSide" | "perch";

const poses = {
  loaf: wiipoAssets.assinatura.loaf,
  loafSide: wiipoAssets.assinatura.loafSide,
  perch: wiipoAssets.assinatura.perch,
} as const;

export function SkoolCta({
  label = "criar comunidade",
  tone = "cream",
  pose = "loaf",
  className = "",
}: {
  label?: string;
  tone?: Tone;
  pose?: Pose;
  className?: string;
}) {
  const cream = tone === "cream";
  const src = poses[pose];
  const loaf = pose !== "perch";

  return (
    <div className={`relative w-full max-w-md pt-14 ${className}`}>
      <Image
        src={src}
        alt=""
        width={loaf ? 360 : 180}
        height={loaf ? 160 : 200}
        unoptimized
        className={
          loaf
            ? "pointer-events-none absolute right-6 bottom-[calc(100%-22px)] z-20 h-16 w-auto origin-bottom object-contain drop-shadow-md md:h-[4.5rem]"
            : "pointer-events-none absolute right-4 bottom-[calc(100%-18px)] z-20 h-20 w-auto origin-bottom object-contain drop-shadow-md md:h-24"
        }
      />
      <button
        type="button"
        className={`relative z-10 w-full rounded-lg px-6 py-3.5 text-center font-sans text-sm font-bold tracking-wide uppercase ${
          cream
            ? "bg-[#F8D481] text-[#171717] hover:bg-[#F3C96A]"
            : "bg-[#2D2B30] text-white hover:bg-[#171717]"
        }`}
      >
        {label}
      </button>
    </div>
  );
}

export function SkoolPricingDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <article className="flex flex-col rounded-[21px] border border-[#D4D4D4] bg-white p-6">
        <p className="font-sans text-sm text-[#737373]">Hobby</p>
        <p className="mt-1 font-sans text-2xl font-bold text-[#2D2B30]">
          grátis
        </p>
        <button
          type="button"
          className="mt-8 w-full rounded-lg bg-[#F8D481] px-6 py-3.5 font-sans text-sm font-bold tracking-wide text-[#171717] uppercase"
        >
          começar
        </button>
      </article>
      <article className="flex flex-col rounded-[21px] border border-[#D4D4D4] bg-white p-6">
        <p className="font-sans text-sm text-[#737373]">Club</p>
        <p className="mt-1 font-sans text-2xl font-bold text-[#2D2B30]">
          work in public
        </p>
        <div className="mt-2">
          <SkoolCta label="criar comunidade" pose="loaf" />
        </div>
      </article>
    </div>
  );
}
