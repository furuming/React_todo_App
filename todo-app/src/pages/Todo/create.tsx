
import ToDoForm from '../../components/ToDoForm'
import { Button } from "@mui/material"

import { useState } from 'react'
import { Todo }  from "../../types/Todo"
import { useNavigate } from 'react-router-dom'

let todo: Todo = {
    id:1,
    title: '',
    detail: ''
}

const changeTodo = (childTodo: Todo) => {
    todo = childTodo
}


function ToDoCreate() {
    
    const navigate = useNavigate(); 
    const back = () => {
        navigate(-1)

    };


    const [ todos, setTodo ] = useState<Array<Todo>>([]) 

    const addTodo = () => {
        todos.push(todo)
        setTodo( todos )
    }

    return (
        <>
            <ToDoForm todo={todo} changeTodo={changeTodo}></ToDoForm>
            <Button onClick={ addTodo }>追加</Button>
            <Button onClick={ back }>戻る</Button>
        </>
    );
}

export default ToDoCreate;
