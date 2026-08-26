"use client";

import Image from "next/image";
import { useState } from "react";
import { wiipoAssets } from "@/lib/wiipo-assets";

type Frame = "idle" | "peek" | "point" | "celebrate";

export function AssinaturaMascote({
  joined,
  hovered,
  pressed,
}: {
  joined: boolean;
  hovered: boolean;
  pressed?: boolean;
}) {
  const frame: Frame = joined
    ? "celebrate"
    : pressed
      ? "point"
      : hovered
        ? "peek"
        : "idle";
  const src = wiipoAssets.assinatura[frame];

  return (
    <Image
      key={src}
      src={src}
      alt=""
      width={220}
      height={260}
      unoptimized
      className="pointer-events-none h-28 w-auto object-contain drop-shadow-md md:h-32"
    />
  );
}

export function AssinaturaDemo({
  label = "assinar",
}: {
  label?: string;
}) {
  const [joined, setJoined] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <AssinaturaMascote joined={joined} hovered={hovered} pressed={pressed} />
      <button
        type="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setPressed(false);
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onClick={() => setJoined((value) => !value)}
        className="rounded-[21px] bg-[#2D2B30] px-8 py-3 font-sans text-sm font-medium text-white hover:bg-[#171717]"
      >
        {joined ? "você está no clube →" : `${label} →`}
      </button>
    </div>
  );
}

export function CriarComunidadeDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <Image
        src={
          open
            ? wiipoAssets.assinatura.createPresent
            : wiipoAssets.assinatura.createWave
        }
        alt=""
        width={220}
        height={260}
        unoptimized
        className="h-28 w-auto object-contain drop-shadow-md md:h-32"
      />
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-[21px] bg-[#2D2B30] px-8 py-3 font-sans text-sm font-medium text-white hover:bg-[#171717]"
      >
        {open ? "comunidade criada →" : "criar comunidade →"}
      </button>
    </div>
  );
}
