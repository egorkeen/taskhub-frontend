import React from 'react';
import { Route, Routes } from "react-router-dom";
// pages
import StartPage from "@pages/start/components/start-page/start-page";
import SignIn from "@pages/auth/components/sign-in/sign-in";
import SignUp from "@pages/auth/components/sign-up/sign-up";
import Boards from '@pages/boards/components/boards/boards';
import BoardPage from "@pages/board/components/board-page/board-page";

function App() {
  return (
    <Routes>
      <Route path="/start" element={<StartPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route path="/boards" element={<Boards />} />
      <Route path="/boards/:boardId" element={<BoardPage />} />
    </Routes>
  );
}

export default App;
