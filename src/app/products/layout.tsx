import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "products 확인",
  description: "products 확인 페이지입니다!!",
};

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className='flex space-x-3 border border-blue-400'>
        <Link href='/products/woman'>여성옷</Link>
        <Link href='/products/man'>남성옷</Link>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default ProductsLayout;
