import { Box, Stack } from "@mui/material";
import { React } from "react";
import { ChannelCard, VideoCard } from "./";

const Video = ({ videos }) => {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
      {videos.map((items, idx) => (
        <Box key={idx}>
          {items.id.videoId && <VideoCard video={items} />}
          {items.id.channelId && <ChannelCard channelDetail={items} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Video;
