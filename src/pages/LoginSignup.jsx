import { useEffect, useState } from "react"

export function LoginSignup() {
    // const [authMode, setAuthMode] = useState('login')

    // useEffect(() => {
      
    // }, [third])
    
  return (
    <div className="login-signup-container">
      <h1>Login / Signup</h1>
      <form className="flex flex-column">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
