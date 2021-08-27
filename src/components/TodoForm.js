import React from 'react';

const TodoForm = ({ todos, setTodos, inputText, setInputText, setStatus }) => {

    const handleInput = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {title: inputText, completed: false, important: false, id: Date.now()}
        ])
        setInputText('')
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <>
        <form>
            <div>
            <input className="todo-input" value={inputText} onChange={handleInput} type='text' />
            <button className="todo-button" onClick={submitTodoHandler} type='submit'>
                  <i className="material-icons">add</i>
            </button>
            </div>
            <div className='select'>
                <select className='filter-todo' onChange={statusHandler} name='todos'>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='important'>Important</option>
                </select>
            </div>
        </form>
        </>
    )
}

export default TodoForm;