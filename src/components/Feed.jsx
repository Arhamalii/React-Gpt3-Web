import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { SideBar, Video } from "./";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: "0", md: "2" },
        }}
      >
        <SideBar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          CopyRight &copy;2022 AA Tube
        </Typography>
      </Box>

      <Box px={2}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{ color: "white" }}
        >
          New
          <span style={{ color: "#f31503" }}> videos</span>
        </Typography>
        <Video />
      </Box>
    </Stack>
  );
};

export default Feed;
