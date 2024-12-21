import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Link,
  Route,
  Routes,
  Router,
  BrowserRouter as Routers,
} from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Parentaaa from "./components/parentaaa/Parentaaa";

function App() {
  return (
    <>
      {/* <Routers>
        <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Routers> */}
      <Parentaaa />
    </>
  );
}

export default App;
