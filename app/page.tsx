import { Contact } from "./components/Cantact";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
