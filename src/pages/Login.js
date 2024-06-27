import React, { useEffect } from "react";
import { useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await supabase.auth.signInWithOtp({
        email,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (supabase.auth.getUser()) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
}
