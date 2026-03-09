import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jonathan Dobrowolski — Software Engineer",
  description:
    "Portfolio of Jonathan Dobrowolski — full-stack engineer, founder, builder.",
  openGraph: {
    title: "Jonathan Dobrowolski",
    description: "Full-stack engineer. Founder of Common. Builder.",
    url: "https://jdobro.com",
    siteName: "jdobro.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
