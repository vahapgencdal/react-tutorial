import React from 'react';

class Expression extends React.Component{
    render(){
        const i=1;
        return(<div>
            <p>
                {2*3}
            </p>
            <p>
                {/*if(i==1)'True'else'False' Give error*/}
                {i==1?'True':'False'}
            </p>
        </div>);
    }
}
export default Expression;