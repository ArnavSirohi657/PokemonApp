import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function Update({resetChange}){


    return(
        <div>
              <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={resetChange}>Reset</Button>
                
             </Stack>
        </div>
    )
}