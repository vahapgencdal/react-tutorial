#Props Overview
The main difference between state and props is that **props** are **immutable**.  
This is why the container component should define the state that can be updated and changed, while the child components should only pass data from the state using props.

##Using Props
When we need immutable data in our component, we can just add props to reactDOM.render() function in main.js and use it inside our component.
- main
```
ReactDOM.render(<App headerProp = "Header from props..."
                     contentProp = "Content from props..."/>, document.getElementById('app'));
```
- App
```
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}
export default App;
```
##Default Props 
You can also set default property values directly on the component constructor instead of adding it to the reactDom.render() element.
just you will add below code to after App class.

```
App.defaultProps = {
    firstVal: "firstVal header...",
    secondVal:"secondVal content...",
    headerProp:'',
    contentProp:''

};
```

##State and Props
The following example shows how to combine **state** and props in your app. 
We are setting the state in our parent component and passing it down the component tree using **props**. 
Inside the **render** function, we are setting **headerProp** and **contentProp** used in child components.