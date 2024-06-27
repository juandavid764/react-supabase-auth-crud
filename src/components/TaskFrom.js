import React, { useState } from "react";
import { supabase } from "../supabase/client";

function TaskFrom() {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await supabase.from("tasks").insert({
        name: taskName,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskName"
          placeholder="Write a task name"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TaskFrom;
