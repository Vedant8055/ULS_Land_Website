"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { ACESFilmicToneMapping } from "three";
import { Canvas } from "@react-three/fiber";
import { images, type ImageAsset } from "@/data/images";
import { clamp01 } from "@/lib/story-progress";
import { hasWebGL, prefersReducedData } from "@/lib/webgl";
import { SceneFallback } from "../SceneFallback";
import { usePrefersReducedMotion } from "../usePrefersReducedMotion";
import { CanopyWorld } from "./CanopyWorld";
import { HelipadWorld } from "./HelipadWorld";
import { LuxuryVillaWorld } from "./LuxuryVillaWorld";
import { PavilionWorld } from "./PavilionWorld";
import { TempleWorld } from "./TempleWorld";
import { WaterCourtWorld } from "./WaterCourtWorld";

type WorldProps = { progress: number; still: boolean };

const studies: Array<{
  id: string;
  index: string;
  title: string;
  body: string;
  clear: string;
  image: ImageAsset;
  World: ComponentType<WorldProps>;
  camera: [number, number, number];
  note?: string;
}> = [
  {
    id: "study-water",
    index: "Study 01",
    title: "Rain, held in stone.",
    body: "A monsoon court with a moving pool, wet steps and falling rain. An illustration of water kept close — not a measured tank, and not the Masrul site.",
    clear: "#b7c4be",
    image: images.monsoonFalls,
    World: WaterCourtWorld,
    camera: [12.5, 13.5, 14.5],
  },
  {
    id: "study-canopy",
    index: "Study 02",
    title: "Light under the canopy.",
    body: "A walk through planted shade. Shafts of afternoon light move across a stone path. A mood of native cover — not a tree survey.",
    clear: "#cbb892",
    image: images.forestCanopy,
    World: CanopyWorld,
    camera: [0.15, 1.35, 7.6],
  },
  {
    id: "study-pavilion",
    index: "Study 03",
    title: "Dusk in the court.",
    body: "Columns, a still pool and lanterns at the end of the day. A quieter architectural study than the massing model above — still not a villa for sale.",
    clear: "#1a1412",
    image: images.interiorCourtyard,
    World: PavilionWorld,
    camera: [13.5, 6.8, 14.5],
  },
  {
    id: "study-villa",
    index: "Study 04",
    title: "A mansion between the trees.",
    body: "A symmetrical mansion: columned entrance, hipped roofs, and garden trees to either side. An architectural mood — not an approved plan, a price, or a home for sale.",
    clear: "#f3eadc",
    image: images.interiorCourtyard,
    World: LuxuryVillaWorld,
    camera: [0.2, 6.4, 19.2],
  },
  {
    id: "study-temple",
    index: "Study 05",
    title: "A mandir in white marble.",
    body: "A Swaminarayan-inspired mandir: a pink-stone plinth, arched marble halls, and a tall shikhara. An architectural study — not a temple built on this land.",
    clear: "#f3efe6",
    image: images.sahyadriRidge,
    World: TempleWorld,
    camera: [0.4, 6.6, 20.5],
  },
  {
    id: "study-helipad",
    index: "Study 06",
    title: "A craft comes to rest.",
    body: "A marked pad and a helicopter that descends, settles, then lifts away. Aviation access is not part of this project. A tour cannot be booked here.",
    clear: "#d5e2ea",
    image: images.heroBhandardara,
    World: HelipadWorld,
    camera: [12, 5.4, 12],
    note: "Conceptual study only · no helicopter tour is offered",
  },
];

function StudyCanvas({
  study,
  progress,
  still,
  active,
}: {
  study: (typeof studies)[number];
  progress: number;
  still: boolean;
  active: boolean;
}) {
  const World = study.World;
  return (
    <Canvas
      className="h-full w-full"
      dpr={[1, 1.6]}
      shadows
      frameloop={active ? "always" : "demand"}
      camera={{ fov: 34, near: 0.1, far: 80, position: study.camera }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor(study.clear, 1);
        gl.toneMapping = ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.08;
      }}
    >
      <World progress={progress} still={still} />
    </Canvas>
  );
}

function StudyStage({
  study,
  capable,
  reduced,
}: {
  study: (typeof studies)[number];
  capable: boolean;
  reduced: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
        if (entry.isIntersecting) setSeen(true);
      },
      { rootMargin: "180px 0px" },
    );
    observer.observe(node);
    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const walked = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(clamp01(total <= 0 ? 0 : walked / total));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const showCanvas = seen && capable;

  return (
    <article id={study.id} ref={ref} className="relative h-[145vh] border-t border-white/10">
      <div className="sticky top-0 h-screen overflow-hidden">
        {showCanvas ? (
          <StudyCanvas study={study} progress={progress} still={reduced || !active} active={active && !reduced} />
        ) : capable ? (
          <div className="h-full" style={{ background: study.clear }} />
        ) : (
          <SceneFallback image={study.image} title={study.title} body={study.body} />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0c1210] via-[#0c1210]/75 to-transparent px-6 pb-10 pt-28 md:px-12 md:pb-14">
          <p className="kicker text-gold">{study.index}</p>
          <h3 className="mt-3 max-w-xl font-serif text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.95] text-ivory">{study.title}</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#d5ddd4]">{study.body}</p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-white/60">
            {study.note ?? "Conceptual study · not a site render"}
          </p>
        </div>
      </div>
    </article>
  );
}

export function FinaleStudies() {
  const reduced = usePrefersReducedMotion();
  const [ready, setReady] = useState(false);
  const [capable, setCapable] = useState(false);

  useEffect(() => {
    setCapable(hasWebGL() && !prefersReducedData());
    setReady(true);
  }, []);

  return (
    <section id="studies" className="bg-[#0c1210] text-ivory" aria-label="Closing three-dimensional studies">
      <header className="mx-auto max-w-editorial px-6 pb-12 pt-24 md:px-10 md:pt-32">
        <p className="kicker text-gold">At the close</p>
        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.95]">Six studies, after the story.</h2>
        <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#c5d0c6]">
          A stepwell, a canopy, a dusk court, then a mansion, a marble mandir and a landing pad. Scroll each one. They remain illustrations — not Masrul, not an approval, and not a home or a flight for sale.
        </p>
      </header>
      {studies.map((study) => (
        <StudyStage key={study.id} study={study} capable={ready && capable} reduced={reduced} />
      ))}
    </section>
  );
}
