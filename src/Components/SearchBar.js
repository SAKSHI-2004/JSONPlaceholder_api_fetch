import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      label="Search Posts"
      variant="outlined"
      fullWidth
      margin="normal"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
