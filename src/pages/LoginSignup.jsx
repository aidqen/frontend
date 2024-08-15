import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom/dist'
import { userService } from '../services/user/user.service'
import { useDispatch } from 'react-redux'
import { SET_USER } from '../store/reducers/user.reducer'

export function LoginSignup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [authDetails, setAuthDetails] = useState({
    username: '',
    password: '',
    fullname: '',
  })

  const isLogin = pathname.includes('login')


  function handleChange({ target }) {
    const { name, value } = target
    setAuthDetails({ ...authDetails, [name]: value })
  }

  function switchAuthModes(e) {
    e.preventDefault()

    const newPathname = isLogin
      ? pathname.replace('login', 'signup')
      : pathname.replace('signup', 'login')
    navigate(newPathname)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const user = isLogin ? await userService.login(authDetails) : await userService.signup(authDetails)
    setAuthDetails({ username: '', password: '', fullname: '' })

    dispatch({ type: SET_USER, user })
  }

  const { username, password, fullname } = authDetails

  return (
    <div className="login-signup-container">
      <div className="headers flex flex-row align-center">
        <h1>{isLogin ? 'Login' : 'Signup'}</h1>

      </div>
      <form onSubmit={handleSubmit} className="flex flex-column">
        <input
          type="text"
          name="username"
          placeholder="Name..."
          value={username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          value={password}
          onChange={handleChange}
        />
        {!isLogin && (
          <input
            type="text"
            name="fullname"
            placeholder="Fullname..."
            value={fullname}
            onChange={handleChange}
          />
        )}
        <div className="buttons flex flex-row">
          <button>Submit</button>
          <button onClick={switchAuthModes}>
            {isLogin ? 'Don\'t have an account? Signup' : 'Have an account? Login'}
          </button>
        </div>
      </form>
    </div>
  )
}
