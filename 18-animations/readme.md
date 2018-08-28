#Using Flux
In this chapter, we will learn how to implement flux pattern in React applications. 
We will use Redux framework. The goal of this chapter is to present the simplest example of every piece needed for connecting Redux and React.

##Step 1 - Install Redux
```
npm install --save react-redux
npm install --save redux
```
##Step 2 - Create Files and Folders
In this step, we will create folders and files for our actions, reducers, and components. 
After we are done with it, this is how the folder structure will look like.

##Step 3 - Actions
Actions are JavaScript objects that use type property to inform about the data that should be sent to the store. 
We are defining ADD_TODO action that will be used for adding new item to our list. 
The addTodo function is an action creator that returns our action and sets an id for every created item.

```
export const ADD_TODO = 'ADD_TODO';

let nextTodoId = 0;

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    };
}
```
##Step 4 - Reducers
While actions only trigger changes in the app, the reducers specify those changes. We are using switch statement to search for a ADD_TODO action. 
The reducer is a function that takes two parameters (state and action) to calculate and return an updated state.

The first function will be used to create a new item, while the second one will push that item to the list. Towards the end, we are using combineReducers helper function where we can add any new reducers we might use in the future.
In this step, we will create two components as (Home)and (Login) in App directory. 

- Todos
```
import { combineReducers } from 'redux';
import { ADD_TODO } from '../actions/Actions';

function todo(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
            };
        default:
            return state
    }
}
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        default:
            return state;
    }
}
const todoApp = combineReducers({
    todos
});
export default todoApp;
```
##Step 5 - Store
The store is a place that holds the app's state. It is very easy to create a store once you have reducers. 
We are passing store property to the provider element, which wraps our route component.
- Main
```
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
```

##Step 6 - Root Component
The App component is the root component of the app. Only the root component should be aware of a redux. 
The important part to notice is the connect function which is used for connecting our root component App to the store.  
This function takes select function as an argument. 
Select function takes the state from the store and returns the props (visibleTodos) that we can use in our components.
```
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/Actions';

import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';

class App extends Component {
    render() {
        const { dispatch, visibleTodos } = this.props;

        return (
            <div>
                <AddTodo onAddClick = {text =>dispatch(addTodo(text))} />
                <TodoList todos = {visibleTodos}/>
            </div>
        )
    }
}
function select(state) {
    return {
        visibleTodos: state.todos
    }
}
export default connect(select)(App);
```
##Step 7 - Other Components
These components shouldn't be aware of redux. 

- **AddTodo**
This Component For adding new Todo to application
```
import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type = 'text' ref = 'input' />

                <button onClick = {(e) => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }
    handleClick(e) {
        this.props.onAddClick(this.refs.input.value.trim());
        this.refs.input.value = '';
    }
}
```
- **Todo**
This Component for show the inside of Todo
```
import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <li>
                {this.props.text}
            </li>
        )
    }
}
```

- **TodoList**
This Component for show todo list
```
import React, { Component } from 'react'
import Todo from './Todo.js'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => <Todo key = {todo.id} {...todo} />)}
            </ul>
        )
    }
}
```
