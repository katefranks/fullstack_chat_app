import React from 'react';


class MessageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message_text: '',

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    // this.addToChatWindow = this.addToChatWindow.bind(this);
}

handleInput(e) {
  this.setState({[e.target.name]: e.target.value});
}

handleSubmit(e) {
  e.preventDefault();
  this.props.addInstantMessage(this.state);
  this.setState({message_text: ''});
  // set state is a function that takes a function or an object.
}


render(){
  return(
    <form className="input-form" onSubmit={this.handleSubmit}>
      <input className="input-box" type="text" name="message_text" value={this.state.message_text} onChange={this.handleInput} placeholder="Enter Text"/>
      <button className="form-button" type="submit" value="Submit">SEND</button>
    </form>
  )
}
}

export default MessageForm;
