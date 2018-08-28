import React from 'react';
import Content from './Content';

class LifeCycle extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            data: 0
        };
        this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber() {
        this.setState({data: this.state.data + 1})
    }
    render() {
        return (
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }

}
export default LifeCycle;