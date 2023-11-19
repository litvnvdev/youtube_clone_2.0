import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" m={2} variant="h5" fontWeight="bold">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ md: "h6", sm: "subtitle1" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      color: "gray",
                      fontSize: "12px",
                      marginLeft: "5px",
                    }}
                  />
                </Typography>
              </Link>
              <Stack
                direction="row"
                gap="15px"
                alignItems="center"
                justifyContent="space-between"
              >
                <VisibilityIcon
                  sx={{
                    color: "gray",
                    fontSize: "17px",
                  }}
                />
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>

                <ThumbUpIcon
                  sx={{
                    marginLeft: "10px",
                    color: "gray",
                    fontSize: "17px",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7, marginLeft: "5px" }}
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
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
