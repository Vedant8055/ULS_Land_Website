import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 pt-24">
      <p className="kicker text-gold">Path not found</p>
      <h1 className="mt-4 font-serif text-5xl text-sage">This clearing is empty.</h1>
      <p className="mt-5 text-muted">The page does not exist in this website. Return to the story, or request a private introduction.</p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="bg-pine px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-ivory">Home</Link>
        <Link href="/private-concierge" className="border border-pine px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em]">Concierge</Link>
      </div>
    </main>
  );
}
