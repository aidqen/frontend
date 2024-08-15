import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/dist";
import { userService } from "../services/user/user.service";
import { SET_USER } from "../store/reducers/user.reducer";

export function AppHeader() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userModule.user)
  console.log(user);

  function onLogout() {
    userService.logout()
    dispatch({ type: SET_USER, user: null })
  }

  return (
    <header className="app-header flex flex-row align-center">
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
      {user && 
        <div className="user">
          <span>{user.fullname}</span>
          <button onClick={onLogout}>Logout</button>
        </div>
      }
    </header>
  )
}