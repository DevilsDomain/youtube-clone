import React from 'react'
import {Link} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { playlistNameGlobal } from '../store/playlistid';

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


function Playlists() {
    const [open, setOpen] = useState(false);
    const [playlistName, setPlaylistName] = useState([]);
    const handleOpen = () => {
        setOpen(!open);
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
                <Playlist key={playlistIndex}>{playlist}</Playlist>

              );
            })}
          </>
            )}
    </PlaylistContainer>
  )
}

export default Playlists