import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';
import theme from '../theme';
import { Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <Box>
        <CssBaseline />
        <Container maxWidth="md">
      <Button onClick={() => logout()}
      variant="text" size="small"
      style={{ background: theme.palette.primary.red, color: theme.palette.text.alttext }}>
        Log Out
      </Button>
      </Container>
      </Box>
    )
  )
}

export default Logout