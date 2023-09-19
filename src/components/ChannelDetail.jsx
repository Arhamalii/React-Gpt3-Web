import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import ChannelCard from "./ChannelCard";

import Video from "./Video";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, []);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          className="gradient"
          style={{
            height: "300px",
            width: "100%",
          }}
        ></div>

        <ChannelCard channelDetail={channelDetail} marginTop={"-94px"} />
      </Box>
      <Box display={"flex"} p={2}>
        <Box sx={{ mt: { sm: "100px" } }}>
          <Video videos={videos} align={"center"} />
        </Box>
      </Box>
    </Box>
  );
};
export default ChannelDetail;
