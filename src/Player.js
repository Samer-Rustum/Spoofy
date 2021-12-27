import React from "react";
import "./Player.css";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
  });
function Player() {
    const duration = 200;
    const [position, setPosition] = React.useState(32);
    const [paused, setPaused] = React.useState(false);
    function formatDuration(value){
        const minute = Math.floor(value/60);
        const secondLeft = value-minute*60;
        return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
    }
  return (
    <Box sx={{ display: "flex", JustifyContent: "center", justifyContent: 'space-between', bottom:0, top:"auto"}}>
      {/* Album info and pic */}
      <Box sx={{ display: "flex"}}>
        <Img
          sx={{ width: 100, height: 100, marginRight: "1vw" }}
          alt="Album Cover"
          src="https://media.discordapp.net/attachments/730260228087611504/922237335595274270/PXL_20211219_211308042.jpg?width=511&height=682"
        />
        <Stack direction="column" justifyContent="center">
          <Typography variant="subtitle1">Song Name</Typography>
          <Typography variant="subtitle1">Song Name</Typography>
        </Stack>
      </Box>
      <Stack direction="column" spacing={2} sx={{ width: '75%', justifyContent: "center"}}>
        <div className="slider">
          <Slider color="secondary" value  = {position} min={0} step={1} max={duration} onChange={(_,value)=>setPosition(value)}/>
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>{formatDuration(duration-position)}</TinyText>
        </div>
        <Stack direction="row" spacing={2} sx = {{justifyContent: "center"}}>
          <div className="nav">
            <IconButton aria-label="fastrewind" color="secondary">
              <FastRewindIcon />
            </IconButton>
            <IconButton aria-label="play" color="secondary">
              <PlayCircleIcon />
            </IconButton>
            <IconButton aria-label="fastforward" color="secondary">
              <FastForwardIcon />
            </IconButton>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}
export default Player;
