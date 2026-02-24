import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Projects from "./components/Projects";
import BeforeAfter from "./components/BeforeAfter";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

import Loader from "./components/Loader";
import SmoothScroll from "./components/SmoothScroll";
import PageTransition from "./components/PageTransactions";

// <-- New 3D Room Experience
import RoomGallery from "./components/pages/RoomGallery";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <SmoothScroll>
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

              {/* 3D Rooms Section */}
              {/* <section id="rooms">
                <RoomGallery />
              </section> */}

              <section id="projects">
                <Projects />
              </section>

              <BeforeAfter />

              <section id="contact">
                <ContactCTA />
              </section>
            </main>

            <Footer />
            <WhatsApp />
          </PageTransition>
        </SmoothScroll>
      )}
    </>
  );
}

export default App;