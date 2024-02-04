"use client";

import React, { ReactNode } from "react";
import Footer from "./Footer";
import { footerLinks } from "@/utils/footerLinks";
import Header from "./Header";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="bg-white shadow-md text-gray-700 h-48 top-0 w-full z-50 pb-2">
        <Header />
        <Navbar />

        {children}

        <Footer />
      </div>
    </>
  );
};

export default Layout;
