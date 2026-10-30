"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap-client";
import { ActArrival } from "./ActArrival";
import { ActDay, ActDayManual } from "./ActDay";
import { ActInvitation } from "./ActInvitation";
import { ActLivingSystems } from "./ActLivingSystems";
import { ActPhilosophy } from "./ActPhilosophy";
import { ActVilla } from "./ActVilla";
import { ActWorld } from "./ActWorld";
import { ChapterRail } from "./ChapterRail";
import { FinaleStudies } from "./finale/FinaleStudies";

export function HomeCinematic() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    const timer = window.setTimeout(refresh, 600);
    if (window.location.hash) {
      const node = document.querySelector(window.location.hash);
      node?.scrollIntoView({ block: "start" });
    }
    return () => {
      window.removeEventListener("resize", refresh);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <ChapterRail />
      <ActArrival />
      <ActPhilosophy />
      <ActLivingSystems />
      <ActDay />
      <ActDayManual />
      <ActVilla />
      <ActWorld />
      <ActInvitation />
      <FinaleStudies />
    </>
  );
}
