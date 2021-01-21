import React from "react";
import styled from "styled-components";
import {FaArrowCircleLeft} from "react-icons/fa"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <Wrapper>
      <Button>
      <Link to="/Exit"><FaArrowCircleLeft/></Link>
     </Button>
      <h1>Hello Magdalena</h1>
      <h2>Welcome to Smart Home</h2>
    </Wrapper>
  );
};

export default Navbar;


const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background-color: palevioletred;
  text-align: left;

  h1 {
    font-size:2rem;
    font-weight: bold;
    color: white;
    font-family: sans-serif;
  }

  h2 {
    font-family: sans-serif;
    color: white;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 20px;
  border-radius: 3px;
  border: 5px;
  transition: 0.5s all ease-out;
   &:hover {
    background-color: pink;
    }
`;

