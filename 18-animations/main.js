import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './src/App.js'
import todos from './src/reducers/todos';

let store = createStore(todos);
let rootElement = document.getElementById('app');

render(
    <Provider store = {store}>
        <App />
    </Provider>,
    rootElement
)