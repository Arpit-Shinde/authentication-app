import { useState } from 'react'

function Login() {

  let [username, setUserName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [found, setFound] = useState(false)
  let [didPressLogin, setDidPressLogin] = useState(false)

  async function login(e) {
    let info = JSON.stringify({ username, email, password })
    setDidPressLogin(true)

    try {
      const response = await fetch("https://authentication-app-3-1jlu.onrender.com/auth/login",
        {
          method: "POST",
          headers: {"Content-Type": "application/json"}, //required to tell express server that incoming data is of json type, else it ignores and body will be empty
          body: info
        }
      )

      let message = await response.text()
      if (message==="Welcome") setFound(true)
      console.log(message)
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <input
        type='text'
        onChange={(e) => setUserName(e.target.value)}>
      </input>
      <input
        type='text'
        onChange={(e) => setEmail(e.target.value)}>
      </input>
      <input
        type='text'
        onChange={(e) => setPassword(e.target.value)}>
      </input>
      <button
        onClick={login}
      >
        Login
      </button>
      {didPressLogin && <label>{found? "User Found" : "User not found :("}</label>}

    </div>


  )
}

export default Login