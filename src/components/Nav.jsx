import { NavLink } from "react-router-dom"
import { Signout } from "../services/Auth"


const Nav = () => {
  const handleLogOut = () => {
    Signout()
  }
  const isLoggedIn = !!localStorage.getItem("token")

  return (
    <nav className="navbar">
      <h4>MotivHub</h4>
      <div>
        <NavLink to="home">Home</NavLink>
        <> </>
        <NavLink to="channelForm">Add Channel</NavLink>
        <> </>

        {isLoggedIn ? (
          <>
            <NavLink to="profile">My Profile</NavLink>
            <NavLink to="/" onClick={handleLogOut}>Logout</NavLink>

          </>
        ) : (
          <>
            <NavLink to="/">Sign In</NavLink>
            <> </>
          </>
        )}


      </div>
    </nav >
  )
}

export default Nav
