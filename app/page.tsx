import Feauture from "@/components/shared/feauture";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import Hero from "@/components/shared/hero";
import Newsletter from "@/components/shared/newsletter";
import Pricing from "@/components/shared/pricing";
import Testimonials from "@/components/shared/testimonials";

export default function Home() {
  return (
    <div>
      <div className="bg-[#f8f9ff] text-black text-[15px]">
        <Header />
        <Hero />
        <div className="px-4 sm:px-10">
          <Feauture />
          <Testimonials />
          <Pricing />
          <Newsletter />
        </div>
        <Footer />
      </div>
    </div>
  );
}
