import React from 'react';
import Content from './Content';

class ComplexExample extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState() {
        this.setState({data: 'Data updated from the child component...'})
    }
    render() {
        return (
            <div>
                <Content myDataProp = {this.state.data}
                         updateStateProp = {this.updateState}></Content>
            </div>
        );
    }
}
export default ComplexExample;