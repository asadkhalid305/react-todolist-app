import React, { Component } from 'react'
import './Style.css'

export default class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const todo = {
            title: this.state.title,
            completed: false
        }
        this.props.addTodo(todo)
        this.setState({ title: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Add todo..."
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div >
        )
    }
}
