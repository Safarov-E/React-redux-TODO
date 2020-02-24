import React, {Component} from 'react';
import {connect} from 'react-redux';
import './app.css';

class App extends Component {  
    learn = (event) => {
        event.target.classList.toggle('Completed-item');
        event.target.classList.toggle('Item');
    }
    addValue = (event) => {
        event.preventDefault();
        this.props.onAddValue(this.inoutValue.value);
        this.inoutValue.value = '';
    }
    render() {
        return (
            <div className="todo-form">
                <form className="Form">
                    <div className="tasks" onClick={this.learn} ref={this.myRef}>
                        {
                            this.props.testStore.map((item, index) => {
                                return <p key={index} className="Item">{item}</p>
                            })
                        }
                    </div>
                    <input type="text" className="Input-block" placeholder="Enter a new todo item" ref={(input) => {this.inoutValue = input}}/>
                    <button className="Hide-btn" onClick={this.hideCompleted}>Hide completed</button>
                    <button className="Add-btn" onClick={this.addValue}>Add new</button>
                </form>
            </div>
        )
    }
}
export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddValue: (valueName) => {
            dispatch({type: 'ADD_VALUE', payload: valueName})
        }
    })
)(App);