import React, { Component } from 'react'
import './Style.css'

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" />
                {this.props.todo.title}
                <button className='del'>x</button>
            </div>
        )
    }
}
