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
      isEditing : null,
      edit : "",
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


editMessage(){
// (message, id)
  this.setState({isEditing : null})

// const instantMessage = {}

  // const options = {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'X-CSRFToken': Cookies.get('csrftoken'),
  //   },
  //   body: JSON.stringify(message),
  // }
  //
  //
  // fetch(`/api/v1/instantMessages/${id}`, options)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     const instantMessages = [...this.state.instantMessages];
  //     instantMessages.push(data);
  //     this.setState({instantMessages});
  //   });
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
      <li className="instant-messages" key={instantMessage.id}>
      <Moment format="MM/DD/YYYY  hh:mm:ss">{instantMessage.created_at}</Moment>
      <p className="user_image">{instantMessage.username}</p>
      { this.state.isEditing === instantMessage.id ? <input className="input-box" type="text" name="edit" value={this.state.edit} onChange={this.handleInput} placeholder={instantMessage.message_text}/> : <p className="instant-message-text-display">{instantMessage.message_text}</p> }
      <button type='button' onClick={() => this.deleteMessage(instantMessage.id)}>DELETE</button>
      {this.state.isEditing === instantMessage.id ?  <button type= 'button' onClick={() => this.editMessage() } >SAVE</button> : <button type= 'button' onClick={() => this.setState({isEditing : instantMessage.id})}>EDIT</button>}
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
