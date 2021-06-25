import React from 'react';
import Moment from 'react-moment';

class MessageDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isEditing : false,
      message_text: this.props.instantMessage.message_text,
    };
    this.handleInput = this.handleInput.bind(this);
    this.saveMessage = this.saveMessage.bind(this);
    // do binds here
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  saveMessage() {

    const instantMessage = this.props.instantMessage;
    //calls instantMessage from the parent

    instantMessage.message_text = this.state.message_text;
    // sets the message from instantMessage to state
    this.props.editMessage(instantMessage);
    // calls the method editMessage from the parent
    this.setState({isEditing: false});
    // changes isEditing back to false so it returns to the default view
  }

  render(){
    const instantMessage = this.props.instantMessage;

    return(
      <li className="instant-messages">
        <Moment format="MM/DD/YYYY  hh:mm:ss">{instantMessage.created_at}</Moment>
        <p className="user_image">{instantMessage.username.toUpperCase()}</p>
        {
          this.state.isEditing
          ? <input className="input-box" type="text" name="message_text" value={this.state.message_text} onChange={this.handleInput} />
          : <p className="instant-message-text-display">{instantMessage.message_text}</p>
        }
        {
        instantMessage.has_owner_permissions && <button type='button' onClick={() => this.props.deleteMessage(instantMessage.id)}>DELETE</button>
        }
        {
          this.state.isEditing
          ? <button type='button' onClick={this.saveMessage}>SAVE</button>
          : instantMessage.has_owner_permissions && <button type='button' onClick={() => this.setState({isEditing : true})}>EDIT</button>
        }
      </li>
    )
  }
} //closes component
export default MessageDetail;


//   const instantMessage = this.props.instantMessage bc this is put at the top of the render, you do not have to use this.props in all of the returns
