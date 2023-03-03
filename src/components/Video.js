import React from 'react'

function Video({data}) {
  return (
    <div>
         <ul>
        {data.status !== false ? (
        <>
        <ul>
            {data.map((item, itemIndex) => {
              return (
                <li key={itemIndex}>{item.title}
                <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} title={item.title}
                  width="560" height="315" frameborder="0" allowfullscreen></iframe>
                  </li>
              );

            })}
          </ul>
            </>
      ) : (
        <div>No video found with this tile</div>
      )}
        </ul>
    </div>
  );
}

export default Video