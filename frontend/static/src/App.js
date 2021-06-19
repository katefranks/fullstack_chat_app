import React from 'react';
import Cookies from 'js-cookie';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      instantMessages: [],

    }
    this.addInstantMessage = this.addInstantMessage.bind(this);
    this.handleInput = this.handleInput.bind(this);
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
    console.log(this.state.value);
    e.preventDefault();

    const instantMessage = {
      // created_at: this.state.created_at,
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
      .then(data => console.log(data));
  }

  render(){
    const instantMessages = this.state.instantMessages.map(instantMessage => (
      <li key={instantMessage.id}>
      <p>{instantMessage.created_at}</p>
      <p>{instantMessage.user_name}</p>
      <p>{instantMessage.message_text}</p>
      </li>
    ))
    return(

      <div>
      <ul>{instantMessages}</ul>
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
