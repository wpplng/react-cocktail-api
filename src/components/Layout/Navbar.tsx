import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import { NavLink } from 'react-router';

const Navbar = (): ReactElement => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component={NavLink}
            to='/'
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
          >
            Cocktail Wiki
          </Typography>

          <Box>
            <Button
              color='inherit'
              component={NavLink}
              to='/'
              sx={{
                '&.active': {
                  borderBottom: '2px solid white',
                  borderRadius: '0',
                  fontWeight: 'bold',
                },
              }}
            >
              Home
            </Button>
            <Button
              color='inherit'
              component={NavLink}
              to='/search'
              sx={{
                '&.active': {
                  borderBottom: '2px solid white',
                  borderRadius: '0',
                  fontWeight: 'bold',
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
