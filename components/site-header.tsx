import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";

const nav = [
  { href: "/", label: "comunidade" },
  { href: "/info", label: "info" },
  { href: "/classroom", label: "classroom" },
  { href: "/assets", label: "assets" },
  { href: "/icones", label: "ícones" },
] as const;

export function SiteHeader({ active }: { active: (typeof nav)[number]["href"] }) {
  return (
    <header className="sticky top-0 z-10 border-b border-[#D4D4D4] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4">
        <Link href="/" aria-label="wiip.club, início" className="shrink-0">
          <SiteLogo />
        </Link>
        <nav className="flex items-center gap-1" aria-label="seções">
          {nav.map((item) => {
            const isActive = item.href === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 font-sans text-sm ${
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
