import {Link} from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const StyledLink = styled(Link)`
  color: #e5e5e5;
  text-decoration: none;
  font-size: 15px;
  padding 0px 10px 10px 20px;
  width: 300px;
`;

const Container = styled.div`
    width: 1400px;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 43px;
`;

const Img = styled.img`
    padding: 20px;
    border-radius: 30px;
    width: 300px
`;

const Stack = styled.div`
    display: flex;
    flex-direction: column;

`;

const Playlist = styled.button`
  margin-left: 20px;
  padding: 5px;
`;

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: row;
`;




function Video({data}) {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(!open);
  };

  const playlists = ['name1', 'name2', 'name3']


  return (
    <Container>
        {data.map((item, itemIndex) => {
            return (
            <Stack key={itemIndex}>
                 <Img src={item.snippet.thumbnails.url} alt='' />
                <StyledLink to={`/video/${item.id.videoId}`}>{item.title}</StyledLink>
                <PlaylistContainer>
                  <Playlist onClick={handleOpen}>Add</Playlist>
                  {console.log(open)}
                  {open && (
                  playlists.map((playlist, playlistIndex) => {
                    return(
                      <Playlist key={playlistIndex}>{playlist}</Playlist>
                    );
                    })
                  )}
                </PlaylistContainer>
            </Stack>
            );
        })}
    </Container>
  );
}

export default Video