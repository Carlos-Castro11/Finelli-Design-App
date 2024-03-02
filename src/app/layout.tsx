import "./globals.css";
import type { Metadata } from "next";

// Components
import Header from "@/components/Header";
import Container from "@/utils/Container";
import Footer from "@/components/Footer";

// Fonts
import { Inter } from "next/font/google";
const font = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

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
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} bg-body-background-color h-screen`}>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
