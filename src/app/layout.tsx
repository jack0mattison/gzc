import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: "Guiny Zapata Cornejo — Higienista Dental · Especialista en Prótesis Dental",
  description:
    "Currículum digital de Guiny Zapata Cornejo, Higienista Dental y Especialista en Prótesis Dental en Madrid, España.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    type: "website",
    title: "Guiny Zapata Cornejo — Higienista Dental · Especialista en Prótesis Dental",
    description:
      "Currículum digital de Guiny Zapata Cornejo, Higienista Dental y Especialista en Prótesis Dental en Madrid, España.",
    url: "https://example.com",
    siteName: "CV de Guiny Zapata Cornejo"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} accent-gradient`}>
        {children}
      </body>
    </html>
  );
}

