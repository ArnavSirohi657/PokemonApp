import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs"; // Optional: react-icons for better icons

export default function Mode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-light");
  };

  return (
    <button
      className={`btn btn-sm d-flex align-items-center gap-2 ${
        darkMode ? "btn-outline-light" : "btn-outline-dark"
      } rounded-pill px-3 shadow-sm`}
      onClick={toggleDarkMode}
      title="Toggle Dark Mode"
    >
      {darkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
      {darkMode ? "Light" : "Dark"}
    </button>
  );
}
