import { Container } from '@mui/material';
import { Outlet } from 'react-router';

function App() {
  return (
    <Container sx={{ mt: 4 }}>
      <Outlet />
    </Container>
  );
}

export default App;
