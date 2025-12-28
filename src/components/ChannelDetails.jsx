import { Link } from "react-router-dom"
import Post from "./Post"
import posts from "../posts"

const ChannelDetails = () => {
  return (
    <>
      <h1>Channel Details</h1>

      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}

      <Link to="/home">Back</Link>
    </>
  )
}

export default ChannelDetails
