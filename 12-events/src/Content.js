import React from 'react';

class Content extends React.Component{

    render() {
        return (
            <div>
                <button onClick = {this.props.updateStateProp}>CLICK</button>
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}
export default Content;