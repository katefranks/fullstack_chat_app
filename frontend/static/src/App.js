import React from 'react';
import Cookies from 'js-cookie';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      instantMessages: [],
      instantMessage: [],

    }
    this.addInstantMessage = this.addInstantMessage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    // this.addToChatWindow = this.addToChatWindow.bind(this);
}
componentDidMount(){
    fetch('/api/v1/instantMessages/')
      .then(response => response.json())
      .then(data => this.setState({ instantMessages: data }));
  }
  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  addInstantMessage(e){
    // console.log(this.state.value);

    e.preventDefault();

    const instantMessage = {
      created_at: this.state.created_at,
      user_name: this.state.user_name,
      message_text: this.state.message_text,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(instantMessage),
    }


    fetch('/api/v1/instantMessages/', options)
      .then(response => response.json())
      .then(data => console.log(data))
      // .then(data => this.setState({ instantMessages: data }));
      .then(response => {
            //logic to update state
            const instantMessages = [...this.state.instantMessages];
            instantMessages.push(instantMessage)
            this.setState({ instantMessages });
          });

  }

  render(){
    const instantMessages = this.state.instantMessages.map(instantMessage => (
      <li className="instant-messages" key={instantMessage.id}>
      <p>{instantMessage.created_at}</p>
      <p>{instantMessage.user_name}</p>
      <p className="instant-message-text-display">{instantMessage.message_text}</p>
      </li>
    ))
    return(


      <div className="chat-app-container">
      <header className="chat-app-header">Instant Messenger</header>
      <ul instantmessages={this.state.instantMessages} className="instant-message-window">{instantMessages}</ul>
      <form onSubmit={this.addInstantMessage}>
        <input type="text" name="user_name" value={this.state.user_name} onChange={this.handleInput} placeholder="Enter Name"/>
        <input type="text" name="message_text" value={this.state.message_text} onChange={this.handleInput} placeholder="Enter Text"/>
        <button type="submit" value="Submit">Submit</button>
      </form>  
      </div>
    )
  }
}
export default App;

//   <ul instantmessages={this.setState({instantMessages})}

// onClick={() => this.addToChatWindow(this.newMessage)}
/////////////////////////
// REFACTORING
/////////////////////////
// import React from 'react';
// import Cookies from 'js-cookie';
// import './App.css';
//
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       instantMessages: [],
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
//     console.log(this.state.value);
//     e.preventDefault();
//
//     const instantMessage = {
//       // created_at: this.state.created_at,
//       user_name: this.state.user_name,
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
//     fetch('/api/v1/instantMessages/', options)
//       .then(response => response.json())
//       .then(data => console.log(data));
//   }
//   // addToChatWindow(newMessage) {
//   //   const instantMessages = [...this.state.instantMessages];
//   //   instantMessages.push(newMessage);
//   //   this.setState({instantMessages});
//   // }
//
//   render(){
//     const instantMessages = this.state.instantMessages.map(instantMessage => (
//       <li key={instantMessage.id}>
//       <p>{instantMessage.created_at}</p>
//       <p>{instantMessage.user_name}</p>
//       <p>{instantMessage.message_text}</p>
//       </li>
//     ))
//     return(
//
//       <div>
//       <ul>{instantMessages}</ul>
//       <form onSubmit={this.addInstantMessage}>
//         <input type="text" name="user_name" value={this.state.user_name} onChange={this.handleInput} placeholder="Enter Name"/>
//         <input type="text" name="message_text" value={this.state.message_text} onChange={this.handleInput} placeholder="Enter Text"/>
//         <button type="submit" value="Submit">Submit</button>
//       </form>
//       </div>
//     )
//   }
// }
// export default App;

// removed from button:
// onClick={() => this.state.addToChatWindow(this.instantMessages)}

/////
// render(){
//   const instantMessages = this.state.instantMessages.map((instantMessage) => {
//     const instantMessage = instantMessages.instantMessage.map()
//     <li className="instant-messages" key={instantMessage.id}>
//     <p>{instantMessage.created_at}</p>
//     <p>{instantMessage.user_name}</p>
//     <p className="instant-message-text-display">{instantMessage.message_text}</p>
//     </li>
//   })
//   return
