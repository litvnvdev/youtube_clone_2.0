import { useState } from "react";
import { Stack, Box } from "@mui/material";

import { categories } from "../utils/constants";


const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        flexDirection: { md: "column" },
        height: { sx: "auto", md: "95%" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={()=>setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "#fff",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.7",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
