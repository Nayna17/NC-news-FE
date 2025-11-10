import { useState } from "react";
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import AllArticles from "./components/AllArticles"

import "./App.css";

function App() {
  return (
    <> <Header />
    <SearchBar/>
    <AllArticles/>
    </>
  );
}

export default App;
