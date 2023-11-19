import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('')
    }
  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 }
      }}
    >
      <input
        className="search-bar"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        value={searchTerm}
        style={{background:'transparent', paddingLeft:'5px'}}
      />
      <IconButton
        type="submit"
        sx={{
          color: "red",
          padding: "10px",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
