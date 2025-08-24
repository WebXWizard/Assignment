
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "🌿 Nature’s Basket | Natural Products & Medicines",
description:
    "Herbal Cure offers pure and natural herbal products, organic remedies, and Ayurvedic medicines for a healthy lifestyle. Embrace nature’s healing power.",
  keywords: [
    "Herbal Products",
    "Ayurvedic Medicine",
    "Natural Remedies",
    "Organic Herbal Store",
    "Health and Wellness",
    "Herbal Cure",
    "Ayurveda",
    "Medicinal Herbs"
  ],
  authors: [{ name: "Shahe Alam", url: "https://www.herbalcure.com" }],
  creator: "Herbal Cure",
  metadataBase: new URL("https://www.herbalcure.com"),
  openGraph: {
    title: "Herbal Cure | Natural Products & Medicines",
    description:
      "Discover natural herbal products and Ayurvedic remedies that promote health, balance, and wellness. 100% authentic and organic.",
    url: "https://www.herbalcure.com",
    siteName: "Herbal Cure",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Herbal Cure Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Herbal Cure | Natural Products & Medicines",
    description:
      "Pure herbal products and Ayurvedic medicines for a healthy lifestyle. 100% natural, organic, and safe.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
