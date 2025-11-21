import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import "./globals.css"
import { NavBar } from "./ui/NavBar";
import { CartStatusButton } from "@/app/ui/CartStatusButton";
import ConfigureAmplifyClientSide from "./ui/ConfigureAmplifyClientSide"
import { Providers } from "@/app/context/Providers"

const cormorant_garamond = Cormorant_Garamond({ weight: "300", subsets: ["latin"] })

const mulish = Mulish({ variable: "--font-mulish-sans", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tienda Flashback Fotografía",
  description: "La tienda oficial de Flashback Fotografía",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Flashback - Tienda</title>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={`${cormorant_garamond} ${mulish.variable} antialiased`}
      >
        <Providers>
          <ConfigureAmplifyClientSide />
          <div className="grid grid-rows-[auto_1fr_auto] h-screen">
            <NavBar />
            {children}
          </div>
          <CartStatusButton />
        </Providers>
      </body>
    </html>
  );
}
