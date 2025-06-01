import { useState } from "react";
import "./Index.css";
import "./App.css";
import SearchBox from "./Search/SearchBox";

function App() {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
      </button>
      
      <h1 className="head1">POKETAB</h1>
      <SearchBox />
    </div>
  );
}

export default App;
