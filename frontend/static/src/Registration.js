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

    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }
  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  async handleRegistration(e){
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password1: this.state.password1,
      password2: this.state.password2,
    }


    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify(user),
    };

    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/registration/', options).catch(handleError);
    const data = await response.json().catch(handleError);

console.log(user);
  if(data.key){
    Cookies.set('Authorization', `Token ${data.key}`);
  }
  }

render(){
 return (
   <form onSubmit={this.handleRegistration}>
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
 );

}

}

export default Registration;
