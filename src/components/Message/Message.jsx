import './Message.css'

const Message = ({message,classs,user,messageID,userID}) => {
  if(user){
   if(user === "Welcome" || user === "Admin"){
    return (
        <div className={`message-box center`}>
            {`${message}`}
        </div>    
      )
   }else if(messageID === userID){
      return   <div className={`message-box right`}>
            {`You : ${message}`}
        </div> 
   }else{
     return (
        <div className={`message-box left`}>
            {`${user} : ${message}`}
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