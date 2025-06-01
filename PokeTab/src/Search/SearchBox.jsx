import Result from "../Display/Result";
import "./SearchBox.css"
import { useState } from "react";
import SearchTab from "./SearchTab";
import Input from "./Input";
import {  getPokemon } from "../Api/Api";  // Import the function, not as a component
import Update from "./Update";

export default function SearchBox() {
    const [pokemon, setPokemon] = useState("");
    const [data, setData] = useState(null);

    const handleChange = (event) => {
        setPokemon(event.target.value);
    };

    const handleSubmit = async () => {
        if (pokemon.trim()) {
            const response = await getPokemon(pokemon.trim().toLowerCase()); 
            setData(response); 
        }
    };
    let resetChange=()=>{
        setData("")
        setPokemon("")
    }

    return (
        <div className="pokee"> 
            <Input pokemon={pokemon} handleChange={handleChange} />
            <br></br>  <br></br> <br></br>
            <SearchTab handleSubmit={handleSubmit} />
            <br></br> <br></br>
            <Result result={data}/>
            <Update resetChange={resetChange}/>

    
        </div>
    );
}
