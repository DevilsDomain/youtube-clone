import {Link} from "react-router-dom";
import styled from "styled-components";

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
    margin: auto;
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



function Video({data}) {
  return (
    <Container>
        {data.map((item, itemIndex) => {
            return (
            <Stack key={itemIndex}>
                 <Img src={item.snippet.thumbnails.url} alt='' />
                <StyledLink to={`/video/${item.id.videoId}`}>{item.title}</StyledLink>
            </Stack>
            );
        })}
    </Container>
  );
}

export default Video