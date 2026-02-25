import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Projects from "../components/Projects";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

import SmoothScroll from "../components/SmoothScroll";
import PageTransition from "../components/PageTransactions";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (

    
    <SmoothScroll>

        <ScrollToTop />
        
      <PageTransition>

        <Navbar />

        <main>

          <section id="home">
            <Hero />
          </section>

          <Stats />

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

         

          <section id="contact">
            <ContactCTA />
          </section>

        </main>

        <Footer />

        <WhatsApp />

      </PageTransition>
    </SmoothScroll>
  );
}