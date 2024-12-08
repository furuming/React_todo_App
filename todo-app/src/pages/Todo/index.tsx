
import ToDoList from '../../components/ToDoList'
import { TextField, Button } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Todo } from '../../types/Todo';



function ToDoIndex() {
    const [ todos, setTodo ] = useState<Array<Todo>>([]) 

    const navigate = useNavigate();
    const navigateToCreate = () => {
        navigate('/todo/create');
    };

    console.log( 'todos', todos )

    return (
        <>
            <Link to={`/todo/create`}>
                TODOを追加
            </Link>
            <ToDoList todos={todos}></ToDoList>
        </>
    );
}

export default ToDoIndex;
