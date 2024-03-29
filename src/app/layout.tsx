import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/component/Header";
import Footer from "./component/Footer";



const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cine Wave",
  description: "Cine Wave",
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={josefinSans.className}>
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
