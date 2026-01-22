import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student-Focused UGC Creator | Portfolio",
  description:
    "Student-native UGC, educational memes, and tech content that helps productivity brands reach Gen Z — fast.",
  openGraph: {
    title: "Student-Focused UGC Creator | Portfolio",
    description:
      "I help tech & productivity brands reach students through relatable educational content + UGC that feels native to university life.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student-Focused UGC Creator | Portfolio",
    description:
      "Student-native UGC, educational memes, and tech content for productivity brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-(--bg) text-(--foreground) antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
