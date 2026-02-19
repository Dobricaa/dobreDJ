import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://dj-yourname.com";

export const metadata: Metadata = {
  title: "DJ YOURNAME | Afro / Tech House / Festival Energy",
  description:
    "Professional DJ and producer. Afro House, Tech House, Festival Energy. Book for events and listen to latest mixes.",
  keywords: ["DJ", "Afro House", "Tech House", "Festival", "Electronic Music"],
  authors: [{ name: "DJ YOURNAME" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "DJ YOURNAME | Afro / Tech House / Festival Energy",
    description:
      "Professional DJ and producer. Afro House, Tech House, Festival Energy.",
    siteName: "DJ YOURNAME",
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ YOURNAME | Afro / Tech House / Festival Energy",
    description: "Professional DJ and producer. Afro House, Tech House, Festival Energy.",
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
