import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Genres from "./components/Genres";
import Genre from "./components/Genre";
import Playtypes from "./components/Playtypes";
import Platforms from "./components/Platforms";
import Platform from "./components/Platform";
import Playtype from "./components/Playtype";
import CreateSessionPage from "./components/createSession";
import MakeGamePage from "./components/makeGame";
import Games from "./components/Games";
import SessionsByGame from "./components/SessionsByGame";
import SessionPage from "./components/SessionPage";
import Profile from "./components/Profile";
import Chats from "./components/chats";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {isLoaded && (
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        )}

        <Route path="/genres/:genreId">
          <Genre />
        </Route>

        <Route path="/genres" exact>
          <Genres />
        </Route>
        <Route path="/playtypes/:id">
          <Playtype />
        </Route>
        <Route path="/playtypes">
          <Playtypes />
        </Route>
        <Route path="/platforms/:id">
          <Platform />
        </Route>
        <Route path="/platforms">
          <Platforms />
        </Route>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/createSession">
          <CreateSessionPage />
        </Route>
        <Route path="/sessions/game/:id">
          <SessionsByGame />
        </Route>
        <Route path="/sessions/:id" exact>
          <SessionPage />
        </Route>
        <Route path="/chats">
          <Chats />
        </Route>
        <Route path="/profiles/:id">
          <Profile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
