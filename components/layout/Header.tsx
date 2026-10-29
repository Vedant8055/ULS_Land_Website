"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navItems, project } from "@/data/project";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(pathname === "/");
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
    setOverDark(pathname === "/");
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setOverDark(false);
      return;
    }
    const onScroll = () => {
      const threshold = Math.max(window.innerHeight, 640) * 0.72;
      setOverDark(window.scrollY < threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const tone = overDark && !open
    ? "text-ivory border-white/15 bg-pine/25 backdrop-blur-md"
    : "text-ink border-pine/10 bg-linen-warm/95 backdrop-blur-md";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${tone}`}>
      <div className="mx-auto flex h-[4.6rem] w-full max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label={`${project.brand}, home`}>
          <span className={`grid h-9 w-9 place-items-center border font-serif text-[1.55rem] leading-none ${overDark && !open ? "border-gold text-ivory" : "border-gold text-sage"}`}>
            {project.monogram}
          </span>
          <span className="text-[10px] font-bold uppercase leading-tight tracking-[0.2em]">
            {project.brand}
            <span className={`mt-0.5 block text-[9px] font-medium tracking-[0.24em] ${overDark && !open ? "text-ivory/70" : "text-muted"}`}>
              {project.place}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 min-[980px]:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[11px] tracking-[0.08em] transition-colors hover:text-terracotta ${pathname === item.href ? "text-terracotta" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/private-concierge"
            className={`border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] ${overDark && !open ? "border-ivory/70 text-ivory" : "border-pine text-pine"}`}
          >
            Private Concierge
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center border min-[980px]:hidden ${overDark && !open ? "border-ivory/55 bg-pine/40" : "border-pine/25 bg-linen-warm"}`}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="relative block h-3 w-4">
            <span className={`absolute left-0 h-px w-4 transition ${overDark && !open ? "bg-ivory" : "bg-pine"} ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-px w-4 transition ${overDark && !open ? "bg-ivory" : "bg-pine"} ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-px w-4 transition ${overDark && !open ? "bg-ivory" : "bg-pine"} ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-pine/10 bg-linen-warm px-6 py-8 lg:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-5 text-ink">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-lg" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/masterplan" className="text-lg" onClick={() => setOpen(false)}>
              Masterplan
            </Link>
            <Link
              href="/private-concierge"
              className="mt-2 border border-pine px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.14em]"
              onClick={() => setOpen(false)}
            >
              Private Concierge
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
