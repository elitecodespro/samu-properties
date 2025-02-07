"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() =>{
    setIsLoaded(true)
  }, [isLoaded])

  if (!isLoaded) {
    return <h1>LOADING...</h1>
  }
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  );
}
