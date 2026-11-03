import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { SITE } from "@/lib/site";
import "./globals.css";

// Guidelines: Nunito for all headings, body text and captions.
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  // Pages set their own canonical; this one is the home page.
  alternates: { canonical: "/" },
  title: {
    default: "Collaborative Blending Solutions | Contract Dry Blending, South Africa",
    template: "%s | Collaborative Blending Solutions",
  },
  description:
    "Collaborative Blending Solutions (CBS) is a Level 1 B-BBEE, FSSC 22000 certified contract manufacturer of dry blended food solutions in Midrand, South Africa — fortification mixes, hot chocolates, powdered drinks, seasonings and custom formulations.",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Collaborative Blending Solutions | Precision Dry Blending",
    description: "FSSC 22000 certified, Halaal and Kosher accredited contract blending for leading FMCG and QSR brands.",
    images: [{ url: "/images/blending-operator.jpg", width: 1600, height: 1067, alt: "Blending at the CBS facility" }],
    locale: "en_ZA",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
