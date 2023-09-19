import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constant";
const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "94.6%" },
        flexDirection: { xs: "row", md: "column" },
        mb: { xs: "1rem", md: 0 },
      }}
    >
      {categories.map((ct, i) => (
        <button
          className="category-btn"
          style={{
            background: ct.name === selectedCategory && "#fc1503",
            color: "white",
          }}
          id={i === 1 ? "long-btn" : ""}
          key={ct.name}
          onClick={() => {
            setSelectedCategory(ct.name);
          }}
        >
          <span
            style={{
              color: ct.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {ct.icon}
          </span>
          <span style={{ opacity: ct.name === selectedCategory ? "1" : "0.8" }}>
            {ct.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
