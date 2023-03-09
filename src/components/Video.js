import {Link} from "react-router-dom";
import styled from "styled-components";
import Playlists from "./Playlists";

const StyledLink = styled(Link)`
  color: #e5e5e5;
  text-decoration: none;
  font-size: 15px;
  padding 0px 10px 10px 20px;
  width: 300px;
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
function Video({item, itemIndex}) {
    if (!item || !item.snippet) {
      return null;
    }
  
    return (
      <Stack key={itemIndex}>
        <Img src={item.snippet.thumbnails.url} alt='' />
        <StyledLink to={`/video/${item.id.videoId}`}>{item.snippet.title}</StyledLink>
        <Playlists />
      </Stack>
    );
}

export default Video