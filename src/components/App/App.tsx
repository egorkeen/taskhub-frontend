import React from 'react';
import { Route, Routes } from "react-router-dom";
import StartPage from "../../pages/start/components/start-page/start-page";
import Login from "../../pages/auth/components/sign-in/sign-in";
import SignUp from "../../pages/auth/components/sign-up/sign-up";
import Boards from '../../pages/boards/components/boards/boards';

function App() {
  return (
    <Routes>
      <Route path="/start" element={<StartPage />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/boards" element={<Boards />} />
    </Routes>
  );
}

export default App;
