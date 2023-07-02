import { useState } from "react"
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [name,setName] = useState()
  const navigate = useNavigate()
  return (
    <>
    <div>Login</div>
    <label htmlFor="" id="name"/>
    <input type="text" id='name' onChange={(e)=>{setName(e.target.value)}}/>
    <button onClick={()=>{navigate('/chat',{state:{name}})}}>Login</button>
    </>
  )
}

export default Login