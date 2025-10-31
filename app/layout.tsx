import type { Metadata } from "nvext";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import "./globals.css"
import { NavBar } from "./ui/NavBar";
import { CartStatusButton } from "@/app/ui/CartStatusButton";
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
      <body
        className={`${cormorant_garamond.variable} ${mulish.variable} antialiased grid grid-rows-[auto_1fr_auto] min-h-screen`}
      >
        <Providers>
          <NavBar />
          {children}
          <CartStatusButton />
        </Providers>
      </body>
    </html>
  );
}
