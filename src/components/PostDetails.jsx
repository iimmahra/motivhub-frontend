import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const PostDetails = ({ posts }) => {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const selectedPost = posts.find(
      (p) => p.id === id
    )
    setPost(selectedPost)
  }, [id, posts])

  if (!post) return <h2>Post not found</h2>

  return (
    <div className="detail">
      <div className="detail-header">
        <h1>{post.title}</h1>
      </div>

      <div className="info-wrapper">
        <h3>About Post</h3>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default PostDetails
