import React from 'react';
import MessageForm from './MessageForm'
import Cookies from 'js-cookie';

class MessageList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      instantMessages: [],
    };

    this.addInstantMessage = this.addInstantMessage.bind(this);

}

addInstantMessage(message){

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(message),
  }


  fetch('/api/v1/instantMessages/', options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const instantMessages = [...this.state.instantMessages];
      instantMessages.push(data);
      this.setState({instantMessages});
    });
}

componentDidMount(){
    fetch('/api/v1/instantMessages/')
      .then(response => response.json())
      .then(data => this.setState({ instantMessages: data }));
  }
  render(){
    const instantMessages = this.state.instantMessages.map(instantMessage => (
      <li className="instant-messages" key={instantMessage.id}>
      <p>Sent at: {instantMessage.created_at}</p>
      <p className="user_image">{instantMessage.username}</p>
      <p className="instant-message-text-display">{instantMessage.message_text}</p>
      </li>
    ))
    return(
      <>
        <ul instantmessages={this.state.instantMessages} className="instant-message-window">
          {instantMessages}
        </ul>
        <MessageForm addInstantMessage={this.addInstantMessage} />
      </>
    )
  }
}
export default MessageList;
