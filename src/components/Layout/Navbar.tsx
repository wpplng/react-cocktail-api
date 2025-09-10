import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import { NavLink } from 'react-router';
import { navElements } from '../../utilities/constants';
import type { INavElement } from '../../utilities/types';

const Navbar = (): ReactElement => {
  return (
    <Box flexGrow={1}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component={NavLink}
            to='/'
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Cocktail Wiki
          </Typography>
          <Box>
            {navElements.map((el: INavElement) => (
              <Button
                key={el.id}
                color='inherit'
                component={NavLink}
                to={el.source}
                sx={{
                  '&.active': {
                    borderBottom: '2px solid white',
                    borderRadius: '0',
                    fontWeight: 'bold',
                  },
                }}
              >
                {el.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
