import React, { useState } from 'react'
import axios from 'axios'

const Form = props => {

    const [todo, setTodo] = useState({
        todo: ''
    })

    const setNew = e => {
        const { name, value } = e.target
        setTodo({
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/post', todo)
            .then(res => {
                setTimeout(() => {
                    window.location.reload()
                }, 1500)
            })
            .catch(error => console.log(error))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={todo.todo} onChange={setNew} type="text" placeholder="todo" name="todo" />
            <button>Add</button>
        </form>
    )
}

export default Form