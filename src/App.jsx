import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <About />
        <Location />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}