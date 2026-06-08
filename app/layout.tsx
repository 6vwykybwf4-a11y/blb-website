import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://brotherslegacyblueprint.com"),
  title: {
    default: "Brothers Legacy Blueprint, LLC | Fleet Repair & Government Contracting",
    template: "%s | Brothers Legacy Blueprint",
  },
  description:
    "Brothers Legacy Blueprint, LLC provides auto body repair, hail damage restoration, claims management, and fleet-ready services across DFW and North Texas. Government contracting ready.",
  keywords: [
    "fleet vehicle repair",
    "auto body repair DFW",
    "hail damage repair Texas",
    "claims management",
    "government contracting",
    "NAICS 811121",
    "Garland TX auto body",
    "Brothers Legacy Blueprint",
  ],
  authors: [{ name: "Brothers Legacy Blueprint, LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brotherslegacyblueprint.com",
    siteName: "Brothers Legacy Blueprint, LLC",
    title: "Brothers Legacy Blueprint, LLC",
    description:
      "Fleet vehicle repair, hail restoration, claims management, and government contracting support across DFW and North Texas.",
    images: [
      {
        url: "/logo.png",
        width: 1536,
        height: 1024,
        alt: "Brothers Legacy Blueprint, LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brothers Legacy Blueprint, LLC",
    description:
      "Fleet vehicle repair, hail restoration, claims management, and government contracting support across DFW and North Texas.",
    images: ["/logo.png"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
