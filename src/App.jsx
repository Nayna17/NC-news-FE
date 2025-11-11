import { useState } from "react";
import Header from "./components/Header"
import AllArticles from "./components/AllArticles"
import SingleArticle from "./components/SingleArticle"
import { Routes, Route } from "react-router-dom"

import "./App.css";

function App() {
  return (
    <> 
    <Header />
    <Routes>
      <Route path="api/articles" element={<AllArticles/>} />
      <Route path="api/articles/:article_id" element={<SingleArticle/>} />
    
    </Routes>
    </>
  );
}

export default App;
