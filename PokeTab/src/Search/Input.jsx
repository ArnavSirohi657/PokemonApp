import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({ pokemon, handleChange }) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="d-flex justify-content-center"
      sx={{
        '& > :not(style)': { width: '100%', maxWidth: '400px' },
      }}
    >
      <TextField
        id="pokemon-input"
        label="🔍 Search Pokémon"
        variant="filled"
        value={pokemon}
        onChange={handleChange}
        fullWidth
        sx={{
          backgroundColor: "#222",
          input: { color: "#fff", fontWeight: '500', letterSpacing: '0.5px' },
          "& .MuiInputBase-root": {
            backgroundColor: "#333",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)"
          },
          "& .MuiInputBase-root:hover": {
            backgroundColor: "#444",
          },
          "& .MuiInputLabel-root": {
            color: "rgba(255,255,255,0.7)",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#fff",
          }
        }}
      />
    </Box>
  );
}
