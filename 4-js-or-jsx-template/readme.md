##ReactJS - JSX -JS
React uses JSX for templating instead of regular JavaScript. It is not necessary to use it, however, following are some pros that come with it.

- It is faster because it performs optimization while compiling code to JavaScript.

- It is also type-safe and most of the errors can be caught during compilation.

- It makes it easier and faster to write templates, if you are familiar with HTML.  

##Content Elements
If we want to return more elements, we need to wrap it with one container element.  
Notice how we are using div as a wrapper for h1, h2 and p elements.
```
import React from 'react';
class Content extends React.Component {

    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p>This is the Content content!!!</p>
            </div>
        );
    }
}
export default Content;
```
##Attributes  
We can use our own custom attributes in addition to regular HTML properties and attributes.   
When we want to add custom attribute, we need to use **data-** prefix. In the following example, 
we added **data-myattribute** as an attribute of **p** element.
```
import React from 'react';

class Header extends React.Component{


    render(){
        return(<div>
            <p data-myattribute = "somevalue">This is the Custom Header!!! Inspect and Look source</p>
        </div>);
    }
}
export default Header;
```
##JavaScript Expressions 
JavaScript expressions can be used inside of JSX. We just need to wrap it with curly brackets {}. The following example will render 6.   
We cannot use if else statements inside JSX, instead we can use conditional (ternary) expressions.
```
import React from 'react';

class Home extends React.Component{
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
export default Home;
```
##Styling
React recommends using inline styles. When we want to set inline styles, we need to use camelCase syntax. React will also automatically append px after the number value on specific elements.  
The following example shows how to add myStyle inline to h1 element.
```
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
```
##Comments
When writing comments, we need to put curly brackets **{}** when we want to write comment within children section of a tag. 
It is a good practice to always use {} when writing comments, since we want to be consistent when writing the app.
```
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
```
##Naming Convention
HTML tags always use **lowercase** tag names, while React components start with **Uppercase**.  
Note − You should use **className** and **htmlFor** as XML attribute names instead of **class** and **for**.