import React from 'react';

class Styling extends React.Component{
    render(){
        var customStyle = {
            fontSize: 100,
            color: '#FF0000'
        };
        return (
            <div>
                <h1 style = {customStyle}>Header</h1>
            </div>
        );
    }
}
export default Styling;