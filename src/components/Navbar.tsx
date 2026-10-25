import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, Moon, Phone, Sun, X } from "lucide-react";
import { contactConfig } from "../config/contact";
import { navigation } from "../data/site";
import { useTheme } from "./ThemeContext";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><span>D</span></span>
          <span className="brand-name">
            <strong>Dwarkamai</strong>
            <small>Tours &amp; Travels</small>
          </span>
        </Link>
        <button
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          type="button"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div id="primary-navigation" className={`nav-panel${open ? " is-open" : ""}`}>
          <div className="nav-links">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            >
              {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
              <span>{theme === "light" ? "Dark" : "Light"}</span>
            </button>
            <a className="nav-phone" href={contactConfig.phoneLink} onClick={() => setOpen(false)}>
              <Phone size={14} /> {contactConfig.phoneDisplay}
            </a>
            <Link className="button button-dark nav-cta" to="/booking" onClick={() => setOpen(false)}>
              Plan your trip <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
