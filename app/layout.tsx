import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TechLab Brasil | Soluções Digitais que Transformam Negócios",
  description:
    "Desenvolvemos soluções digitais personalizadas: painéis inteligentes, sites profissionais, inteligência artificial e análise de dados. Aumente sua produtividade e reduza custos com tecnologia de ponta.",
  keywords: [
    "desenvolvimento web",
    "soluções digitais",
    "inteligência artificial",
    "análise de dados",
    "automação",
    "dashboards",
    "sistemas personalizados",
    "transformação digital",
    "TechLab Brasil",
  ],
  authors: [{ name: "Gabriel Gonçalves" }, { name: "Daniel Zanchetta" }],
  creator: "TechLab Brasil",
  publisher: "TechLab Brasil",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://techlabbrasil.com.br",
    title: "TechLab Brasil | Soluções Digitais que Transformam Negócios",
    description:
      "Desenvolvemos soluções digitais personalizadas que aumentam produtividade e reduzem custos. Painéis inteligentes, IA aplicada e sistemas sob medida.",
    siteName: "TechLab Brasil",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechLab Brasil - Transformando Negócios com Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechLab Brasil | Soluções Digitais que Transformam Negócios",
    description:
      "Desenvolvemos soluções digitais personalizadas que aumentam produtividade e reduzem custos.",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#2563eb" />
        <link rel="canonical" href="https://techlabbrasil.com.br" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
