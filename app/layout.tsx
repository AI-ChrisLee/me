import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Full-Stack Agency Bootcamp - Ship Client Projects 10x Faster Using Only AI",
  description: "A proven framework to build a profitable full-stack web/app agency in less than two weeks, without advanced coding skills. Join 2,847+ agency owners building profitable businesses with AI.",
  keywords: "AI agency, full-stack development, vibe-coding, AI bootcamp, web development, no-code alternative",
  authors: [{ name: "AI Full-Stack Agency Bootcamp" }],
  openGraph: {
    title: "AI Full-Stack Agency Bootcamp - Ship Client Projects 10x Faster Using Only AI",
    description: "A proven framework to build a profitable full-stack web/app agency in less than two weeks, without advanced coding skills.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Full-Stack Agency Bootcamp - Ship Client Projects 10x Faster Using Only AI",
    description: "A proven framework to build a profitable full-stack web/app agency in less than two weeks, without advanced coding skills.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
} 