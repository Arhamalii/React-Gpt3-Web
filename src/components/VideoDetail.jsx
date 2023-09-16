import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
// import {  Typography,Box,Stack} from "@mui/material";
// import {CheckCircle} from "@mui/icons-material";
// import {  Video} from "./";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);
  if (!videoDetail?.snippet) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              controls
              url={`https://www.youtube.com/watch?v=${id}`}
            />
            <Typography variant="h2">{title}</Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
