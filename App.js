import React from "react";
import Header from "./header/Header";
import Home from "./Home";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Video from "./vid.mp4";

export default function App() {
  return (
    <Router>
     <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
