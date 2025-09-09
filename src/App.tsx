import { Container } from '@mui/material';
import { Outlet } from 'react-router';
import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth='md' sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
