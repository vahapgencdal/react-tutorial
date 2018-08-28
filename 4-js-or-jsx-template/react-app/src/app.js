import React from 'react';
import Nested from './nested';
import Attribute from './attribute';
import Expression from './expression';
import Styling from './styling';
import Comment from './comment';

class App extends React.Component {

    render() {
        return (
            <div>
                <Nested/>
                <Attribute/>
                <Expression/>
                <Styling/>
                <Comment/>
            </div>
        );
    }
}
export default App;