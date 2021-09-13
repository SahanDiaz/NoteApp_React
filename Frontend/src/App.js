import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateNote from "./components/CreateNote";
import Home from "./components/Home";
import Notes from "./components/Notes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/createNotes">
            <CreateNote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
