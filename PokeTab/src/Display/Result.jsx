import "./Result.css";

export default function Result({ result}) {
    if (!result) {
        return <p className="error-message">No Pokémon data found. Try searching!</p>;
    }
    

    return (
        <div className="main">
            <p><strong>Name:</strong> {result.name}</p>
            <p><strong>Height:</strong> {result.height}</p>
            <p><strong>Weight:</strong> {result.weight}</p>
        </div>
    );
}
