export async function getPokemon(pokemon) {
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    try {
        let response = await fetch(API_URL);
        if (!response.ok) throw new Error("Pokémon not found");

        let jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.log("Error fetching Pokémon data:", error);
        return null; 
    }
}
