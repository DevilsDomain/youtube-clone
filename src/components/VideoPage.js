import React from 'react'
import { useParams } from 'react-router-dom';


function VideoPage() {
    let {videoId, data} = useParams()


  return (
    <div>
        <h1>{data.title}</h1>
        <iframe src={`https://www.youtube.com/embed/${videoId}`} title={data.title}
         width="560" height="315" frameborder="0" allowfullscreen></iframe>

    </div>
  );
}

export default VideoPage