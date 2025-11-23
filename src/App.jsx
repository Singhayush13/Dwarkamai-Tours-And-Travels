import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Estimate from "./pages/Estimate";

function App() {
  const [theme, setTheme] = useState("light"); // "light" | "dark"

  useEffect(() => {
    // Remove Bootstrap background classes so they don't interfere
    document.body.classList.remove("bg-dark", "bg-light", "text-light", "text-dark");

    if (theme === "dark") {
      document.body.style.backgroundColor = "#000000"; // pure black
      document.body.style.color = "#ffffff";           // white text
    } else {
      document.body.style.backgroundColor = "#ffffff"; // pure white
      document.body.style.color = "#000000";           // black text
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-4 pb-5">
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/estimate" element={<Estimate theme={theme} />} />
        </Routes>
      </main>
      <Footer theme={theme} />
    </>
  );
}

export default App;
