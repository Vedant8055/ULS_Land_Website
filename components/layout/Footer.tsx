import Link from "next/link";
import { navItems, project } from "@/data/project";

export function Footer() {
  return (
    <footer className="bg-pine text-[#d4ddd2]">
      <div className="mx-auto max-w-editorial px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center border border-gold font-serif text-[1.55rem] leading-none text-ivory">
                {project.monogram}
              </span>
              <span className="text-[10px] font-bold uppercase leading-tight tracking-[0.2em] text-ivory">
                {project.brand}
                <span className="mt-0.5 block text-[9px] font-medium tracking-[0.24em] text-[#bdcaba]">
                  {project.place}
                </span>
              </span>
            </div>
            <p className="mt-8 max-w-xl text-[13px] leading-8 text-[#adbcae]">
              {project.statusLong} Photography is genuine licensed stock used as
              editorial illustration. The bundled concept film is original
              artwork, not site footage. Amenities, systems and timelines remain
              subject to land, approvals, operators and feasibility.
            </p>
          </div>
          <div className="grid gap-3 text-[12px]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ivory">
                {item.label}
              </Link>
            ))}
            <Link href="/masterplan" className="hover:text-ivory">Concept masterplan</Link>
            <Link href="/private-concierge" className="hover:text-ivory">Private Concierge</Link>
            <Link href="/privacy" className="hover:text-ivory">Privacy</Link>
            <Link href="/terms" className="hover:text-ivory">Terms</Link>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] leading-6 text-[#a6b6a7] md:flex-row">
          <p>© {project.year} {project.brand} · {project.status}</p>
          <p>Operator, RERA and legal entity: {project.operator.legalName}.</p>
        </div>
      </div>
    </footer>
  );
}
