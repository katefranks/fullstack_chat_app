// import React from './react';
// import Moment from 'react-moment';
//
// class MessageDetail extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       isEditing : null,
//       edit : "",
//     };
//     // do binds here
//   }
//   render(){
//
//     return(
//       <li className="instant-messages" key={this.props.instantMessage.id}>
//        <Moment format="MM/DD/YYYY  hh:mm:ss">{this.props.instantMessage.created_at}</Moment>
//        <p className="user_image">{this.props.instantMessage.username}</p>
//        { this.state.isEditing === this.props.instantMessage.id ? <input className="input-box" type="text" name="edit" value={this.state.edit} onChange={this.props.handleInput} placeholder={this.props.instantMessage.message_text}/> : <p className="instant-message-text-display">{this.props.instantMessage.message_text}</p> }
//        <button type='button' onClick={() => this.deleteMessage(this.props.instantMessage.id)}>DELETE</button>
//        {this.state.isEditing === this.props.instantMessage.id ?  <button type= 'button' onClick={() => this.editMessage() } >SAVE</button> : <button type= 'button' onClick={() => this.setState({isEditing : this.props.instantMessage.id})}>EDIT</button>}
//        </li>
//     )
//   }
// } //closes component
// export default MessageDetail;
