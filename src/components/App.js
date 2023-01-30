

import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";

import Article from "./Article";

function App() {
  console.log(blogData);
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About src={blogData.image} about={blogData.about} />
      <ArticleList />
     
    </div>
  );
}

export default App;
