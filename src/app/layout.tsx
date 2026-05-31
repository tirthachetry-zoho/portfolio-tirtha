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
  title: "Tirtha Chetry | AI Engineer & Software Developer",
  description: "Personal website of Tirtha Chetry featuring AI projects, software engineering articles, open-source contributions, system design insights, automation experiments, and technology research.",
  keywords: ["AI Engineer", "Software Developer", "Open Source", "System Design", "Automation", "Cloud Engineering", "Technical Writing"],
  authors: [{ name: "Tirtha Chetry" }],
  creator: "Tirtha Chetry",
  metadataBase: new URL("https://tirthachetry.dpdns.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tirthachetry.dpdns.org",
    title: "Tirtha Chetry | AI Engineer & Software Developer",
    description: "Personal website of Tirtha Chetry featuring AI projects, software engineering articles, open-source contributions, system design insights, automation experiments, and technology research.",
    siteName: "Tirtha Chetry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirtha Chetry | AI Engineer & Software Developer",
    description: "Personal website of Tirtha Chetry featuring AI projects, software engineering articles, open-source contributions, system design insights, automation experiments, and technology research.",
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
