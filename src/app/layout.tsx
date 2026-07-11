import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import "highlight.js/styles/github-dark.css";

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

const siteUrl = "https://tirthachetry.dpdns.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tirtha Chetry | AI Engineer & Software Developer",
    template: "%s | Tirtha Chetry",
  },
  description:
    "Tirtha Chetry — AI Engineer and Software Developer building scalable distributed systems, agentic AI, and developer tooling. Java, Spring Boot, Kafka, AWS, and LLM systems.",
  applicationName: "Tirtha Chetry — Portfolio",
  keywords: [
    "AI Engineer",
    "Software Developer",
    "Distributed Systems",
    "Java",
    "Spring Boot",
    "Kafka",
    "Cloud",
    "System Design",
    "Agentic AI",
    "Open Source",
  ],
  authors: [{ name: "Tirtha Chetry" }],
  creator: "Tirtha Chetry",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tirtha Chetry",
    title: "Tirtha Chetry | AI Engineer & Software Developer",
    description:
      "Building scalable distributed systems, agentic AI, and developer tooling.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirtha Chetry | AI Engineer & Software Developer",
    description:
      "Building scalable distributed systems, agentic AI, and developer tooling.",
    creator: "@tirthachetry",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a192f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tirtha Chetry",
    url: siteUrl,
    jobTitle: "AI Engineer & Software Developer",
    sameAs: [
      "https://github.com/tirthachetry-zoho",
      "https://linkedin.com/in/tirthachetry",
      "https://x.com/tirthachetry",
      "https://topmate.io/tirtha_chetry",
    ],
    description:
      "AI Engineer and Software Developer focused on distributed systems and agentic AI.",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-primary focus:outline focus:outline-2 focus:outline-primary"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}