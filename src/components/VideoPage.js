import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import useSWR from 'swr'


function VideoPage() {
    let {videoId} = useParams()
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data } = useSWR( ` https://youtube.thorsteinsson.is/api/videos/${videoId}`, fetcher)
    
    if(!data) {
        return(
            <div>Loading...</div>
        );
    }

  return (
    <div>
        <h1>{data.title}</h1>
        <iframe src={`https://www.youtube.com/embed/${videoId}`} title={data.title}
         width="560" height="315" frameborder="0" allowfullscreen></iframe>
         <p>{data.description}</p>
    </div>
  );
}

export default VideoPage