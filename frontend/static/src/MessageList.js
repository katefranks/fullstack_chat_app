import React from 'react';
import MessageForm from './MessageForm'
import MessageDetail from './MessageDetail'
import Moment from 'react-moment';
import Cookies from 'js-cookie';

class MessageList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      instantMessages: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.addInstantMessage = this.addInstantMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
}

handleInput(e) {
  this.setState({[e.target.name]: e.target.value});
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


editMessage(instantMessage){

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(instantMessage),
    //the content being sent to the backend. 
  }


  fetch(`/api/v1/instantMessages/${instantMessage.id}/`, options)
    .then(response => response.json())
    // takes the response from the fetch request and turns it into json
    .then(data => {
      const instantMessages = [...this.state.instantMessages];
      // makes a shallow copy of instantMessages
      const index = instantMessages.findIndex(message_text => message_text.id === instantMessage.id );
      // finds the index of the messag_text and makes sure the instantmessage id is equal to the original instantMessage id to replace it
      instantMessage[index] = data;
      // changes the value of the message to the value of the data that was PUT up
      this.setState({ instantMessages });
      // sets state to the new list of messages
    });
}

//logic for save button


componentDidMount(){
    fetch('/api/v1/instantMessages/')
      .then(response => response.json())
      .then(data => this.setState({ instantMessages: data }));
  }
//
// <form className="input-form" onSubmit={this.handleSubmit}>
//   <input className="input-box" type="text" name="message_text" value={this.state.message_text} onChange={this.handleInput} placeholder="Enter Text"/>
//   <button className="form-button" type="submit" value="Submit">SEND</button>
// </form>

  //
  render(){
    const instantMessages = this.state.instantMessages.map(instantMessage => (
      <MessageDetail key={instantMessage.id} instantMessage={instantMessage} deleteMessage={this.deleteMessage} editMessage={this.editMessage}/>
    ));
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

// the below is the code while editing message detail
// render(){
//
//   const instantMessages = this.state.instantMessages.map(instantMessage => <MessageDetail/>)
//
//   return(
//     <>
//       <ul instantmessages={this.state.instantMessages} className="instant-message-window">
//         {instantMessages}
//       </ul>
//       <MessageForm addInstantMessage={this.addInstantMessage} />
//       <MessageDetail editMessage={this.editMessage} deleteMessage={this.deleteMessage} handleInput={this.handleInput} />
//     </>
// );
// }
// }
// export default MessageList;
