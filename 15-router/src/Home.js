import React from 'react';
import Content from './Content';

class Home extends React.Component{
    constructor() {
        super();

        this.state = {
            data:[
                {
                    component: 'First...',
                    id: 1
                },
                {
                    component: 'Second...',
                    id: 2
                },
                {
                    component: 'Third...',
                    id: 3
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.data.map((dynamicComponent, i) => <Content
                        key = {i} componentData = {dynamicComponent}/>)}
                </div>
            </div>
        );
    }
}
export default Home;