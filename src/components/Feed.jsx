import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { SideBar, Video } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data?.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "89.6vh" },
          borderRight: "1px solid #3d3d3d",
          position: "sticky",
          top: { sx: "0", md: "77.6px" },
          px: { sx: 0, md: 0.4 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.5,
            color: "#fff",
            width: { sx: "auto", md: "max-content" },
            px: { sx: 0, md: 0.1 },
          }}
        >
          CopyRight &copy;2022 Tube
        </Typography>
      </Box>

      <Box
        px={2}
        sx={{
          minWidth: "80vw",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#f31503" }}> videos</span>
        </Typography>
        <Video videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
