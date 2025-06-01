import Result from "../Display/Result";
import { useState } from "react";
import Input from "./Input";
import { getPokemon } from "../Api/Api";  
import Control from "./Control";
import "../CSS/SearchBox.css";

export default function SearchBox() {
  const [pokemon, setPokemon] = useState("");
  const [data, setData] = useState(null);

  const handleChange = (event) => setPokemon(event.target.value);

  const handleSubmit = async () => {
    if (pokemon.trim()) {
      const response = await getPokemon(pokemon.trim().toLowerCase()); 
      setData(response); 
    }
  };

  const resetChange = () => {
    setData(null);
    setPokemon("");
  };

  return (
    <div className="pokemon-container">
      <div className="pokemon-box">
        <h2 className="pokemon-title">🔍 Search Your Pokémon</h2>

        <div className="pokemon-input-group mb-3">
          <Input pokemon={pokemon} handleChange={handleChange} />
        </div>

        {/* Buttons in one row */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          <Control handleSubmit={handleSubmit} content="Submit" color={"blue"} />
          <Control resetChange={resetChange} content="Reset" color={"red"}/>
        </div>

        {data && (
          <div className="pokemon-result mt-4">
            <Result result={data} />
          </div>
        )}
      </div>
    </div>
  );
}
