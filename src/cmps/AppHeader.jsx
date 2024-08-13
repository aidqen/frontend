import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/dist";

export function AppHeader() {
  const user = useSelector(state => state.userModule.user)
   
  return (
    <header className="app-header flex flex-row">
      <NavLink to="/">
        Homepage
      </NavLink>
      <NavLink to="/toys">
        Toys
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
      <NavLink to="/auth/login">
        Login
      </NavLink>
      <div className="user">
        {user && <span>{user.fullname}</span>}
      </div>
    </header>
  )
}