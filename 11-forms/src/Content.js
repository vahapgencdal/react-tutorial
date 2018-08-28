import React from 'react';

class Content extends React.Component{

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }


    render() {
        return (
            <div>
                <input type = "text" value = {this.props.myDataProp}
                       onChange = {this.props.updateStateProp} />
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}
export default Content;