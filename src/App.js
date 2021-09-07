import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route } from 'react-router-dom'
import Posts from './Posts/Posts'
import Post from './Posts/Post'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useAuth0 } from '@auth0/auth0-react';
import Logout from './Auth/Logout';
import { LinearProgress } from '@material-ui/core'

const client = new ApolloClient({
  uri: 'http://localhost:8888/rash29/graphql',
})

function App() {
  const {isAuthenticated, isLoading, loginWithRedirect} = useAuth0();
  if (isLoading) {
    return(
      <LinearProgress/>
    )
  }
  if (!isAuthenticated) {
    loginWithRedirect()
  }
  else {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div>
            <Box m={5}>
  
              <Typography component="h1" variant="h1" align="center"
                color="textPrimary" gutterBottom>
                Posts <Logout/>
              </Typography>
            </Box>

            <div>
              <Route exact path="/" component={Posts} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/post/:id" component={Post} />
            </div>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
