import React from 'react'
import styled from "styled-components";
import { useState, useRef } from 'react';
import axios from 'axios'
import { playlistid } from '../store/playlistid';
import Logo from './Logo';



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


  const handleSubmit = (event) => {
    event.preventDefault();
    let value = inputRef.current.value;
    axios.post(' https://youtube.thorsteinsson.is/api/playlists', {
      name : value
    })
    .then(function (response) {
      console.log(response);
      playlistid.push(response.data.id);
      console.log(playlistid);

    })
    .catch(function (error) {
      console.log(error);
      playlistid.push(error)
    });
  }



  return (
    <div>
        <Logo />
        <Title>Create Playlist</Title>
        <Form onSubmit={handleSubmit}>
        <Search
          placeholder="Playlist name"
          ref={inputRef}
        />
        <Button type="submit">
          Create
        </Button>
        <ul>
        {playlistid.map((item, itemIndex) => {
          return(
            <li key={itemIndex}>{item}</li>
          );
        })}
        </ul>
      </Form>
    </div>
  )
}

export default CreatePlaylist