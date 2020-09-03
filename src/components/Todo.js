import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Todo = ({ item }) => {

    // const history = useHistory()
    // console.log(history)

    const [todo, setTodo] = useState({
        todo: ''
    })

    const [hidden, setHidden] = useState(true)

    const handleChange = e => {
        const { name, value } = e.target
        setTodo({
            [name]: value
        })
    }

    const deleteItem = id => {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
            .then(res => {
                console.log(res)
                setTimeout(() => {
                    window.location.reload()
                }, 1500)
            })
            .catch(err => console.log(err))
    }

    const markComplete = id => {
        axios.patch(`http://localhost:8000/api/patch/${id}`)
            .then(res => {
                setTimeout(() => {
                    window.location.reload()
                }, 1500)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSubmit = (e, id) => {
        e.preventDefault()
        console.log(e, id)
        axios.put(`http://localhost:8000/api/put/${id}`, todo)
            .then(res => {
                setTimeout(() => {
                    window.location.reload()
                }, 1500)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h2>{item.todo}</h2>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => markComplete(item.id)}>{item.isComplete ? "Undo Done" : "Mark Done"}</button>
            <button onClick={() => { setHidden(!hidden) }}>Edit</button>
            <form style={{ display: hidden ? 'none' : 'block' }} onSubmit={(e) => handleSubmit(e, item.id)}>
                <input onChange={handleChange} type="text" placeholder="todo" name="todo" />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Todo