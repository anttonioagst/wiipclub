"use client";

import Image from "next/image";
import { useState } from "react";
import { coverSlides, wiipoAssets } from "@/lib/wiipo-assets";

export function CoverProfile() {
  const [active, setActive] = useState(0);
  const current = coverSlides[active];

  return (
    <section className="overflow-hidden rounded-[21px] border border-[#D4D4D4] bg-white">
      <div className="relative aspect-video w-full bg-[#F0EFEC]">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto p-4 md:grid md:grid-cols-3">
        {coverSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`ver ${slide.label}`}
            aria-current={index === active}
            onClick={() => setActive(index)}
            className={`relative aspect-video min-w-28 overflow-hidden rounded-[16px] border-2 transition-colors ${
              index === active
                ? "border-[#2D2B30]"
                : "border-transparent hover:border-[#D4D4D4]"
            }`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              className="object-cover"
              sizes="200px"
            />
          </button>
        ))}
      </div>
      <div className="flex items-start gap-4 border-t border-[#E5E5E5] p-6">
        <Image
          src={wiipoAssets.perfil.avatar}
          alt="Wiipo, mascote do Wiip Club"
          width={72}
          height={72}
          className="h-16 w-16 shrink-0 rounded-[12px] border border-[#E5E5E5] object-cover"
        />
        <div className="min-w-0">
          <h1 className="font-mono text-2xl font-bold text-[#2D2B30]">
            Wiip Club
          </h1>
          <p className="font-mono text-sm text-[#737373]">work in public</p>
        </div>
      </div>
    </section>
  );
}
