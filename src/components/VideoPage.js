import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import useSWR from 'swr'
import { useState, useRef } from 'react';
import Video from './Video';
import SearchBar from '../SearchBar';
import {Link} from "react-router-dom";

function VideoPage() {
    let {videoId} = useParams()
    const [recText, setRecText] = useState('cat')
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error } = useSWR( ` https://youtube.thorsteinsson.is/api/videos/${videoId}`, fetcher)
    const { data: rec, error: recError } = useSWR(`https://youtube.thorsteinsson.is/api/search?q=${recText}`, fetcher);

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
        <div>
            <div>
                <h1>{data.title}</h1>
                <iframe src={`https://www.youtube.com/embed/${videoId}`} title={data.title}
                width="560" height="315" frameborder="0" allowfullscreen></iframe>
                <p>{data.description}</p>
            </div>
            <h1>Recommendent</h1>
            {rec ? (
                <Video data={rec}/>
            ) : (
                <div>Loading recommendations...</div>
            )}
        </div>
    );
}

export default VideoPage;

