import React from 'react';

class Attribute extends React.Component{


    render(){
        return(<div>
            <p data-myattribute = "somevalue">This is the Custom Attribute!!! Inspect and Look source</p>
        </div>);
    }
}
export default Attribute;