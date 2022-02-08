import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

//STORE-> globalized state : store hold all the data 
//ACTION-> INCREMENT ; just imagine if we have state of counter we need a action to increase number
const increment = () =>{
  return {
    type:'INCREMENT'
  }
}
const decrement = () =>{
  return {
    type:'DECREMENT'
  }
}
//REDUCER-> how wil your action will transform current state to next state
//REDUCER -> will check which action you did and how you are going to tranform data
const counter = (state=0, action)=>{
  switch(action.type){
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
    default:
      return state;
  }
}



//CREATE store
let store = createStore(counter);

//display in console
store.subscribe(()=>console.log(store.getState()));

//DISPATCH: the place we are going to execute actions
//we called increment action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
//when you dispatch any action, action will return an object with type
//then our reducer is going to check will action.type dispatched 
//then reducer return updated state

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
