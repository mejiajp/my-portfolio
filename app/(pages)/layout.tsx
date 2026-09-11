import type { Metadata } from "next";
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
    <div>
      <div id="cursor-root" />
      <Cursor />
      <SplashScreen />

      <Header />

      <main className="shadow-[0_25px_60px_var(--color-primary-dark)]">
        {children}
      </main>

      <div className="mb-[400px] lg:mb-[600px]"></div>

      <Footer />
    </div>
  );
}
