import React from 'react';
import { Route, Routes } from "react-router-dom";
import StartPage from "../StartPage/StartPage";

function App() {
  return (
    <Routes>
      <Route path="/start" element={<StartPage />} />
    </Routes>
  );
}

export default App;
