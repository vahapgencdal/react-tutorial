import React from 'react';

class StateAndProps extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            header: "Header from props...",
            content: "Content from props...",
            name:""
        }
    }

    handleSubmit(e){
        alert("OK");
        e.preventDefault();
    }

    handleChange(e){
        this.setState({
           [e.target.name]:e.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <div>
                   <label htmlFor="name"></label>
                   <input type="text" name={'name'} id={'name'} value={this.state.value} onChange={(e)=>this.handleChange(e)}/>
               </div>
                <input type="submit" value={"Kaydet"}/>
                {this.state.name}
            </form>
        );
    }
}
export default StateAndProps;