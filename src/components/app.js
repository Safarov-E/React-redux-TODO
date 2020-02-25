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
        if(this.inoutValue.value !== '') {
            this.inoutValue.classList.remove('active');
            this.props.onAddValue(this.inoutValue.value);
        } else {
            this.inoutValue.classList.add('active');
        }
        this.inoutValue.value = '';
    }
    hideCompleted = (event) => {
        event.preventDefault();
        let itemValue = document.querySelectorAll('.Completed-item');
        itemValue.forEach((item) => {
            item.outerHTML = ''
        })
    }
    render() {
        console.log(this.props.testStore)
        return (
            <div className="todo-form">
                <form className="Form">
                    <div className="tasks" onClick={this.learn}>
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
        onAddValue: (name) => {
            dispatch({type: 'ADD_VALUE', payload: name})
        }
    })
)(App);