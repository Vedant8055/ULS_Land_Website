import Image from "next/image";
import type { ImageAsset } from "@/data/images";

export function SceneFallback({
  image,
  title,
  body,
}: {
  image: ImageAsset;
  title: string;
  body: string;
}) {
  return (
    <figure className="relative h-full min-h-[70vh] overflow-hidden bg-pine">
      <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/35 to-transparent" />
      <figcaption className="absolute bottom-6 left-6 right-6 max-w-lg text-ivory">
        <p className="kicker text-gold">Conceptual still · WebGL unavailable</p>
        <h3 className="mt-3 font-serif text-3xl leading-tight">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#d5ddd3]">{body}</p>
        <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-white/70">{image.caption}</p>
      </figcaption>
    </figure>
  );
}
