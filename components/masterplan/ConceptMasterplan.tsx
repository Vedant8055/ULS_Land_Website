"use client";

import { useState } from "react";
import { masterplanZones } from "@/data/ecosystem";

const pins = [
  { id: "civic", x: 18, y: 42 },
  { id: "quiet", x: 28, y: 22 },
  { id: "greenblue", x: 52, y: 30 },
  { id: "residential", x: 70, y: 48 },
  { id: "sports", x: 38, y: 70 },
  { id: "utilities", x: 84, y: 72 },
] as const;

export function ConceptMasterplan() {
  const [active, setActive] = useState<(typeof pins)[number]["id"]>("residential");
  const zone = masterplanZones.find((item) => item.id === active)!;

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <div className="relative overflow-hidden border border-pine/10 bg-[#d7d3c4]">
        <svg viewBox="0 0 100 72" className="h-auto w-full" role="img" aria-label="Illustrative concept masterplan, not a survey">
          <rect width="100" height="72" fill="#cfc8b4" />
          <path d="M0 18 C 22 10, 40 14, 58 8 C 74 4, 90 10, 100 6 L 100 0 L 0 0 Z" fill="#9aa88c" />
          <path d="M0 72 C 16 60, 30 64, 48 58 C 70 50, 86 62, 100 54 L 100 72 Z" fill="#8f9d7b" />
          <path d="M8 40 C 24 34, 32 46, 48 40 C 64 34, 70 48, 88 44" fill="none" stroke="#6d7e6a" strokeWidth="1.2" />
          <rect x="8" y="32" width="18" height="16" fill="#e8e2d2" opacity="0.9" />
          <rect x="20" y="14" width="16" height="14" fill="#efe6d4" />
          <rect x="58" y="36" width="26" height="20" fill="#e4dcc8" />
          <rect x="28" y="58" width="22" height="10" fill="#d9cfc0" />
          <rect x="78" y="62" width="16" height="8" fill="#c4b8a4" />
          <text x="4" y="8" fontSize="3.1" fill="#3d312a">CONCEPT ONLY · NOT A CADASTRAL SURVEY</text>
          {pins.map((pin) => {
            const selected = pin.id === active;
            return (
              <g key={pin.id} className="cursor-pointer" onClick={() => setActive(pin.id)}>
                <circle cx={pin.x} cy={pin.y} r={selected ? 3.4 : 2.6} fill={selected ? "#152b23" : "#f7f4ed"} stroke="#c5a059" strokeWidth="0.45" />
                <text x={pin.x} y={pin.y + 1} textAnchor="middle" fontSize="2.2" fill={selected ? "#f7f4ed" : "#152b23"}>
                  {masterplanZones.find((z) => z.id === pin.id)?.letter}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Masterplan zones">
          {masterplanZones.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={item.id === active}
              className={`border px-3 py-2 text-[11px] ${item.id === active ? "border-pine bg-pine text-ivory" : "border-pine/20"}`}
              onClick={() => setActive(item.id)}
            >
              {item.letter}. {item.title}
            </button>
          ))}
        </div>
        <article className="mt-6 border-l-2 border-gold bg-ivory px-6 py-6">
          <p className="kicker text-gold">Zone {zone.letter}</p>
          <h3 className="mt-3 font-serif text-4xl text-sage">{zone.title}</h3>
          <p className="mt-4 text-[15px] leading-8 text-muted">{zone.summary}</p>
          <p className="mt-5 text-[12px] leading-6 text-basalt">{zone.status}</p>
        </article>
        <p className="mt-6 text-[12px] leading-6 text-basalt">
          Public edge, semi-public civic centre and private residential core are kept conceptually separate. No scale, boundary, plot number, legal approval or precise layout is implied. A helipad is intentionally omitted — aviation feasibility has not been established.
        </p>
      </div>
    </div>
  );
}
