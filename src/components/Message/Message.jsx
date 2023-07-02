import './Message.css'

const Message = ({message,classs,user}) => {
  if(user){
   if(user === "Admin"){
    return (
        <div className={`message-box ${classs}`}>
            {`${message}`}
        </div>    
      )
   }else{
    return (
        <div className={`message-box ${classs}`}>
            {`${user}:${message}`}
        </div>    
      )
   }
  }else{
    return (
        <div className={`message-box ${classs}`}>
            {`You : ${message}`}
        </div>    
      )
  }
}

export default Message