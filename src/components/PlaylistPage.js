import React from 'react'
import styled from "styled-components";
import Logo from './Logo';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import useSWR from 'swr'
import Video from './Video';
import Playlists from './Playlists';
import {Link} from "react-router-dom";



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

    console.log(data)

    return (
      <>
        <Logo />
        <Title>Playlist Page: {data.name}</Title>
        <ul>
          {data.videos ? (
            data.videos.map((item, itemIndex) => {
              return(
                <Container>
                <Stack key={itemIndex}>
                  <Img src={item.thumbnailUrl} alt='' />
                  <StyledLink to={`/video/${item.videoId}`}>{item.title}</StyledLink>
                  <Playlists videoId={item.videoId}/>
                </Stack>
                <Delete>Delete</Delete>
                </Container>
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
