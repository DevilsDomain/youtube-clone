import React from 'react'
import {Link} from "react-router-dom";
import VideoPage from './VideoPage';


function Video({data}) {



  return (
    <div className='container'>
        {data.map((item, itemIndex) => {
            return (
            <div key={itemIndex} className="stack">
                <Link to={`/video/${item.id.videoId}/${data}`}>{item.title}</Link>
                {/* <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} title={item.title}
                 width="560" height="315" frameborder="0" allowfullscreen></iframe> */}
                 <img src={item.snippet.thumbnails.url} alt=''></img>
            </div>
            );
        })}
    </div>
  );
}

export default Video