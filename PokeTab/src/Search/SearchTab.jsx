import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SearchTab({handleSubmit}){
    return(
        <div>
             <Stack spacing={2} direction="row">
             <Button 
                variant="contained" 
                onClick={handleSubmit} 
                sx={{ backgroundColor: "#333", color: "white", "&:hover": { backgroundColor: "#111" } }}
            >
                SUBMIT
            </Button>
            </Stack>
        </div>
    )
}