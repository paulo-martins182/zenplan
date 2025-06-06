import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainProviders from "@/providers/MainProviders";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <MainProviders>{children}</MainProviders>
      </body>
    </html>
  );
}
