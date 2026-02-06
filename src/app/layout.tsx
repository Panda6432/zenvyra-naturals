import type { Metadata } from "next";
import { Italiana } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./smooth-scrolling";
import Navbar from "./components/navbar";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zenvyra Naturals | Premium Organic Face Cream & Botanical Skincare",
  description: "At Zenvyra Naturals, we believe beauty should be clean, conscious, and effective. Our face creams blend traditional botanical wisdom with modern skin science - free from harsh chemicals, rich in plant-powered actives.",
  keywords: [
    "Zenvyra Naturals",
    "face cream",
    "organic face cream",
    "natural skincare",
    "botanical skincare",
    "herbal face cream",
    "anti-aging cream",
    "moisturizer",
    "plant-based skincare",
    "natural beauty",
    "organic moisturizer",
    "skin repair cream",
    "hydrating face cream",
    "clean beauty",
    "skincare India"
  ],
  applicationName: "Zenvyra Naturals",
  authors: [{ name: "Zenvyra Naturals" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "Zenvyra Naturals",
  publisher: "Zenvyra Naturals",
  openGraph: {
    title: "Zenvyra Naturals | Premium Organic Face Cream",
    description: "Clean, conscious, and effective skincare. Traditional botanical wisdom meets modern skin science.",
    type: "website",
    locale: "en_US",
    siteName: "Zenvyra Naturals",
    url: "https://zenvyranaturals.shop",
    images: [
      {
        url: "/zenvyra-naturals-face.webp",
        width: 1200,
        height: 630,
        alt: "Zenvyra Naturals - Premium Organic Face Cream"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenvyra Naturals | Premium Organic Face Cream",
    description: "Clean, conscious, and effective skincare. Traditional botanical wisdom meets modern skin science.",
    images: ["/zenvyra-naturals-face.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  category: "Beauty & Skincare"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zenvyra Naturals",
              "description": "Premium organic face cream brand. Clean, conscious, and effective botanical skincare.",
              "url": "https://zenvyranaturals.shop",
              "logo": "https://zenvyranaturals.shop/zenvyra-naturals-face.webp",
              "sameAs": [
                "https://instagram.com/zenvyranaturals",
                "https://linkedin.com/company/zenvyranaturals"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "IN"
              }
            })
          }}
        />
      </head>
      <body className={`${italiana.className} antialiased bg-white text-black`}>
        <Navbar />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}