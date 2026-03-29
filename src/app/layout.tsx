import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F766E",
};

export const metadata: Metadata = {
  title: "Ecografías y Rayos X Bogotá | Resultados Express en Teusaquillo | Ecomedica",
  description:
    "Centro de diagnóstico por imagen con tecnología de alta gama clínica en Teusaquillo, Bogotá. Ecografías obstétricas, Doppler, rayos X digitales y salud ocupacional. Resultados en 15 minutos. Desde $90.000 COP.",
  keywords: [
    "ecografías bogotá",
    "ecografía obstétrica teusaquillo",
    "rayos x bogotá",
    "laboratorio clínico teusaquillo",
    "exámenes de ingreso laborales bogotá",
    "ecografía doppler bogotá",
    "radiología teusaquillo",
    "salud ocupacional bogotá",
    "ecomedica",
    "centro diagnóstico por imagen bogotá",
    "ecografía particular bogotá",
    "certificado médico de ingreso bogotá",
  ],
  authors: [{ name: "Ecomedica Centro Médico" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://ecomedica.co",
    siteName: "Ecomedica IPS",
    title: "Ecografías y Rayos X Bogotá | Resultados en 15 min | Ecomedica",
    description:
      "Diagnóstico por imagen con tecnología diagnóstica premium en Teusaquillo. Resultados express. Desde $90.000 COP.",
    images: [
      {
        url: "https://ecomedica.co/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ecomedica Centro Médico — Diagnóstico de Alta Precisión",
      },
    ],
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
  alternates: {
    canonical: "https://ecomedica.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-teal-100 selection:text-teal-900`}
      >
        {children}
      </body>
    </html>
  );
}
