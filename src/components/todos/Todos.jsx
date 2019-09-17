import React, { Component } from 'react'
import TodoItem from '../todoItem/TodoItem'

export default class Todos extends Component {
    // constructor(props) {
    //     super(props)

    // }
    render() {
        return this.props.todos.map(todo => (
            <TodoItem todo={todo} />
        ))
    }
}
