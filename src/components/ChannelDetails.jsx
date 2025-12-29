import { useEffect, useState } from "react"
import { GetPostsByChannel } from "../services/PostServies"
import { useParams } from "react-router-dom"




const channelDetails = () => {
  const { id } = useParams()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (!id) return

    const handlePosts = async () => {
      const data = await GetPostsByChannel(id)
      setPosts(data)
    }

    handlePosts()
  }, [id])

  return (
    <>

      <div className="channelDetails">

        <div className="grid col-4">
          {posts.map((post) => (
            <div className="card" key={post._id}>
              <h2>{post.title}</h2>
              <h3>{post.body}</h3>

            </div>
          ))}


        </div>

      </div>
    </>
  )

}

export default channelDetails
