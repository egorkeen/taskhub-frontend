import React from 'react';
import { Route, Routes } from "react-router-dom";
import StartPage from "../StartPage/StartPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Boards from '../Boards/Boards';

function App() {
  return (
    <Routes>
      <Route path="/start" element={<StartPage />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/boards" element={<Boards />} />
    </Routes>
  );
}

export default App;
