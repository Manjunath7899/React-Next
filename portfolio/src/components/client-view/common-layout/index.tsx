"use client";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import Navbar from "../navbar/Navbar";

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/admin" ? <Navbar /> : null}
      {children}
    </>
  );
};

export default CommonLayout;
