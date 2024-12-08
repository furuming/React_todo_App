import React from "react";
import {Todo} from "../types/Todo" 
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const addTodo = () => {
    console.log('hoge')
}

type Props = {
  todos: Array<Todo>
}


const ToDoList = function(props: Props){
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>title</TableCell>
            <TableCell>detail</TableCell>
          </TableRow>
          </TableHead>

            {( () => {
                const todos = []
                for( let item of props.todos){
                  todos.push(
                    <TableBody>

                      <TableRow>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.detail}</TableCell>
                      </TableRow>
                    </TableBody>
                  )}
                return todos;
              })()}

      </Table>
    </div>
  );
}

export default ToDoList;