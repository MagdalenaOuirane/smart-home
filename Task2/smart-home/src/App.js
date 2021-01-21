import React from "react";
import MainBoard from "./components/MainBoard";
import RoomDetails from "./components/RoomDetails";
import Exit from "./components/Exit";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MainBoard}/>
            <Route path="/RoomDetails" component={RoomDetails} />
            <Route path="/Exit" component={Exit} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
