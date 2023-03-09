import React from 'react'
import {Link} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { playlistNameGlobal, playlistid } from '../store/playlistid';
import axios from 'axios'
import useSWR from 'swr'

// css
const Playlist = styled.button`
  margin-left: 20px;
  padding: 5px;
`;

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  margin-left: 20px;
  padding: 5px;
  color: #e5e5e5;
`;


// const fetcher = url => axios.get(url).then(res => res.data)
function Playlists({videoId}) {
    // const { data, error } = useSWR( ` https://youtube.thorsteinsson.is/api/videos/${videoId}`, fetcher)
    const [open, setOpen] = useState(false);
    const [video, setVideo] = useState([]);
    const handleOpen = () => {
        setOpen(!open);
    };

    const handleClick = (playlistIndex, videoId, playlist) => {
        axios.get(`https://youtube.thorsteinsson.is/api/videos/${videoId}`)
          .then(function (response) {
            console.log(response);
            axios.post(`https://youtube.thorsteinsson.is/api/playlists/${playlistid[playlistIndex]}/videos`, response.data)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      
      
    
      
    
      


  return (
    <PlaylistContainer>
            <Playlist onClick={handleOpen}>➡️</Playlist>
            {console.log(open)}
            {open && (
            <>
            <StyledLink to="/create">Create</StyledLink>
            {playlistNameGlobal.map((playlist, playlistIndex) => {
              return(
                <Playlist key={playlistIndex} onClick={() => handleClick(playlistIndex, videoId, playlist)}>{playlist}</Playlist>
              );
            })}
          </>
            )}
    </PlaylistContainer>
  )
}

export default Playlists