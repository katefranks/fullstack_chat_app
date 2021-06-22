import React from 'react';
import Cookies from 'js-cookie';

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

  }
  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
     e.preventDefault();
     this.props.handleLogin(this.state);
  }

render(){
 return (
   <>
   <form onSubmit={this.handleSubmit}>
    <label htmlFor="">Login</label>
    <br/>
    <input className="login-input" placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
    <br/>
    <input className="login-input" placeholder="email" type="email" name="email" value={this.state.email} onChange={this.handleInput}/>
    <br/>
    <input className="login-input" placeholder="password" type="password" name="password" value={this.state.password} onChange={this.handleInput}/>
    <br/>
    <button type="submit">Submit</button>
   </form>
   <button className="register-button" onClick={this.props.handleNavigation}>Create Account</button>
  </>
 );

}

}

export default Login;

// import React from 'react';
// import Cookies from 'js-cookie';
//
// class Login extends React.Component {
//
//   constructor(props){
//     super(props);
//     this.state = {
//       username: '',
//       email: '',
//       password: '',
//     }
//
//     this.handleLogin = this.handleLogin.bind(this);
//     this.handleInput = this.handleInput.bind(this);
//
//   }
//   handleInput(e) {
//     this.setState({[e.target.name]: e.target.value});
//   }
//
//   async handleLogin(e){
//     e.preventDefault();
//
//     const user = {
//       username: this.state.username,
//       email: this.state.email,
//       password: this.state.password,
//     }
//
//
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-CSRFToken': Cookies.get('csrftoken')
//       },
//       body: JSON.stringify(user),
//     };
//
//     const handleError = (err) => console.warn(err);
//     const response = await fetch('/rest-auth/login/', options).catch(handleError);
//     const data = await response.json().catch(handleError);
//
// console.log(user);
//   if(data.key){
//     Cookies.set('Authorization', `Token ${data.key}`);
//   }
//   }
//
// render(){
//  return (
//    <form onSubmit={this.handleLogin}>
//     <label htmlFor="">Login</label>
//     <br/>
//     <input className="login-input" placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
//     <br/>
//     <input className="login-input" placeholder="email" type="email" name="email" value={this.state.email} onChange={this.handleInput}/>
//     <br/>
//     <input className="login-input" placeholder="password" type="password" name="password" value={this.state.password} onChange={this.handleInput}/>
//     <br/>
//     <button type="submit">Submit</button>
//    </form>
//
//  );
//
// }
//
// }
//
// export default Login;
