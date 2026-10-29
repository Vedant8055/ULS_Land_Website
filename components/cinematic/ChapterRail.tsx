"use client";

import { useEffect, useState } from "react";
import { chapters } from "@/data/project";

export function ChapterRail() {
  const [active, setActive] = useState<string>(chapters[0].id);

  useEffect(() => {
    const nodes = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.08, 0.2, 0.4] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const current = chapters.find((item) => item.id === active) ?? chapters[0];

  return (
    <nav aria-label="Story chapters" className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <p className="mb-4 text-right text-[9px] uppercase tracking-[0.18em] text-gold">
        Chapter {current.short} / 08
      </p>
      <ol className="pointer-events-auto flex flex-col gap-3">
        {chapters.map((chapter) => {
          const on = active === chapter.id;
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                className="group flex items-center justify-end gap-3"
                aria-current={on ? "true" : undefined}
              >
                <span className={`text-[9px] uppercase tracking-[0.16em] transition-opacity ${on ? "opacity-100 text-gold" : "opacity-0 text-ivory group-hover:opacity-80"}`}>
                  {chapter.label}
                </span>
                <span className={`block h-px transition-all ${on ? "w-8 bg-gold" : "w-4 bg-current/40 group-hover:w-6"}`} />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
