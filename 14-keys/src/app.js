import React from 'react';

import SimpleExample from './SimpleExample';

class App extends React.Component {

    render() {
        return (
            <div>
                <SimpleExample/>
            </div>
        );
    }
}

App.defaultProps = {
    firstVal: "firstVal header...",
    secondVal:"secondVal content...",
    headerProp:'',
    contentProp:''

};
export default App;