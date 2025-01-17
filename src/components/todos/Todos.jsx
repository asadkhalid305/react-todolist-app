import React, { Component } from 'react'
import TodoItem from '../todoItem/TodoItem'
import PropTypes from 'prop-types'

export default class Todos extends Component {
    render() {
        return this.props.todos.map(todo => (
            <TodoItem
                key={todo.id} todo={todo}
                markComplete={this.props.markComplete}
                deleteTodo={this.props.deleteTodo}
            />
        ))
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}