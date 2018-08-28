import React from 'react';

class ForceUpdate extends React.Component{
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };

    //This is binding basic mode for update.
    forceUpdateHandler() {
        this.forceUpdate();
    };

    render() {
        return (
            <div>
                <button onClick = {this.forceUpdateHandler}>FORCE UPDATE 1</button>
                <h4>Random number: {Math.random()}</h4>
            </div>
        );
    }
}
export default ForceUpdate;