import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://nc-news-be-x7or.onrender.com/api/articles/")
      .then((res) => res.json())
      .then((data) => {
        const formattedDate = data.articles.map((article) => ({
          ...article,
          created_at: new Date(article.created_at).toLocaleString("en-GB", {timeStyle: "short", dateStyle: "short"}
      )}));
        setArticles(formattedDate);
        // console.log(data.articles);
      });
  }, []);

  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li className="articles" key={article.article_id}>
            <Link to={`/api/articles/${article.article_id}`}>{article.title}</Link>
            <p>By: {article.author}, </p>
            <p>Topic: {article.topic}</p>
            <p>Posted: {article.created_at}</p>
            <img src={article.article_img_url} />
            <p>
              Comments: {article.comment_count}, Votes: {article.votes}{" "}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AllArticles;
