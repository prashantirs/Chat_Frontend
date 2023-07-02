import React, { useEffect, useState } from 'react'
import './Chat.css'
import { useLocation } from 'react-router-dom';
import ScrollToBottom  from 'react-scroll-to-bottom';
import SocketIO from "socket.io-client";
import Message from '../Message/Message';
// const ENDPOINT = "http://localhost:4500";
const ENDPOINT = "https://chatapp-0bvu.onrender.com/";

let socket;


const Chat = () => {
  const [id, setId] = useState()
  const [text, setText] = useState()
  const [messages, setMessages] = useState([])
  const state = useLocation().state
  const name = state.name

  

  const send = () => {
    socket.emit('message', {text, id});
    setText('')
  }

  useEffect(() => {
    socket = SocketIO(ENDPOINT,{transports: ['websocket']});
    socket.on('connect', () => {
      setId(socket.id)
    });
    
    socket.emit('joined',{name:name})
    
    socket.on('welcome', (data) => {
      setMessages([...messages,data])
      console.log(data);
    });

    socket.on('newUser', (data) => {
      setMessages([...messages,data])
      console.log(data);
    });
  
    socket.on('userLeft', (data) => {
      setMessages([...messages,data])
      console.log(data.message);
    });

    return () => {
      socket.disconnect();
      socket.off();
    }
  }, [])

  useEffect(() => {
  socket.on('sendMessage', (data) => {
    setMessages([...messages,data])
    console.log(`${data.user} : ${data.text}`);
  });
  socket.on('newUser', (data) => {
    setMessages([...messages,data])
    console.log(data);
  });

  socket.on('userLeft', (data) => {
    setMessages([...messages,data])
    console.log(data.message);
  });
  return () => {
    socket.off();
  }
}, [messages])

  return (
    <>
      <h1>Chat</h1>
      <ScrollToBottom  className="chatBox">
        {messages.map((message)=>{
          return (<Message user={message.user} message={message.text} key={message.id} messageID={message.id} userID={id} classs={message.id === id ? "right":"left"}/>)
        })}
      </ScrollToBottom >
        <div className="send-box">
        <input value={text} className='chat-input' type="text" onChange={(e)=>{setText(e.target.value)}} onKeyPress={(event) => event.key === 'Enter' ? send() : null} />
        <button onClick={send}>Send</button>
        </div>
    </>
  )
}

export default Chat