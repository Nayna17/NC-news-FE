import { useEffect } from "react";
import { useState } from "react";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://nc-news-be-x7or.onrender.com/api/articles/")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        console.log(data.articles);
      });
  }, []);

return (
  <div>
    <ul>
      {articles.map((article) => (
        <li className="articles" key={article.article_id}>
          <h3>{article.title}</h3>
          <p>By: {article.author}, </p>
          <p>Topic: {article.topic}</p>
          <img  src={article.article_img_url}/>
          <p>Comments: {article.comment_count}</p>
        </li>
      ))}
    </ul>
  </div>
);
}
export default AllArticles;
