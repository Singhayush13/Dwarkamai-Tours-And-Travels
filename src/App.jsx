import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Estimate from "./pages/Estimate";

function App() {
  const [theme, setTheme] = useState("light"); // "light" | "dark"

  useEffect(() => {
    // Apply theme class on body for background
    if (theme === "dark") {
      document.body.classList.add("bg-dark", "text-light");
      document.body.classList.remove("bg-light", "text-dark");
    } else {
      document.body.classList.add("bg-light", "text-dark");
      document.body.classList.remove("bg-dark", "text-light");
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
