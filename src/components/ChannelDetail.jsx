import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const resultId = id.slice(0, -1);
console.log(id);
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${resultId}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${resultId}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  console.log(channelDetail);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            height: "300px",
            zIndex: 10,
          }}
        ></div>
        <ChannelCard channelDetails={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box
          sx={{
            marginRight: { sm: "100px" },
          }}
        />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;


