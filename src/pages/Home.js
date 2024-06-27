import React, { useEffect } from 'react';
import { supabase } from '../supabase/client';
import { useNavigate } from 'react-router-dom';
import TaskFrom from '../components/TaskFrom';

export default function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    if (!supabase.auth.getUser()) {
      navigate("/login");
    }

  }, [navigate])

  return (
    <div>
      Home
      <button onClick={() => supabase.auth.signOut()}>
        Logout
      </button>

      <TaskFrom/>
    </div>
  )
}
