import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";


const Title = styled(Link)`
  color: #e5e5e5;
  text-decoration: none;
  font-size: 50px;
  font-weight: 700;
  margin-left: 570px;
  margin-top: 100px;
`;

function Logo() {
  return (
     <Title to="/">YouTube?🤡</Title>
  )
}

export default Logo