import React from 'react';
import Cookies from 'js-cookie';

class Registration extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }
  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
     e.preventDefault();
     this.props.handleRegistration(this.state);
  }



render(){
 return (
   <>
   <form onSubmit={this.handleSubmit}>
   <label htmlFor="">Registration</label>
   <br/>
    <input className="registration-input" placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
    <br/>
    <input className="registration-input" placeholder="email" type="email" name="email" value={this.state.email} onChange={this.handleInput}/>
    <br/>
    <input className="registration-input" placeholder="password" type="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
    <br/>
    <input className="registration-input" placeholder="repeat password" type="password" name="password2" value={this.state.password2} onChange={this.handleInput}/>
    <br/>
    <button type="submit">Submit</button>
   </form>
   <button className="toggle-login" onClick={() => this.props.handleNavigation('login')}>Login</button>
   </>
 );

}

}

export default Registration;
