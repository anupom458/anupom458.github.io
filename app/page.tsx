import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedWork from "@/components/FeaturedWork";
import KeyProducts from "@/components/KeyProducts";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <FeaturedWork />
      <KeyProducts />
      <Publications />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
