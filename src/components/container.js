import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResponsiveGrid from './grid';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth ="xl">
        <Box sx={{ bgcolor: '', height: 'auto' ,padding:'5%'}} >
            <ResponsiveGrid/>
        </Box>
      </Container>
    </React.Fragment>
  );
}
