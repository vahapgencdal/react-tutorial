import React from 'react';
import Header from './Header';
import Content from './Content';

class StateAndProps extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            header: "Header from props...",
            content: "Content from props..."
        }
    }
    render() {
        return (
            <div>
                <Header headerProp = {this.state.header}/>
                <Content contentProp = {this.state.content}/>
            </div>
        );
    }
}
export default StateAndProps;