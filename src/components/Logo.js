import styled from "styled-components";
import React from 'react'
import {Link} from "react-router-dom";


const Title = styled(Link)`
  color: #e5e5e5;
  text-decoration: none;
  font-size: 50px;
  font-weight: 700;
  margin-top: 100px;
`;

const Container = styled.div`
    text-align: center;
`;

function Logo() {
  return (
    <Container>
        <Title to="/">YouTube?🤡</Title>
    </Container>
  )
}

export default Logo