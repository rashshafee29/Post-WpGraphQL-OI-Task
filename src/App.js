import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route } from 'react-router-dom'
import Posts from './Posts/Posts'
import Post from './Posts/Post'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const client = new ApolloClient({
  uri: 'http://localhost:8888/rash29/graphql',
})


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <Box m={5}>

            <Typography component="h1" variant="h1" align="center"
              color="textPrimary" gutterBottom>
              Posts
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

export default App;
