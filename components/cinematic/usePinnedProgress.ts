"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-client";
import { clamp01 } from "@/lib/story-progress";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function usePinnedProgress(pinOnDesktop = true) {
  const trackRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const track = trackRef.current;
      const pin = pinRef.current;
      if (!track || !pin) return;

      const apply = (value: number) => setProgress(clamp01(value));

      if (reduced) {
        apply(0);
        return;
      }

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const trigger = ScrollTrigger.create({
          trigger: track,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
          pin: pinOnDesktop ? pin : false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => apply(self.progress),
        });
        return () => trigger.kill();
      });
      mm.add("(max-width: 1023px)", () => {
        const trigger = ScrollTrigger.create({
          trigger: track,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 0.45,
          invalidateOnRefresh: true,
          onUpdate: (self) => apply(self.progress),
        });
        return () => trigger.kill();
      });

      return () => mm.revert();
    },
    { scope: trackRef, dependencies: [reduced, pinOnDesktop] },
  );

  return { trackRef, pinRef, progress, reduced };
}
