import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AdiFinance",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white py-12">
            <div className="container mx-auto px-6 text-center">
              <p className="text-lg font-semibold">Empowering Your Financial Future</p>
              <p className="text-sm text-gray-400 mt-2">Built by Aditya Aman</p>
              
              <div className="mt-6 flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/aditya-aman-120a73281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-purple-400 transition-all flex items-center space-x-2">
                  <FaLinkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a href="adityaaman.codex@gmail.com" className="hover:text-purple-400 transition-all flex items-center space-x-2">
                  <FaEnvelope size={24} />
                  <span>Email</span>
                </a>
                <a href="https://instagram.com" className="hover:text-purple-400 transition-all flex items-center space-x-2">
                  <FaInstagram size={24} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
