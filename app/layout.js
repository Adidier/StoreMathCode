import "@/app/ui/globals.css";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import { NavBar } from "@/app/ui/NavBar";
import { CartStatusButton } from "@/app/ui/CartStatusButton";
import { Providers } from "@/app/context/Providers"

export const cormorant_garamond = Cormorant_Garamond(
  { variable: "--font-cormorant-serif", subsets: ["latin"] })

export const mulish = Mulish(
  { variable: "--font-mulish-sans", subsets: ["latin"] })

export const metadata = {
  title: "Tienda Flashback Fotografía",
  description: "La tienda oficial de Flashback Fotografía",
};

export default function RootLayout({ children }) {
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
