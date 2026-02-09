"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-white/55 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-b from-stone-950 to-stone-700 font-bold text-white shadow-sm">
            AB
            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-amber-400 ring-2 ring-white/80" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">AB WebWorks</p>
            <p className="text-xs text-stone-600">Modern & professional websites</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 text-sm sm:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  active
                    ? "rounded-full bg-stone-950 px-3 py-1.5 font-semibold text-white shadow-sm"
                    : "rounded-full px-3 py-1.5 font-semibold text-stone-700 hover:bg-white/70 hover:text-stone-950"
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="sheen rounded-2xl bg-gradient-to-b from-stone-950 to-stone-800 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-stone-900/10 hover:brightness-110"
        >
          Get a quote
        </Link>
      </div>
    </header>
  );
}
