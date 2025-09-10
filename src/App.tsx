import { Container, styled } from '@mui/material';
import { Outlet } from 'react-router';
import Navbar from './components/Layout/Navbar';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

function App() {
  return (
    <>
      <Navbar />
      <StyledContainer maxWidth='md'>
        <Outlet />
      </StyledContainer>
    </>
  );
}

export default App;
