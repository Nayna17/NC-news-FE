import { useState } from "react";
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import AllArticles from "./components/AllArticles"
import { Routes, Route } from "react-router-dom"

import "./App.css";

function App() {
  return (
    <> 
    <Header />
    <SearchBar/>
    <Routes>
      <Route path="api/articles" element={<AllArticles/>} />
    
    </Routes>
    </>
  );
}

export default App;
