import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        onChange={() => {}}
        placeholder="Search..."
        value=""
        style={{ borderRadius: 20, paddingLeft:'20px'}}
      />
      <IconButton
        type="submit"
        sx={{
          color: "red",
          p: "10px",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
