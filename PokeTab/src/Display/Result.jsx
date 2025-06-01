

export default function Result({ result }) {
  if (!result) {
    return (
      <div className="text-center mt-3">
        <p className="error-message text-danger fw-semibold">
          ⚠️ No Pokémon data found. Try searching!
        </p>
      </div>
    );
  }

  return (
    <div className="result-card shadow-sm p-4 rounded bg-light text-dark mx-auto" style={{ maxWidth: "400px" }}>
      <h4 className="text-center mb-3 text-primary">🎯 Pokémon Details</h4>
      <hr />
      <p><strong>Name:</strong> {capitalize(result.name)}</p>
      <p><strong>Height:</strong> {result.height} decimetres</p>
      <p><strong>Weight:</strong> {result.weight} hectograms</p>
    </div>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
