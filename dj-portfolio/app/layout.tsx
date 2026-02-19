import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://dobredj.vercel.app";

export const metadata: Metadata = {
  title: "DŌBRE | DJ & Live Percussionist | Afro-Latin House",
  description:
    "DŌBRE is a Romania-based DJ and percussionist specializing in high-energy Afro-Latin house. Rhythm is king—non-stop dancing.",
  keywords: ["DJ", "Live Percussion", "Afro-Latin", "House", "DŌBRE", "Romania"],
  authors: [{ name: "DŌBRE" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "DŌBRE | DJ & Live Percussionist | Afro-Latin House",
    description:
      "DŌBRE is a Romania-based DJ and percussionist specializing in high-energy Afro-Latin house. Rhythm is king—non-stop dancing.",
    siteName: "DŌBRE",
  },
  twitter: {
    card: "summary_large_image",
    title: "DŌBRE | DJ & Live Percussionist | Afro-Latin House",
    description: "DŌBRE is a Romania-based DJ and percussionist specializing in high-energy Afro-Latin house. Rhythm is king—non-stop dancing.",
  },
  robots: "index, follow",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
