"use client";

import Image from "next/image";
import { useState } from "react";
import { wiipoAssets } from "@/lib/wiipo-assets";

type SubscribeButtonProps = {
  label?: string;
};

export function SubscribeButton({ label = "assinar" }: SubscribeButtonProps) {
  const [joined, setJoined] = useState(false);

  return (
    <div className="group/subscribe relative isolate flex justify-center pt-16">
      <Image
        src={joined ? wiipoAssets.ui.celebrate : wiipoAssets.ui.peek}
        alt=""
        width={160}
        height={160}
        className={`pointer-events-none absolute -top-2 left-1/2 z-0 w-28 origin-bottom -translate-x-1/2 object-contain drop-shadow-md transition-all duration-300 ease-out ${
          joined
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-6 scale-90 opacity-0 group-hover/subscribe:translate-y-0 group-hover/subscribe:scale-100 group-hover/subscribe:opacity-100"
        }`}
      />
      <button
        type="button"
        onClick={() => setJoined((value) => !value)}
        className="relative z-10 rounded-[21px] bg-[#2D2B30] px-8 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-[#171717]"
      >
        {joined ? "você está no clube →" : `${label} →`}
      </button>
    </div>
  );
}
