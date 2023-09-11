import { Category } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constant";
const SideBar = () => {
  const selectedCategory = "New";
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: "column",
      }}
    >
      {categories.map((ct) => (
        <button
          className="category-btn"
          style={{
            background: ct.name === selectedCategory && "#fc1503",
            color: "white",
          }}
          key={Category.name}
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
