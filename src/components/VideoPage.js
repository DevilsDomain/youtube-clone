import React from 'react'
import { useParams } from 'react-router-dom';


function VideoPage() {
    let {videoId} = useParams()


  return (
    <div>
        <h1>VideoPage</h1>
        <iframe src={`https://www.youtube.com/embed/${videoId}`}
         width="560" height="315" frameborder="0" allowfullscreen></iframe>

    </div>
  );
}

export default VideoPage