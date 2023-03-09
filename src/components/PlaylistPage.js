import React from 'react'
import styled from "styled-components";
import Logo from './Logo';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import useSWR from 'swr'
import Video from './Video';


const Title = styled.h1`
    color: #e5e5e5;
`;


const fetcher = url => axios.get(url).then(res => res.data)
function PlaylistPage() {
  let {playlistId} = useParams()
  const { data, error } = useSWR( `https://youtube.thorsteinsson.is/api/playlists/${playlistId}`, fetcher)

  if (!data) {
    return "Loading...";
  }
  
  if(error) {
    return(
      <p>Oops, looks like we are down!</p>
      );
    }


    return (
      <>
        <Logo />
        <Title>PlaylistPage {playlistId}</Title>
        <ul>
          {data.videos ? (
            data.videos.map((item, itemIndex) => {
              return(
                <li key={itemIndex}>{item.title}</li>
              );
            })
          ) : (
            <p>No videos in this playlist yet!</p>
          )}
        </ul>
      </>
    );

}

export default PlaylistPage
