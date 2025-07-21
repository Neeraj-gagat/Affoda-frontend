import { AppBar } from "@/components/AppBar";
import { FeraturedProp } from "@/components/Featuredprop";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";



export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <AppBar/>
      <Hero/>
      <FeraturedProp/>
      <Footer/>
    </div>
  );
}
