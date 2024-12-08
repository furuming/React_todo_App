import { TextField, Grid2 } from "@mui/material"
import { Todo }  from "../types/Todo"
import type { ChangeEvent, FC, ReactNode } from "react";

type Props = {
    todo:Todo,
    changeTodo: any
}



const ToDoForm :FC<Props>= (props: Props) => {
    const {todo, changeTodo}  = props

    const changeID = ( event:any ) => {
        todo.id = event.target.value
        changeTodo(todo)
    }
    const changeTitle = ( event:any ) => {
        todo.title = event.target.value
        changeTodo(todo)
    }
    const changeDetail = ( event :any) => {
        todo.detail = event.target.value
        changeTodo(todo)
    }

    return <>
    <Grid2 >
        <TextField onChange={changeID} label="id" type="number">{todo.id}</TextField><br />
        <TextField onChange={changeTitle} label="title" >{todo.title}</TextField><br />
        <TextField onChange={changeDetail} label="detail" >{todo.detail}</TextField><br />
    </Grid2>
    
    </>
}


export default ToDoForm