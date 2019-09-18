import React, { Component } from 'react'
import './Style.css'
import PropTypes from 'prop-types'


export default class TodoItem extends Component {
    getStyle = () => {
        return { textDecoration: this.props.todo.completed ? 'line-through' : 'none' }
    }

    render() {
        const { id, title } = this.props.todo

        return (
            <div className="todo-item" style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button className='del' onClick={this.props.deleteTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}