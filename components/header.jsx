'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { PenBox, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-gradient-to-br from-gray-900 via-black to-purple-900 backdrop-blur-lg z-50 border-b border-purple-500 shadow-lg"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with subtle animation */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Finance Logo"
              width={200}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <SignedOut>
            <Link href="#features" className="hover:text-purple-400 transition-all">
              Features
            </Link>
            <Link href="#testimonials" className="hover:text-purple-400 transition-all">
              Testimonials
            </Link>
          </SignedOut>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center gap-2 hover:scale-105 transition-all">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button className="bg-purple-600 text-white flex items-center gap-2 hover:scale-105 transition-all">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all">
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10 border-2 border-purple-500 hover:scale-110 transition-all',
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
