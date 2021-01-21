import React from "react";
import styled from "styled-components";
import Navbar from "../components/MainBoardContent/Navbar";
import RoomsList from "./MainBoardContent/RoomsList";
import Footer from "../components/MainBoardContent/Footer";

class MainBoard extends React.Component {
  
  state = {
    rooms: [
      {
        id: 1,
        name: "Room",
        members: 4,
        devices: 3,
      },
    ],
  };

  addRooms = () => {
    let arr = this.state.rooms;
    arr.push({
      id: this.state.rooms.length + 1,
      name: "Room",
      members: 5,
      devices: 3,
    });

    this.setState({ rooms: arr });

    console.log("Rooms number : ", this.state.rooms.length);
  };

  deleteAllRooms = () => {
    this.setState({ rooms: [] });

    console.log("All rooms has been deleted!");
  };

  render() {
    return (
      <Wrapper>
        <main>
          <Navbar></Navbar>
          <RoomsList rooms={this.state.rooms} />
          <Footer
            triggerAddRoom={this.addRooms}
            triggerDeleteAllRooms={this.deleteAllRooms}
          />
        </main>
      </Wrapper>
    );
  }
}

export default MainBoard;

const Wrapper = styled.section`
  background-color: #ffe0f0;
  min-height: 100vh;
`;
