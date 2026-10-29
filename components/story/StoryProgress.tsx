"use client";

import { useEffect, useState } from "react";
import { chapters } from "@/data/project";

export function StoryProgress() {
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
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Story chapters"
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ol className="pointer-events-auto flex flex-col gap-3">
        {chapters.map((chapter) => {
          const current = active === chapter.id;
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                className="group flex items-center justify-end gap-3"
                aria-current={current ? "true" : undefined}
              >
                <span className={`text-[9px] uppercase tracking-[0.16em] transition-opacity ${current ? "opacity-100 text-gold" : "opacity-0 text-ivory group-hover:opacity-80"}`}>
                  {chapter.label}
                </span>
                <span className={`block h-px transition-all ${current ? "w-8 bg-gold" : "w-4 bg-current/40 group-hover:w-6"}`} />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
