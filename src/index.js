import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = ['Learn React', 'Redux is awesme'];
function reducer(state = initialState, action) {
    if(action.type === 'ADD_VALUE') {
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))