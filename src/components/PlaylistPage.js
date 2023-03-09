import React from 'react'
import styled from "styled-components";
import Logo from './Logo';
import { useParams } from 'react-router-dom';
import axios from 'axios'

import Playlists from './Playlists';
import {Link} from "react-router-dom";
import { useState, useEffect, } from 'react';




const Title = styled.h1`
    color: #e5e5e5;
`;

const StyledLink = styled(Link)`
  color: #e5e5e5;
  text-decoration: none;
  font-size: 15px;
  padding 0px 10px 10px 20px;
  width: 300px;
`;


const Img = styled.img`
    padding: 20px;
    border-radius: 30px;
    width: 300px
`;

const Stack = styled.div`
    display: flex;
    flex-direction: column;

`;

const Delete = styled.button`
  height: 40px;
  width: 50px;
  border-radius: 5px;
  outline: none;
  background: none;
  border: none;
  background-color: #ff0000;
  color: #e5e5e5;
  margin-left: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const fetcher = url => axios.get(url).then(res => res.data)
function PlaylistPage() {
  const [playlist, setPlaylist] = useState([]);
  const { playlistId } = useParams();

  useEffect(() => {
    axios.get(`https://youtube.thorsteinsson.is/api/playlists/${playlistId}`)
      .then(res => {
        setPlaylist(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = (videoId) => {
    const updatedPlaylist = {
      ...playlist,
      videos: playlist.videos.filter(video => video.videoId !== videoId)
    };

    axios.put(`https://youtube.thorsteinsson.is/api/playlists/${playlistId}`, updatedPlaylist)
      .then(res => {
        setPlaylist(updatedPlaylist);
      })
      .catch(err => {
        console.log(err);
      });
  };

  console.log(playlist)

  return (
    <div>
      <Logo></Logo>
      <Title>{playlist.name}</Title>
      <ul>
        {playlist.videos && playlist.videos.map(video => (
          <li key={video.videoId}>
            <Container>
              <Stack>
                <Title>{video.title}</Title>
                <Img src={video.thumbnailUrl} alt='' />
                <StyledLink to={`/video/${video.videoId}`}>{video.title}</StyledLink>
                <Playlists videoId={video.videoId}/>
              </Stack>
                <Delete onClick={() => handleDelete(video.videoId)}>Delete</Delete>
            </Container>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistPage
