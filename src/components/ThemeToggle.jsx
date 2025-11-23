import React from "react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="d-flex align-items-center justify-content-center border-0 shadow-sm"
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        background: isDark ? "#ffffff" : "#121212",
        color: isDark ? "#121212" : "#ffffff",
        fontSize: "1.25rem",
        transition: "all 0.25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.12)";
        e.currentTarget.style.boxShadow =
          "0 6px 15px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow =
          "0 4px 10px rgba(0,0,0,0.15)";
      }}
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
