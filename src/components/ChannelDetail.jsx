import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then(
      (data) => {
        setChannelDetail(data?.items[0]);
      }

      // fetchFromAPI(`search?channelId=${id}&part=snippet&order=data`).then(
      //   (data) => {
      //     setVideos(data?.items);
      //   }
    );
  }, []);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);",
            zIndex: 10,
            height: "300px",
          }}
        ></div>
      </Box>
    </Box>
  );
};
export default ChannelDetail;
