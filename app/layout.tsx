import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const plusJakartaSans = Plus_Jakarta_Sans({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Blog App",
  description: "Blog Post App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
