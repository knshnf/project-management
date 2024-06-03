import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AssignmentIcon from '@mui/icons-material/Assignment';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { jwt_token, jwt_token_login_auth } from '../../../hooks/useAuthenticate'

import { useRouter } from 'next/router'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function Login() {
  const router = useRouter()  

  const [open, setOpen] = React.useState(false);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials = new FormData(event.currentTarget);
    const username = credentials.get('username')

    fetch('http://localhost:8080/v1/graphql', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwt_token_login_auth()}`
        },
    
        body: JSON.stringify({
          query: `{
            users(where: {username: {_eq: ${username}}}) {
              id
              username
              role
            }
          }`
        })
      })
      .then( res => res.json())
      .then(res => {

        if (res.data.users.length > 0) {
          const id = res.data.users[0].id
          const username = res.data.users[0].username
          const role = res.data.users[0].role
          const user = {id: id, username: username, role: role}
  
          const token = jwt_token(id, username, role)
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user))
          router.push('http://localhost:3000/')
        }
        else {
          setOpen(true);
        }
      })

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <AssignmentIcon fontSize='large'/>
          <Typography component="h1" variant="h5">
            PROJECT MANAGEMENT
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            {/* <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>

            <Snackbar
              ContentProps={{
                sx:{
                  color: "white",
                  bgcolor: "red",
                  fontWeight: "bold",
                  margin: "auto"
                }
              }}
              role='alert'
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={open}
              autoHideDuration={2000}
              onClose={handleClose}
              message="Login Failed: User does not exist"
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login