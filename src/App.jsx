import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDeatils";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
<ScrollToTop />

    <SmoothScroll />

      {loading && (
        <Loader onFinish={() => setLoading(false)} />
      )}

      {!loading && (

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/projects/:id" element={<ProjectDetails />} />

        </Routes>

      )}

    </BrowserRouter>
  );
}

export default App;