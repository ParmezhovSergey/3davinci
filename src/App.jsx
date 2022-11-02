import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/3davinci" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
