import React from "react";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import CharacterList from "./components/CharacterList/CharacterList";
import ComicsList from "./components/ComicsList/ComicsList";
import EventsList from "./components/EventsList/EventsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "./components/Page404/Page404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterList/>}/>
          <Route path="/comics" element={<ComicsList />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
