import React, { useState } from 'react';

const Todo = ({ title, todos, setTodos, todo }) => {
    // console.log("Todo");
    const [editingText, setEditingText] = useState('');
    const [editingTodo, setEditingTodo] = useState(null);
    
    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id))
    }

    const completedHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item 
        }))
    }

    const importantHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, important: !item.important
                }
            }
            return item 
        }))
    }

    const editHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                todo.title = editingText
            }
            return item
        }))
        setEditingTodo(null);
        setEditingText('');
    }

    return (
        <div className='todo-block'>
            {editingTodo === todo.id ? (
            <input className='editing-inp' type='text' 
            onChange={(e) => setEditingText(e.target.value)} 
            value={editingText} />)
            :
            (<li className={`${todo.important ? 'important' : 'todo-text'}  ${todo.completed ? 'completed' : 'todo-text'} `}>{title}</li>)
            }
            <button className='btn-delete' onClick={deleteHandler}>
            <i className="tiny material-icons">close</i>
            </button>
            {editingTodo === todo.id ? 
            (<button onClick={() => editHandler(todo.id)}>
                <i className="tiny material-icons">done</i>
            </button>) 
            : 
            (<button onClick={() => setEditingTodo(todo.id)}>
                <i className="tiny material-icons">edit</i>
            </button>)}

             <button onClick={completedHandler}>
                <i className="tiny material-icons">check_circle</i>
            </button>
           
            <button className='buttons' onClick={importantHandler}>
            <i className="tiny material-icons">stars</i>
            </button>
        </div>
    )
}

export default React.memo(Todo) ;