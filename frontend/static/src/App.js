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
  this.handleRegistration = this.handleRegistration.bind(this);
}

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
  //throw error
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

  render(){

    return(

      <>
      <Registration />
      <Login />
      <div className="chat-app-container">
        <header className="chat-app-header">
          <p id="header-text">Instant Messenger</p>
        </header>
        <MessageList />
      </div>
      </>
    )
  }
}
export default App;

// handleNavigation- to toggle between login or registration

////////// BREAKING THE BELOW (ALL CODE IN APP JS) INTO MessageList & MessageForm COMPONENTS //////////////

// import React from 'react';
// import Cookies from 'js-cookie';
// import Registration from './Registration';
// import Login from './Login';
// import './App.css';
//
//
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       instantMessages: [],
//       instantMessage: [],
//
//     }
//     this.addInstantMessage = this.addInstantMessage.bind(this);
//     this.handleInput = this.handleInput.bind(this);
//     // this.addToChatWindow = this.addToChatWindow.bind(this);
// }
// componentDidMount(){
//     fetch('/api/v1/instantMessages/')
//       .then(response => response.json())
//       .then(data => this.setState({ instantMessages: data }));
//   }
//   handleInput(e) {
//     this.setState({[e.target.name]: e.target.value});
//   }
//
//   addInstantMessage(e){
//     // console.log(this.state.value);
//
//     e.preventDefault();
//
//     const instantMessage = {
//       // created_at: this.state.created_at,
//       username: this.state.username,
//       message_text: this.state.message_text,
//     };
//
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-CSRFToken': Cookies.get('csrftoken'),
//       },
//       body: JSON.stringify(instantMessage),
//     }
//
//
//     fetch('/api/v1/instantMessages/', options)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         const instantMessages = [...this.state.instantMessages]
//         instantMessages.push(data)
//         this.setState({instantMessages})
//       });
//   }
// // set state is a function that takes a function or an object.
//   render(){
//     const instantMessages = this.state.instantMessages.map(instantMessage => (
//       <li className="instant-messages" key={instantMessage.id}>
//       <p>Sent at: {instantMessage.created_at}</p>
//       <p className="user_image">{instantMessage.username}</p>
//       <p className="instant-message-text-display">{instantMessage.message_text}</p>
//       </li>
//     ))
//     return(
//
//       <>
//       <Registration />
//       <Login />
//       <div className="chat-app-container">
//       <header className="chat-app-header">
//         <p id="header-text">Instant Messenger</p>
//       </header>
//       <ul instantmessages={this.state.instantMessages} className="instant-message-window">{instantMessages}</ul>
//       <form className="input-form" onSubmit={this.addInstantMessage}>
//         <input className="input-box" type="text" name="message_text" value={this.state.message_text} onChange={this.handleInput} placeholder="Enter Text"/>
//         <button className="form-button" type="submit" value="Submit">SEND</button>
//       </form>
//       </div>
//       </>
//     )
//   }
// }
// export default App;
