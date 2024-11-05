import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Navbar from './Components/Navbar';
import PostList from './Components/PostList';
import SearchBar from './Components/SearchBar';


//I uses  the JSONPlaceholder API to fetch a list of posts.
const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </Grid>
          <Grid item xs={12}>
            <PostList searchQuery={searchQuery} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;


