import "./App.css";
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import {supabase} from "./supabase/client";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session)=>{
      if (!session) {
        navigate('/login');
      }else{
        navigate('/');
      }
    })
    
  },[navigate]) //Exist

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={< NotFound/>} />

      </Routes>
    </div>
  );
}

export default App;
