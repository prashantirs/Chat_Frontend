import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/chat" element={<Chat />} />
      </Routes> 
    </Router>    
    </>
  );
}

export default App;
