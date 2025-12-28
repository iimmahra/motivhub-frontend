import { Link } from "react-router-dom"

const Post = ({ post }) => {
  return (
    <div className="post">
      <Link to={`/channelDetails/${post.id}`}>
        {post.img && <img className="listing-img" src={post.img} alt={post.name} />}
        <h3>{post.title}</h3>
        <h5>{post.body}</h5>
      </Link>
    </div>
  )
}

export default Post
