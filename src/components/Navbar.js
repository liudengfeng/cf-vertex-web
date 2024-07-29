import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/tutorial">Tutorial</Button>
        <Button color="inherit" component={Link} to="/explore">Explore</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;