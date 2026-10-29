"use client";

import { useState } from "react";
import { livingSystems } from "@/data/ecosystem";
import { StatusPill } from "@/components/ui/StatusPill";

const positions = [
  { id: "energy", x: 50, y: 14 },
  { id: "water", x: 82, y: 38 },
  { id: "waste", x: 72, y: 78 },
  { id: "nature", x: 28, y: 78 },
  { id: "food", x: 18, y: 38 },
  { id: "human", x: 50, y: 50 },
];

export function EcosystemMap({ deepLink = false }: { deepLink?: boolean }) {
  const [active, setActive] = useState(livingSystems[0].id);
  const system = livingSystems.find((item) => item.id === active) ?? livingSystems[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <div className="relative mx-auto w-full max-w-[560px]">
        <svg viewBox="0 0 100 100" className="h-auto w-full" role="img" aria-label="Six interconnected living systems">
          <circle cx="50" cy="50" r="36" fill="none" stroke="#c5a059" strokeWidth="0.25" />
          <circle cx="50" cy="50" r="22" fill="none" stroke="#2c3e35" strokeWidth="0.2" opacity="0.4" />
          {positions.map((from, i) => {
            const to = positions[(i + 1) % positions.length];
            return (
              <line
                key={from.id + to.id}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={from.id === active || to.id === active ? "#c5a059" : "#2c3e35"}
                strokeOpacity={from.id === active || to.id === active ? 0.7 : 0.18}
                strokeWidth="0.35"
              />
            );
          })}
          {positions.map((node) => {
            const item = livingSystems.find((s) => s.id === node.id)!;
            const selected = item.id === active;
            return (
              <g key={item.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={selected ? 7.2 : 6}
                  fill={selected ? "#152b23" : "#f7f4ed"}
                  stroke={selected ? "#c5a059" : "#2c3e35"}
                  strokeWidth="0.4"
                  className="cursor-pointer"
                  onClick={() => setActive(item.id)}
                />
                <text
                  x={node.x}
                  y={node.y + 1.2}
                  textAnchor="middle"
                  fontSize="3.2"
                  fill={selected ? "#f7f4ed" : "#152b23"}
                  className="pointer-events-none"
                >
                  {item.index}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {livingSystems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`border px-3 py-2 text-[11px] ${item.id === active ? "border-pine bg-pine text-ivory" : "border-pine/20"}`}
              onClick={() => setActive(item.id)}
              aria-pressed={item.id === active}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      <article className="border border-pine/10 bg-ivory p-7 md:p-10">
        <p className="kicker text-gold">System {system.index}</p>
        <h3 className="mt-3 font-serif text-4xl text-sage md:text-5xl">{system.title}</h3>
        <p className="mt-3 text-sm text-muted">{system.short}</p>
        <div className="mt-6">
          <StatusPill status={system.claim} />
        </div>
        <div className="mt-8 space-y-6 text-[14px] leading-7 text-ink">
          <section>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.16em] text-pine-soft">How life may feel</h4>
            <p className="mt-2">{system.feel}</p>
          </section>
          <section>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.16em] text-pine-soft">How the system could work</h4>
            <p className="mt-2">{system.work}</p>
          </section>
          <section>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.16em] text-pine-soft">Current project status</h4>
            <p className="mt-2">{system.status}</p>
          </section>
        </div>
        {deepLink ? (
          <p className="mt-8 text-[12px] text-basalt">
            These six systems are one philosophy. Early priorities from the October 2026 pre-feasibility study: passive design, solar, rainwater, wastewater reuse, waste processing and farmer partnerships.
          </p>
        ) : null}
      </article>
    </div>
  );
}
