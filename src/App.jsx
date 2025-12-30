import './styles/home.css'
import './styles/channel.css'
import './styles/profile.css'
import './styles/post.css'
import Nav from './components/Nav'
import SignIn from './components/SignIn'
import { Routes, Route, Router } from 'react-router-dom'
import ChannelForm from './components/ChannelForm'
import Home from './components/Home'
import ChannelDetails from './components/ChannelDetails'
import { useState, useEffect } from "react"
import Register from './components/Register.'
import { CheckSession } from './services/Auth'
import Profile from './components/Profile'
import PostDetails from './components/PostDetails'
import PostForm from './components/PostForm'
import RequireAuth from './components/RequireAuth'



const App = () => {

  const [user, setUser] = useState(null)


  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const userData = await CheckSession()
    setUser(userData)

  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])


  return (
    <>
      <header>
        <Nav user={user} handleLogOut={handleLogOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="profile" element={<Profile />} />


          <Route path="home" element={<Home />} />

       
          <Route path="/home/:id" element={<ChannelDetails />} />

          {/* channelForm */}
          <Route path='/channelForm' element={
            <RequireAuth>
              <ChannelForm />
            </RequireAuth >
          }
          />


          {/* postFrom */}
          <Route path='/postForm/:id' element={
            <RequireAuth>
              <PostForm />
            </RequireAuth>
          } />

          {/* channel */}
          <Route path="/channel/:id" element={
            <RequireAuth>
              <ChannelDetails />
            </RequireAuth>
          } />

          <Route path="/postDetails/:id" element={
            <RequireAuth>
              <PostDetails />
            </RequireAuth>
          } />











        </Routes>
      </main>

    </>
  )
}

export default App
