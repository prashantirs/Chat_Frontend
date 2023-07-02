import './Login.css'
import { useState } from "react"
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [name,setName] = useState()
  const navigate = useNavigate()
  return (
    <>
      <div className="login-section">
        <h1>Login</h1>
        <label htmlFor="" id="name"/>
        <div className="login-form">
        <input type="text" id='name' onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your Name'/>
        <button onClick={()=>{navigate('/chat',{state:{name}})}}>Login</button>
      </div>
      </div>
    </>
  )
}

export default Login