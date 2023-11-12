import { Link } from "react-router-dom";
import { Box, Typography, CardMedia, CardContent } from "@mui/material";
import { Check, CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetails }) => {
  console.log(channelDetails);
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:{xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto'
      }}
    >
      <Link to={`/channel/${channelDetails?.id?.channelId}}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            component="img"
            image={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetails?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "2px solid #e3e3e3",
            }}
          />
          <Typography variant='h6'>
            {channelDetails?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: 15,
                ml: '5px',
                color: 'gray'
              }}
            />
          </Typography>
          {channelDetails?.statistics?.subcscriberCount && (
            <Typography>
              {parseInt(channelDetails.statistics.subcscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;