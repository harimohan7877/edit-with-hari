"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorFollower from "@/components/ui/CursorFollower";
import ScrollProgress from "@/components/ui/ScrollProgress";
import NoiseTexture from "@/components/ui/NoiseTexture";
import LoadingScreen from "@/components/ui/LoadingScreen";
import PageTransition from "@/components/layout/PageTransition";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ScrollProgress />
          <CursorFollower />
          <NoiseTexture />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </>
      )}
    </>
  );
}