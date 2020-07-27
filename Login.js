import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './sidebar';
import './App.css';
//import  'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

 

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list : [],
            name : '',
            password : '',
            

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({name: event.target.value})
    }
    handleChange1(event) {
     this.setState({password: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        var list = [];
        list = JSON.parse(localStorage.getItem('transactions'));
        console.log(list)
        for (var i=0; i< list.length; i++) {
        if(this.state.name == list[i].bName && this.state.password == list[i].iFSC){
            alert("You are logged in...");
        }
    }
    
    
    }
    

    render () {
        return(
            <body>
           
            <div id='App'>
                <div id='page'>
                <SideBar />
                <div className="header">
                  <div className="navbar">
                      <a href="#" >Home</a>
                      <a href="#">About</a>
                      <a href="#">Contact us</a>
                  </div>
                    
                </div>
                <div id='page-wrap'>
<form onSubmit={this.handleSubmit}>
    <label>User Name:
        <input type="text" value={this.state.name} onChange={this.handleChange} /></label><br /><br /><br />
<label>Password:
        <input type='password' value={this.state.password} onChange={this.handleChange1} /></label><br /><br /><br />
    <button type='submit' value='submit' >Submit</button>
    </form>
    
    
    </div>
    <div className='footer'>
            <div className='container'>
                <div className='row'>
                    {}
                    <div  className='col'>
                        <h4>This Application  for Login</h4>
                        <ul className='list-unstyled'>
                            <li>324-420-6994</li>
                            <li>Moscow</li>
                            <li>123 street</li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
            </div>
            </body>
        );
    }
}

export default Login;