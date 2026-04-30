import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SessionProvider from "@/components/admin/SessionProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Razwanul Chowdhury — Full-Stack Developer",
    template: "%s | Razwanul Chowdhury",
  },
  description:
    "Full-stack developer specialising in React, Node.js, and AI-integrated applications. Former NatWest Assistant Relationship Manager building polished web products.",
  keywords: ["React", "Next.js", "TypeScript", "Full-Stack", "Developer", "UK"],
  authors: [{ name: "Razwanul Chowdhury" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Razwanul Chowdhury",
    title: "Razwanul Chowdhury — Full-Stack Developer",
    description:
      "Full-stack developer specialising in React, Node.js, and AI-integrated applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Razwanul Chowdhury — Full-Stack Developer",
    description:
      "Full-stack developer specialising in React, Node.js, and AI-integrated applications.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased bg-[#09090b] text-zinc-100`}>
        <SessionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </SessionProvider>
      </body>
    </html>
  );
}
