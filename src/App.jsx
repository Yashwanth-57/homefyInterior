import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDeatils";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import Consultation from "./pages/Consultation";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import About from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import GalleryCategory from "./pages/GAllredyCategory";
import WhatsApp from "./components/WhatsApp";


function App() {

  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
    <>
     <Navbar />

<ScrollToTop />

    <SmoothScroll />

      {loading && (
        <Loader onFinish={() => setLoading(false)} />
      )}

      {!loading && (



        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/projects/:id" element={<ProjectDetails />} />
          
<Route path="/about" element={<About />} />

<Route path="/gallery" element={<Gallery />} />

<Route path="/gallery/:category" element={<GalleryCategory />} />
          
<Route path="/consultation" element={<Consultation />} />

<Route path="/projects" element={<Projects />} />



        </Routes>

        

       

      )}
      <WhatsApp />
        
      </>

    </BrowserRouter>

    
  );
}

export default App;