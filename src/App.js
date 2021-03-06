import './App.css';
import Login from './Login.js';
import React, {useEffect, useState} from "react";
import {getTokenFromUrl} from "./spotify.js";
import Player from './Player.js';
import {useDataLayerValue} from "./DataLayer";

//Spotify Web API library
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [{token}, dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash['access_token'];

    if(_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      console.log("[token]", token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type:"SET_USER",
          user:user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist) => {
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly: playlist,
        });
      });
    }
  },[]);

  return (
    <div className="App">
      {token ? <Player spotify = {spotify} /> : <Login/>}
      
    </div>
  );
}

export default App;
