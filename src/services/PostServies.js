import Client from './api'




export const GetPostsByChannel = async (channelId) => {
  try {
    const res = await Client.get(`/posts/channel/${channelId}`)
    return res.data
  } catch (error) {
    throw error
  }
}