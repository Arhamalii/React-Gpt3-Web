import { Box, Stack } from "@mui/material";
import { React } from "react";
import { ChannelCard, VideoCard } from "./";

const Video = ({ videos, align, direction }) => {
  if (!videos) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap={"wrap"}
      justifyContent={align ? align : { xs: "center", md: "start" }}
      gap={2}
    >
      {videos.map((items, idx) =>
        items?.id?.videoId || items?.id?.channelId ? (
          <Box key={idx}>
            {items.id.videoId && <VideoCard video={items} />}
            {items.id.channelId && <ChannelCard channelDetail={items} />}
          </Box>
        ) : (
          ""
        )
      )}
    </Stack>
  );
};

export default Video;
