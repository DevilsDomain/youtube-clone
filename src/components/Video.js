import {Link} from "react-router-dom";

function Video({data}) {



  return (
    <div className='container'>
        {data.map((item, itemIndex) => {
            console.log(item.id.videoId);
            return (
            <div key={itemIndex} className="stack">
                <Link to={`/video/${item.id.videoId}`}>{item.title}</Link>
                 <img src={item.snippet.thumbnails.url} alt=''></img>
            </div>
            );
        })}
    </div>
  );
}

export default Video