import React from 'react'
import styled from "styled-components";
import { useState, useRef } from 'react';
import axios from 'axios'
import { playlistid, playlistNameGlobal } from '../store/playlistid';
import Logo from './Logo';
import {Link} from "react-router-dom";




const StyledLink = styled(Link)`
  color: #e5e5e5;
  text-decoration: none;
  font-size: 15px;
  padding 0px 10px 10px 20px;
  width: 300px;
`;

const Title = styled.h1`
    color: #e5e5e5;
`;

const Search = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 15px;
  outline: none;
  border: 1px #a3a3a3 solid;
  background: none;
  color: white;
  padding-left 20px;

  ::placeholder {
    color: #e5e5e5;
  }

`;

const Button = styled.button`
  height: 40px;
  border-radius: 5px;
  outline: none;
  background: none;
  border: none;
  background-color: #ff0000;
  color: #e5e5e5;
  margin-left: 10px;
`;

const Form = styled.form`
  text-align: center;
  margin-bottom: 20px;
`;



function CreatePlaylist() {
  const inputRef = useRef('');
  const [playlistName, setPlaylistName] = useState([]);
  const handleCreatePlaylist = (playlistId) => {
    axios.get(`https://youtube.thorsteinsson.is/api/playlists/${playlistid}`)
      .then(function (response) {
        console.log(response.data.name);
        setPlaylistName(prevPlaylistName => [...prevPlaylistName, response.data.name]);
        playlistNameGlobal.push(response.data.name)
      })
      .catch(function (error) {
        console.log(error);
        setPlaylistName(prevPlaylistName => [...prevPlaylistName, error.data.name]);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let value = inputRef.current.value;
    axios.post(' https://youtube.thorsteinsson.is/api/playlists', {
      name : value,
      videos : []
    })
    .then(function (response) {
      console.log(response);
      playlistid.push(response.data.id);
      console.log(playlistid);
      handleCreatePlaylist(response.data.id);
    })
    .catch(function (error) {
      console.log(error);
      playlistid.push(error);
      handleCreatePlaylist(error.data.id);
    });
  }

  return (
    <div>
      <Logo />
      <Title>Create Playlist</Title>
      <Form onSubmit={handleSubmit}>
        <Search placeholder="Playlist name" ref={inputRef} />
        <Button type="submit">Create</Button>
        <ul>
          {playlistNameGlobal.map((item, itemIndex) => {
            return <StyledLink key={itemIndex} to={`/playlist/${playlistid}`}>{item}</StyledLink>;
          })}
        </ul>
      </Form>
    </div>
  );
}


export default CreatePlaylist