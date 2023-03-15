import { useState } from "react";
import "./App.css";
import "./server";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import VanDetail from "./pages/VanDetail";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import HostLayout from "./components/HostLayout";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />

          <Route path="/host" element={<HostLayout />} >
            <Route path="/host/dashboard" element={<Reviews />} />
            <Route path="/host/reviews" element={<Reviews />} />
            <Route path="/host/income" element={<Income />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
