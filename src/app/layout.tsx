import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Comp/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black w-full h-full">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
