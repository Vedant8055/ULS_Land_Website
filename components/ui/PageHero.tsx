import Image from "next/image";
import type { ImageAsset } from "@/data/images";

export function PageHero({
  kicker,
  title,
  lede,
  image,
}: {
  kicker: string;
  title: string;
  lede: string;
  image: ImageAsset;
}) {
  return (
    <header className="relative min-h-[78vh] overflow-hidden bg-pine text-ivory">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        className="object-cover hero-zoom"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/55 to-pine/20" />
      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-editorial flex-col justify-end px-6 pb-16 pt-32 md:px-10">
        <p className="kicker text-gold">{kicker}</p>
        <h1 className="mt-5 max-w-4xl break-words font-serif text-[clamp(2.35rem,7.4vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.03em] sm:leading-[0.9]">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-[#d7ddd4]">{lede}</p>
        <p className="mt-8 max-w-md text-[10px] uppercase tracking-[0.16em] text-[#c5cec4]/80">
          {image.caption}
        </p>
      </div>
    </header>
  );
}
