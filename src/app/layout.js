import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/Providers/NextAuthProvider";
import LayoutContent from "@/components/LayoutContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Product Management App",
  description: "A simple app to manage your products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen-2xl mx-auto`}
      >
        <NextAuthProvider>
          <LayoutContent>{children}</LayoutContent>
        </NextAuthProvider>
      </body>
    </html>
  );
}
