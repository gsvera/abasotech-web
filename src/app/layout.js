import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./index.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} principal-layout`}
      >
        {children}
      </body>
    </html>
  );
}
