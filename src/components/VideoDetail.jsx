import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Video } from "./";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(
      (data) => setVideoDetail(data.items[0]),

      fetchFromAPI(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      ).then((data) => setVideos(data.items))
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box height={"100%"} className="box">
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-around"}
      >
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              controls
              url={`https://www.youtube.com/watch?v=${id}`}
            />
            <Typography
              variant="h5"
              color={"#fff"}
              fontWeight="bold"
              p={2}
              fontSize={{ xs: "1rem", sm: "24px" }}
            >
              {title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ color: "#fff" }}
              // p={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                  fontSize={{ xs: ".8rem", sm: "1rem" }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: { xs: "11px", sm: "12px" },
                      color: "gray",
                      ml: "5px",
                      verticalAlign: "middle",
                      mb: { xs: ".07rem", sm: ".18rem" },
                    }}
                  />
                </Typography>
              </Link>

              <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
                <Typography
                  variant="body1"
                  sx={{ opacity: ".7" }}
                  fontSize={{ xs: ".8rem", sm: "1rem" }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: ".7" }}
                  fontSize={{ xs: ".8rem", sm: "1rem" }}
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Video videos={videos} direction={{ xs: "row", md: "column" }} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
