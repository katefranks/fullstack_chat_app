import React from 'react';
import MessageForm from './MessageForm'
import Moment from 'react-moment';
import Cookies from 'js-cookie';

class MessageList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      instantMessages: [],
    };

    this.addInstantMessage = this.addInstantMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
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

deleteMessage(id){
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
  }
  fetch(`/api/v1/instantMessages/${id}`, options)
    .then(response => {
      const instantMessages = [...this.state.instantMessages];
      const index = instantMessages.findIndex(instantMessage => instantMessage.id === id);
      instantMessages.splice(index, 1);
      this.setState({ instantMessages });
    })
  .catch((error) => {
    console.error('Error: ', error);
  });
}

editMessage(id){
  const instantMessage = {
    message_text: '',

  }
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(instantMessage),
  }
}

componentDidMount(){
    fetch('/api/v1/instantMessages/')
      .then(response => response.json())
      .then(data => this.setState({ instantMessages: data }));
  }
  render(){
    const instantMessages = this.state.instantMessages.map(instantMessage => (
      <li className="instant-messages" key={instantMessage.id}>
      <Moment format="MM/DD/YYYY  hh:mm:ss">{instantMessage.created_at}</Moment>
      <p className="user_image">{instantMessage.username}</p>
      <p className="instant-message-text-display">{instantMessage.message_text}</p>
      <button type='button' onClick={() => this.deleteMessage(instantMessage.id)}>DELETE</button>
      <button>EDIT</button>
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
