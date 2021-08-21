import React from 'react';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.demoLogin = this.demoLogin.bind(this);

  }
  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
     e.preventDefault();
     this.props.handleLogin(this.state);
  }

  demoLogin(e){
  this.setState({username: 'demo', email: 'demo@demo.com', password: 'safepass1', });
}

render(){
 return (
   <>
   <form onSubmit={this.handleSubmit} className="form-login">
    <label className="login-label" htmlFor="">Login:</label>
    <button onClick={this.demoLogin} type="submit" className="submit-button">Demo</button>
    <br/>
    <input className="login-input" placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
    <br/>
    <input className="login-input" placeholder="email" type="email" name="email" value={this.state.email} onChange={this.handleInput}/>
    <br/>
    <input className="login-input" placeholder="password" type="password" name="password" value={this.state.password} onChange={this.handleInput}/>
    <br/>
    <button className="submit-button" type="submit">Submit</button>
   </form>
   <button className="toggle-register" onClick={() => this.props.handleNavigation('register')}>Create New Account</button>
  </>
 );

}

}

export default Login;
