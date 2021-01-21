import React from "react";
import styled from "styled-components";
import Room from "./Room";
class RoomsList extends React.Component {
  render() {
    return (
      <section className="section">
        <Wrapper className="section-center">
          {this.props.rooms.map((room) => {
            return <Room key={room.id} {...room}></Room>;
          })}
        </Wrapper>
      </section>
    );
  }
}

export default RoomsList;

const Wrapper = styled.section`
background-color: #ffe0f0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 4rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
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
