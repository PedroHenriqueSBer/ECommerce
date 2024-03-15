import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProductProvider } from "@/context/useProduct";
import { ShoppingCarContextProvider } from "@/context/useShoppingCar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ECommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ShoppingCarContextProvider>
      <ProductProvider>
        <html lang="en" className={inter.className}>
          <body className="w-screen h-screen min-w-[40rem] bg-slate-100">{children}</body>
        </html>
      </ProductProvider>
    </ShoppingCarContextProvider>

  );
}
