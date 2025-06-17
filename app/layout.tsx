import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Vibe Agency Blueprint - Build $75K+ Portfolio Projects with AI | AI Chris Lee",
  description: "Transform your web/app agency from price-competing freelancer to premium AI-powered operation. Build 3 complete portfolio projects worth $75K+ in client value using Cursor, Supabase, Vercel & N8N. Live weekly sessions with AI Chris Lee starting July 2025.",
  keywords: "AI agency, vibe coding, AI development, Cursor AI, Supabase, Vercel, N8N, AI Chris Lee, agency blueprint, premium web development, AI transformation, full-stack AI, agency automation, AI workflows",
  authors: [{ name: "AI Chris Lee" }],
  creator: "AI Chris Lee",
  publisher: "AI Vibe Agency Blueprint",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "AI Vibe Agency Blueprint - Build $75K+ Portfolio Projects with AI",
    description: "Transform your web/app agency from price-competing freelancer to premium AI-powered operation delivering $10K-$50K projects in days, not months.",
    type: "website",
    locale: "en_US",
    url: "https://aichrislee.com",
    siteName: "AI Vibe Agency Blueprint",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Vibe Agency Blueprint - Build Premium AI-Powered Agencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Vibe Agency Blueprint - Build $75K+ Portfolio Projects with AI",
    description: "Transform your web/app agency from price-competing freelancer to premium AI-powered operation delivering $10K-$50K projects in days, not months.",
    creator: "@AiChrisLee",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://aichrislee.com",
  },
  category: "Business & Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-mono antialiased">
        {children}
      </body>
    </html>
  );
} 