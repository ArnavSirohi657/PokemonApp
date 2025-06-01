import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({pokemon,handleChange}){
    return(
        <div>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField 
    id="filled-basic" 
    label="KNOW ABOUT POKEMON" 
    variant="filled" 
    value={pokemon}  
    onChange={handleChange} 
    sx={{
        backgroundColor: "#333",  // Dark background
        color: "#FFF",            // Pure white text
        input: { color: "#FFF" }, // White text inside input
        "& .MuiInputBase-root": { backgroundColor: "#333" }, // Override MUI
        "&:hover .MuiInputBase-root": { backgroundColor: "#111" }, // Darker on hover
        "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.9)" }, // Brighter label
        "& .MuiInputLabel-root.Mui-focused": { color: "#FFF" } // Bright white when focused
    }}
/>

            </Box>
        </div>
    )
}