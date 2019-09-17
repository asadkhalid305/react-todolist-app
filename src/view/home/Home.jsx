import React, { Component } from 'react'
import Todos from '../../components/todos/Todos'

export default class Home extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'one todo',
                completed: false
            },
            {
                id: 2,
                title: 'two todo',
                completed: false
            },
            {
                id: 3,
                title: 'three todo',
                completed: false
            },
        ]
    }
    render() {
        return (
            <div>
                <Todos todos={this.state.todos} />
            </div>
        )
    }
}
