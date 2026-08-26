"use client";

import Image from "next/image";
import { useState } from "react";
import { communityIconConcepts } from "@/lib/wiipo-assets";

export function IconConcepts() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const dark = theme === "dark";

  return (
    <div
      className={`min-h-full transition-colors ${
        dark ? "bg-[#161514] text-[#F4F2EF]" : "bg-[#F8F7F5] text-[#2D2B30]"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h1 className="font-sans text-2xl font-bold tracking-tight">
              Ícones da comunidade
            </h1>
            <p
              className={`mt-2 font-sans text-sm leading-relaxed ${
                dark ? "text-[#B4B0AA]" : "text-[#737373]"
              }`}
            >
              O personagem é PNG transparente. O fundo do tile muda com o tema
              — cream no light, carvão no dark — em vez de ir assado na arte.
            </p>
          </div>
          <div
            className={`inline-flex rounded-full p-1 ${
              dark ? "bg-[#2A2826]" : "bg-white"
            }`}
          >
            {(["light", "dark"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setTheme(value)}
                className={`rounded-full px-4 py-1.5 font-sans text-sm ${
                  theme === value
                    ? dark
                      ? "bg-[#F4F2EF] text-[#161514]"
                      : "bg-[#2D2B30] text-white"
                    : dark
                      ? "text-[#B4B0AA]"
                      : "text-[#737373]"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {communityIconConcepts.map((icon) => (
            <figure key={icon.id} className="flex flex-col gap-3">
              <div
                className={`aspect-square overflow-hidden rounded-[28%] ${
                  dark ? "bg-[#2A2826]" : "bg-[#EFEDE8]"
                }`}
              >
                <Image
                  src={icon.src}
                  alt={icon.title}
                  width={640}
                  height={640}
                  unoptimized
                  className="h-full w-full object-contain p-3"
                />
              </div>
              <figcaption>
                <p className="font-sans text-sm font-semibold">{icon.title}</p>
                <p
                  className={`mt-0.5 font-sans text-xs leading-relaxed ${
                    dark ? "text-[#B4B0AA]" : "text-[#737373]"
                  }`}
                >
                  {icon.note}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
