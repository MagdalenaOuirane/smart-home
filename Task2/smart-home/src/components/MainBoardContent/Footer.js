import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";

const Footer = (props) => {
  return (
    <Wrapper>
      <Button onClick={props.triggerAddRoom}>
        <FaPlus />
      </Button>

      <Button onClick={props.triggerDeleteAllRooms}>
        {" "}
        <BsTrash />
      </Button>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  text-align: center;
  margin-top: 4vh;
  position: relative;
  left: 0;
  bottom: 1%;
  right: 0;
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
