import Image from "next/image";
import Link from "next/link";
import { wiipoAssets } from "@/lib/wiipo-assets";

const nav = [
  { href: "/", label: "comunidade" },
  { href: "/info", label: "info" },
  { href: "/classroom", label: "classroom" },
] as const;

export function SiteHeader({ active }: { active: (typeof nav)[number]["href"] }) {
  return (
    <header className="sticky top-0 z-10 border-b border-[#D4D4D4] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={wiipoAssets.perfil.avatar}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg object-cover"
          />
          <span className="font-mono text-base text-[#2D2B30] md:text-lg">
            wiip.club
          </span>
        </Link>
        <nav className="flex items-center gap-1" aria-label="seções">
          {nav.map((item) => {
            const isActive = item.href === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 font-mono text-sm ${
                  isActive
                    ? "bg-[#2D2B30] text-white"
                    : "text-[#737373] hover:bg-[#F0EFEC] hover:text-[#2D2B30]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
