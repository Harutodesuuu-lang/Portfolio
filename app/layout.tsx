import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://puthyseth.dev"),
  title: "Nhim Puthyseth – Full Stack Developer",
  description:
    "Full Stack Developer specializing in Java, Spring Boot, React, Next.js, and PostgreSQL. Building modern, scalable web applications.",
  keywords: [
    "Nhim Puthyseth",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "React Developer",
    "Next.js",
    "PostgreSQL",
    "Cambodia",
    "RUPP",
    "ISTAD",
  ],
  authors: [{ name: "Nhim Puthyseth" }],
  creator: "Nhim Puthyseth",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nhim Puthyseth – Full Stack Developer",
    description:
      "Full Stack Developer specializing in Java, Spring Boot, React, Next.js, and PostgreSQL.",
    siteName: "Nhim Puthyseth Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhim Puthyseth – Full Stack Developer",
    description:
      "Full Stack Developer specializing in Java, Spring Boot, React, Next.js, and PostgreSQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
