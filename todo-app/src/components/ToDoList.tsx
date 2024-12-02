import React from "react";
import { TextField, Button } from "@mui/material";

const addTodo = () => {
    console.log('hoge')
}


const ToDoList = function(){

    
    return (
        <div>
      <TextField label="TODOを追加"  />
      <Button onClick={addTodo}>追加</Button>
    </div>
  );
}

export default ToDoList;