import React from "react";
import styled from "styled-components";
import { FiToggleLeft } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

class Room extends React.Component {
  render() {
    return (
      <article className="item">
        <div>
          <h1>
            {this.props.name} <span> {this.props.id} </span>
          </h1>
          <h3>{this.props.members} family members have access</h3>
          <p> {this.props.devices} Devices</p>
          <p>
            <FiToggleLeft />
          </p>
          <Button>
            <Link to="/RoomDetails">
              <AiOutlineArrowRight />
            </Link>
          </Button>
        </div>
      </article>
    );
  }
}

export default Room;

const article = styled.section`

  .item {
    border-radius: 10%;
    border:1px solid white;
    background:white;
    padding: 2rem 1rem;
    margin 0 0.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;

    h1 {
        font-size:2rem;
        font-family:sans-serif;
    }
  
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
      font-family:sans-serif;
    }
    p {
      margin-bottom: 0;
   font-family:sans-serif;
    }
   
  }
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 20px;
  margin-top: 15px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: pink;
  }
`;
