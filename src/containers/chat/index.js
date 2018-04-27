import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

import Chat from '../../components/Chat'
import { add } from '../../modules/chat'

import './chat.css'

export class Chats extends Component {
  constructor(props) {
    super(props);
    this.addChat = this.addChat.bind(this);
  }

  renderChats() {
    const chats = this.props.chats ? this.props.chats : [];
    if (!chats.length) {
      return (
        <p>No chats opened.</p>
      )
    }
    return chats.map((chat, index) => {
      return (
        <Chat
          key={index}
          title={chat.title}
        />
      )
    })
  }

  addChat() {
    this.props.add();
  }

  render() {
    return (
      <div>
        <Grid>
          <div className='chats'>
            {this.renderChats()}
          </div>
          <button onClick={this.addChat}>Add chat</button>
        </Grid>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  chats: state.chats
});

const mapDispatchToProps = dispatch => bindActionCreators({
  add
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats);
