import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const SingleArticle = () =>{
    const { article_id } = useParams()
    const [singleArticle, setSingleArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


useEffect(() =>{
    fetch(`https://nc-news-be-x7or.onrender.com/api/articles/${article_id}`)
    .then((res) => {
       if (!res.ok) {
        throw new Error("Failed to fetch article")
       }
       return res.json()
    })
    .then((data) => {
        setSingleArticle(data.article)
        setIsLoading(false)
    })
    .catch((err) => {
        setError(err.message)
        setIsLoading(false)
    })
}, [article_id])

if (isLoading) return <p>Loading...</p>
if (error) return <p>Error: {error}</p>

return (
    <>
    <h2>{singleArticle.title}</h2>
    <p>By {singleArticle.author}</p>
    <p>Posted: {new Date(singleArticle.created_at).toLocaleString("en-GB", {timeStyle: "short", dateStyle: "short"})}</p>
    <img src={singleArticle.article_img_url} alt={singleArticle.title}/>
    <p>{singleArticle.body}</p>
    <p>Votes: {singleArticle.votes}</p>
    <p>Comments: {singleArticle.comments}</p>
    </>
)
}

export default SingleArticle