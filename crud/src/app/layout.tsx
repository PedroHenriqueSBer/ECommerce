import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProductProvider } from "@/context/useProduct";

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
    <ProductProvider>
      <html lang="en" className={inter.className}>
        <body className="h-screen min-w-[40rem] bg-slate-100">{children}</body>
      </html>
    </ProductProvider>
  );
}
