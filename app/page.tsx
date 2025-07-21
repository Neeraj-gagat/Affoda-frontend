import { AppBar } from "@/components/AppBar";
import { FeraturedProp } from "@/components/Featuredprop";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Suspense } from "react";



export default function Home() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
    <div className="overflow-x-hidden">
      <AppBar/>
      <Hero/>
      <FeraturedProp/>
      <Footer/>
    </div>
    </Suspense>
  );
}
