import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app.js';

ReactDOM.render(<App headerProp = "Header from props..."
                     contentProp = "Content from props..."/>, document.getElementById('app'));