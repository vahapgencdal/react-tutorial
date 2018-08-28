import React from 'react';
import SetState from './SetState';
import ForceUpdate from "./ForceUpdate";
import FindDomNode from "./FindDomNode";

class App extends React.Component {

    render() {
        return (
            <div>
              <SetState/>
                <ForceUpdate/>
                <FindDomNode/>
            </div>
        );
    }
}
App.defaultProps = {
    firstVal: "firstVal header...",
    secondVal:"secondVal content...",
    headerProp:'',
    contentProp:''

};
export default App;