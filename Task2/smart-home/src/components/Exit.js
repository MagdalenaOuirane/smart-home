import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Exit= () => {
  return (
    <Wrapper>
      <div>
       <h3>Thank you for visiting my Smart Home application.</h3>
        <Link to="/">BACK HOME</Link>
      </div>
    </Wrapper>
  );
};

export default Exit;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  
  h3 {
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  }
  background-color: #ffe0f0; 
`;
