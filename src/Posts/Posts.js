import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import theme from '../theme';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { Box, Card, CardHeader } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

const Posts = () => (
    <Query query={gql`
    {
      posts {
        edges {
          node {
            id
            slug
            title
            content
            date
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
      }
    }
  `}>
        {
            ({ loading, error, data }) => {
                if (loading) {
                    return (
                        <Box m={20}>
                            <LinearProgress />
                        </Box>
                    )
                }
                return (<div>
                    {
                        data.posts.edges.map((post, key) => {
                            return (
                                <Box key={key}>
                                    <CssBaseline />
                                    <Container maxWidth="md">
                                        <Box m={5}>
                                            <Card>
                                                <CardHeader
                                                    title={post.node.title}
                                                    subheader={post.node.author.node.name}
                                                />
                                                <Box p={0.5} m={1} component="contained" variant="h6" align="left"
                                                    style={{ color: theme.palette.text.red }} gutterBottom>
                                                    {post.node.date}
                                                </Box>
                                                <Box m={1}>
                                                    <Button variant="text" size="small"
                                                        style={{ background: theme.palette.info.main, color: theme.palette.text.alttext }}
                                                        component={Link} to={`/post/${post.node.id}`}>
                                                        Read full post
                                                    </Button>
                                                </Box>
                                            </Card>

                                        </Box>
                                    </Container>
                                </Box>
                            )
                        })
                    }
                </div>)
            }
        }

    </Query>
)

export default Posts;