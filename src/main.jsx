import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./pages/About";
import Vans from "./pages/Vans";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <header className="bg-custom-orange-100 px-4 py-8 flex justify-between text-inter">
      <Link to="/" className="text-custom-gray-900 font-black text-2xl">#VANLIFE</Link>
      <nav className="text-custom-gray-100 font-semibold flex gap-4 items-center">
        <Link to="/about" className="hover:text-interactive-states-200 hover:underline hover:underline-offset-4 active:text-interactive-states-200 active:underline active:underline-offset-4">About</Link>
        <Link to="/vans" className="hover:text-interactive-states-200 hover:underline hover:underline-offset-4 active:text-interactive-states-200 active:underline active:underline-offset-4">Vans</Link>

      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />

    </Routes>
  </BrowserRouter>
);
