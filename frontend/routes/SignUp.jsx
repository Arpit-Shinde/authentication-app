import { useState } from 'react'

function SignUp() {

  let [username, setUserName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [isWriting, setIsWriting] = useState(true)

  async function handle_signup(e) {
    let info = JSON.stringify({ username, email, password })

    try {
      const response = await fetch("http://localhost:5001/auth/signup",
        {
          method: "POST",
          headers: {"Content-Type": "application/json"}, //required to tell express server that incoming data is of json type, else it ignores and body will be empty
          body: info
        }
      )

      let message = await response.text()
      setIsWriting(false)
      console.log(message)
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>SignUp</h1>
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
        onClick={handle_signup}
      >
        Enter
      </button>

      <label>{isWriting? "Press Enter" : "User Saved"}</label>

    </div>


  )
}

export default SignUp