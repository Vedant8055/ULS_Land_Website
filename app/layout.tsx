import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { project } from "@/data/project";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: `${project.brand} · ${project.placeLong}`,
    template: `%s · ${project.brand}`,
  },
  description:
    "A cinematic introduction to Transformative Living — a concept-stage vision for regenerative, nature-centric life in Masrul, Nashik. Not a property listing.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `${project.brand} · A different way to live`,
    description:
      "A private vision of regenerative living in the Sahyadri landscape. Concept-stage. Houses are only part of the proposition.",
    images: [{ url: "/media/images/hero-bhandardara.jpg" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans bg-linen text-ink min-h-screen">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-ivory focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
