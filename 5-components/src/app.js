import React from 'react';
import Stateless from './Stateless';
import StateFul from './Stateful';

class App extends React.Component {

    render() {
        return (
            <div>
                <Stateless/>
                <StateFul/>
            </div>
        );
    }
}
export default App;