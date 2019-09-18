import React, { Component } from 'react'
import Todos from '../../components/todos/Todos'
import AddTodo from '../../components/addTodo/AddTodo'
import Axios from 'axios'

const baseUrl = "https://jsonplaceholder.typicode.com/todos";
const todoLimit = `limit=10`;

export default class Home extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        this.getTodos();
    }

    //create
    addTodo = (todo) => {
        Axios.post(`${baseUrl}`, todo)
            .then(res => this.setState({ todos: [res.data, ...this.state.todos] }))
            .catch(err => console.log(err))
    }

    //retrieve
    getTodos = () => {
        Axios.get(`${baseUrl}?_${todoLimit}`)
            .then(res => this.setState({ todos: res.data }))
            .catch(err => console.log(err))
    }

    //update
    editTodo = (id) => {
        const todos = [...this.state.todos]
        const todo = todos.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed
            return todo
        })

        Axios.put(`${baseUrl}/${id}`, todo)
            .then(res => this.setState({ todos: todos }))
            .catch(err => console.log(err))
    }

    //delete
    deleteTodo = (id) => {
        let todos = [...this.state.todos]
        todos = todos.filter(todo => todo.id !== id)

        Axios.delete(`${baseUrl}/${id}`)
            .then(res => this.setState({ todos: todos }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                    todos={this.state.todos}
                    markComplete={this.editTodo}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        )
    }
}
