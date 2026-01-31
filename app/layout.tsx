import type { Metadata } from "next";
import "./globals.css";

import SplashScreen from "@/app/components/loading";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Cursor from "@/app/components/cursor";

export const metadata: Metadata = {
  title: "Juan Mejia",
  description: "Portfolio created by Juan Paulo Mejia",
  icons: {
    icon: ["./favicon.ico?v=4"],
    apple: ["./apple-touch-icon.png?v=4"],
    shortcut: ["./apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`antialiased`}>
        <div id="cursor-root" />
        <Cursor />
        <SplashScreen />
        <Header />

        {children}
        <div className="mb-[300px] lg:mb-[500px]"></div>
        <Footer />
      </body>
    </html>
  );
}
