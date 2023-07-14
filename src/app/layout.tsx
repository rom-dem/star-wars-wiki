import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars Wiki",
  description: "Characters and items from Star Wars universe",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
