import React, { Component } from 'react';

import './Chat.css'

export class Chat extends Component {
  constructor(props) {
    super(props);

    this.users = {};
  }

  render() {
    return (
      <div key={this.props.index} className='chat card'>
        <div className='card-body'>
          <div className='card-title chat__title'>{this.props.title}</div>
          <div className='card-text chat__messages'>Messages</div>
        </div>
      </div>
    )
  }
};

export default Chat;
