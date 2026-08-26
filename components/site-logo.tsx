import Image from "next/image";
import { wiipoAssets } from "@/lib/wiipo-assets";

export function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={wiipoAssets.logo.lockup}
      alt="wiip.club"
      width={180}
      height={55}
      priority
      unoptimized
      className={`h-8 w-auto md:h-9 ${className}`}
    />
  );
}
