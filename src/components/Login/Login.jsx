import './Login.css'
import { useState } from "react"
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [name,setName] = useState()
  const [isDisable,setIsDisable] = useState(false)
  const navigate = useNavigate()
  const loginHandler = ()=>{
    if(!name){
      alert("Naam daal bhai")
      setIsDisable(true)
      return
    }
    navigate('/chat',{state:{name}})
  }
  return (
    <>
      <div className="login-section">
        <h1>Login</h1>
        <label htmlFor="" id="name"/>
        <div className="login-form">
        <input type="text" id='name' onChange={(e)=>{setIsDisable(false) ;setName(e.target.value)}} placeholder='Enter Your Name'/>
        <button onClick={loginHandler} disabled={isDisable}>Login</button>
      </div>
      </div>
    </>
  )
}

export default Login