import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Natural Bites | Snacks Saludables",
  description: "En Natural Bites buscamos crear productos deliciosos y naturales que le den un sabor inolvidable a todas tus recetas, formando parte de un estilo de vida saludable. v9",
  icons: {
    icon: "/images/Logo.svg",
  },
  openGraph: {
    title: "Natural Bites | Snacks Saludables",
    description: "Disfrutá con naturalidad cada momento",
    images: ["/images/img%20Compos-1920w.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${redHatDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
