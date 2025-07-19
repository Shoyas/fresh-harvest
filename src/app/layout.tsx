import type { Metadata } from "next";
import { Rubik, Questrial } from "next/font/google";
import "./globals.css";

import { ReduxProvider } from "@/redux/provider";
import { AppInitializer, Navbar, Footer } from "@/components";
import AuthForms from "@/components/auth/AuthForms";



const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-questrial",
});


export const metadata: Metadata = {
  title: "Fresh Harvests",
  description: "Fresh Harvests",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col antialiased ${rubik.variable} ${questrial.variable}`}>
        <ReduxProvider>
          <AppInitializer />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <AuthForms />
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
