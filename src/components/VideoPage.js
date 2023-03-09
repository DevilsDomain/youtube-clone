import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import useSWR from 'swr'
import { useState, useRef } from 'react';
import Video from './Video';
import SearchBar from './SearchBar';
import Logo from "./Logo";
import styled from "styled-components";
import { playlistid } from '../store/playlistid';


const Title = styled.h1`
    color: #e5e5e5;
`;

const Description = styled.p`
    color: #e5e5e5;
    font-size: 20px;
    width: 1400;

`;

const SearchTitle = styled.h1`
    color: #e5e5e5;
`;

const Container = styled.div`
    text-align: center;
`;

const Videogrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;


function VideoPage() {
    // const { playlists } = useContext(AppContext);
    let {videoId} = useParams()
    const [recText, setRecText] = useState('cat')
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error } = useSWR( ` https://youtube.thorsteinsson.is/api/videos/${videoId}`, fetcher)
    const inputRef = useRef('');
    const { data: rec, error: recError } = useSWR(`https://youtube.thorsteinsson.is/api/search?q=${recText}`, fetcher);
    const handleSearch = (searchText) => {
        setRecText(searchText);
    }
    
    if(!data) {
        return(
            <div>Loading...</div>
            );
        }
        
        if(error) {
            return(
                <div>Ooops! An error occured</div>
                );
            }
            
            console.log(rec)
            return (
                <Container>
            <Logo />
            <div>
                <Title>{data.title}</Title>
                <iframe src={`https://www.youtube.com/embed/${videoId}`} title={data.title}
                width="1400" height="700" frameborder="0" allowfullscreen></iframe>
                <Description>{data.description}</Description>
            </div>
            <SearchTitle>Search Videos</SearchTitle>
            <SearchBar inputRef={inputRef} handleSearch={handleSearch} />
            <Videogrid>
            {rec  ? (
                rec.map((item, itemIndex) => {
                    return(
                        <Video item={item} key={itemIndex}/>
                    );
                })
            ) : (
                <div>Loading recommendations...</div>
            )}
            </Videogrid>
        </Container>
    );
}

export default VideoPage;