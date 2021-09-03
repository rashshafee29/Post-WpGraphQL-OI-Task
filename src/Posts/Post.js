import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Parser } from 'html-to-react'
import theme from '../theme';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box, Card, Grid } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

class Post extends Component {
    render() {
        const props = this.props;
        console.log({ props });

        if (!props.data.post) {
            return (
                <Box m={20}>
                    <LinearProgress />
                </Box>
            )
        }

        return (
            <Box>
                <CssBaseline />
                <Container maxWidth="md">
                    <Card>
                        <Box m={1}>
                            <Typography component="h3" variant="h3" align="left"
                                color="textPrimary" gutterBottom>
                                {props.data.post.title}
                            </Typography>
                        </Box>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={4}>
                                <Box p={0.5} m={1} component="contained" variant="h6" align="left"
                                    style={{ background: theme.palette.info.main, color: theme.palette.text.alttext }} gutterBottom>
                                    Author: {props.data.post.author.node.name}
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                {props.data.post.categories.nodes.map((node) =>
                                    <Box p={0.5} m={1} component="contained" variant="h6" align="left"
                                        style={{ background: theme.palette.category.main, color: theme.palette.text.alttext }} gutterBottom>
                                        {node.name}
                                    </Box>
                                )}
                            </Grid>
                            <Grid item xs={4}>
                                <Box p={0.5} m={1} component="contained" variant="h6" align="left"
                                    style={{ background: theme.palette.date.main, color: theme.palette.text.alttext }} gutterBottom>
                                    {props.data.post.date}
                                </Box>
                            </Grid>
                        </Grid>
                        <Box m={2}>
                            {Parser().parse(props.data.post.content)}
                        </Box>
                    </Card>
                </Container>
            </Box>
        );
    }
}

const getSinglePost = gql`
query querySinglePost($id: ID!) {
    post(id: $id) {
      id
      date
      slug
      title
      content
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }  
`;

export default graphql(getSinglePost, {
    options: (props) => {
        const id = props.match.params.id;
        return {
            variables: {
                id
            }
        }
    }
})(Post);