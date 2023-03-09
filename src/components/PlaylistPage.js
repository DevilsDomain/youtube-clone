import React from 'react'
import styled from "styled-components";
import Logo from './Logo';
import { useParams } from 'react-router-dom';



const Title = styled.h1`
    color: #e5e5e5;
`;

function PlaylistPage() {
  let {playlistId} = useParams()



  return (
    <>
      <Logo></Logo>
      <Title>PlaylistPage {playlistId}</Title>
    </>
  )

}

export default PlaylistPage