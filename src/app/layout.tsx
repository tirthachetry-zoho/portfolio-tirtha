import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Engineering Blogs by Tirtha",
  description: "Engineering insights, architecture patterns, and practical lessons from building scalable distributed systems across FinTech, OMS, and WMS.",
  keywords: ["Software Engineering", "Distributed Systems", "Architecture", "Spring Boot", "Kafka", "Cloud", "System Design"],
  authors: [{ name: "Tirtha" }],
  creator: "Tirtha",
  metadataBase: new URL("https://tirthachetry.dpdns.org"),
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tirthachetry.dpdns.org",
    title: "Engineering Blogs by Tirtha",
    description: "Engineering insights, architecture patterns, and practical lessons from building scalable distributed systems across FinTech, OMS, and WMS.",
    siteName: "Engineering Blogs by Tirtha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blogs by Tirtha",
    description: "Engineering insights, architecture patterns, and practical lessons from building scalable distributed systems across FinTech, OMS, and WMS.",
    creator: "@tirthachetry",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
