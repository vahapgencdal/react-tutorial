import React from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

class Stateless extends React.Component{
    render(){
        return(
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>);
    }
}
export default Stateless;