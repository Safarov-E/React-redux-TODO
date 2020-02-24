import React, {Component} from 'react';
import './app.css';

export default class App extends Component {
    render() {
        return (
            <div className="todo-form">
                <form className="Form">
                    <div className="tasks">
                        <p className="Completed-item">Learn React</p>
                        <p className="Item">Redux is awesme</p>
                    </div>
                    <input type="text" className="Input-block" placeholder="Enter a new todo item"/>
                    <button className="Hide-btn">Hide completed</button>
                    <button className="Add-btn">Add new</button>
                </form>
            </div>
        )
    }
}