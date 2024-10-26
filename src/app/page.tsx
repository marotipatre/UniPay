import Navbar from "@/components/_navbar/Navbar";
import Banner from "../components/_banner";
import Footer from "@/components/_navbar/Footer";
import FAQs from "@/components/_banner/FAQs";
import FeaturedGigs from "@/components/_banner/FeaturedGigs";
import ParticlesBackground from "../components/Particle"; // Adjust the import path as necessary
import Chains from "@/components/_banner/Chains";

export default function Home() {
  return (
    
      <main className="bg-white" style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Banner />
        <Chains />
        <FeaturedGigs />
        <FAQs />
        <Footer />
      </main>
    
  );
}