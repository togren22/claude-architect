import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Claude - Don't Settle for Slop",
  description: "ChatGPT guesses. Claude builds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f7f5f0] text-[#1a1a18] antialiased`}>
        {children}
      </body>
    </html>
  );
}
