import React from 'react';
// import Cookies from 'js-cookie';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      instantMessages: [],

    }
}
componentDidMount(){
    fetch('/api/v1/instantMessages/')
      .then(response => response.json())
      .then(data => this.setState({ instantMessages: data }));
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
      </div>
    )
  }
}
export default App;
