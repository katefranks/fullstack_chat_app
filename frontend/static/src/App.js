import React from 'react';
import Cookies from 'js-cookie';
import Registration from './Registration';
import Login from './Login';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selection: !! Cookies.get('Authorization') ? 'messages' : 'login'
    };
  this.handleLogin = this.handleLogin.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
  this.handleNavigation = this.handleNavigation.bind(this);
  this.handleRegistration = this.handleRegistration.bind(this);
}

handleNavigation(selection){
  this.setState({ selection });
}
//for logout add button and set selection to 'logout'
async handleLogin(user){

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    },
    body: JSON.stringify(user),
  };

  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/login/', options).catch(handleError);

if(response.ok){
  const data = await response.json().catch(handleError);
  Cookies.set('Authorization', `Token ${data.key}`);
  this.setState({ selection : 'messages' });
} else {
  alert('Incorrect Username or Password, Please Try Again!')
}
}

async handleRegistration(user){

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

  if(response.ok){
  const data = await response.json().catch(handleError);

  Cookies.set('Authorization', `Token ${data.key}`);
  this.setState({ selection : 'messages' });
} else {
  //throw error
}
}

//for logout add button and set selection to 'logout'
async handleLogout(){

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
  };

  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/logout/', options).catch(handleError);

if(response.ok){
  Cookies.remove('Authorization');
  this.setState({ selection: 'login' });
  }

}


  render(){

    return(

      <>

      <div className="signin-view">
      {this.state.selection === 'register' &&
        <div>
          <Registration handleRegistration={this.handleRegistration} handleNavigation={this.handleNavigation}/>
        </div>
      }
      {this.state.selection === 'login' &&
        <div>
          <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation}/>
        </div>}
      <button className="logout-button" onClick={this.handleLogout}>Logout</button>
      </div>

      {this.state.selection === 'messages' &&
        <div className="chat-app-container">
            <header className="chat-app-header">
              <p id="header-text">Instant Messenger</p>
            </header>
            <MessageList />
        </div>}
      </>
    )
  }
}
export default App;
