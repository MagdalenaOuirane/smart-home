import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>It seems page you are looking for no longer exists.</h3>
        <Link to="/">BACK HOME</Link>
      </div>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  }
  background-color: #ffe0f0; ;
`;
