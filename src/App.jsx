import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDeatils";
import ScrollToTop from "./components/ScrollToTop";
import Consultation from "./pages/Consultation";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import About from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import WhatsApp from "./components/WhatsApp";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";
import GallerySubCategory from "./pages/GalleryCategory";
import GalleryImages from "./pages/GalleryImages";
import Feedback from "./pages/Feedback";
import DesignDetails from "./components/DesignDetail";
import Reviews from "./pages/Feedback";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>

      {/* 🔥 SHOW ONLY LOADER FIRST */}
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          {/* ✅ EVERYTHING AFTER LOADER */}
          <Navbar />
          <ScrollToTop />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:category" element={<GallerySubCategory />} />
              <Route path="/gallery/:category/:sub" element={<GalleryImages />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:slug" element={<SolutionDetail />} />
              <Route path="/feedback" element={<Reviews />} />
              <Route path="/:type" element={<DesignDetails />} />
            </Routes>
          </main>

          <WhatsApp />
        </>
      )}

    </BrowserRouter>
  );
}

export default App;