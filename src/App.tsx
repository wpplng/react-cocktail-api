import { Container, styled, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router';
import Navbar from './components/Layout/Navbar';
import { theme } from './styles/theme';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <StyledContainer maxWidth='md'>
        <Outlet />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
