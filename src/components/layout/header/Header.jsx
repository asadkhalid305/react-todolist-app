import React from 'react'
import { Link } from 'react-router-dom'

import './Style.css'

export default function Header() {
    return (
        <div>
            <header>
                <h1>Todo List Application</h1>
                <div id="nav">
                    <Link to="/">Home</Link>|
                    <Link to="/about/">About</Link>
                </div>
            </header>
        </div>
    )
}
