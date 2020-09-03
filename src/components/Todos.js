import React from 'react'
import Todo from './Todo'

const Todos = props => {

    const todoList = props.data.map(item => <Todo key={item.id} item={item} />)

    return (
        <div>
            {todoList}
        </div>
    )
}

export default Todos