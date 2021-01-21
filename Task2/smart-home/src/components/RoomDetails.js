import React from "react";
import styled from "styled-components";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const RoomDetails = () => {
  return (
    <Wrapper>
      <Button>
        <Link to="/">
          <FaArrowCircleLeft />
        </Link>
      </Button>
    </Wrapper>
  );
};

export default RoomDetails;

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background-color: palevioletred;
  text-align: left;
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
