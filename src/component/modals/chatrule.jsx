import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./verify_modals.scss";
class ChatRule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal
        show={this.props.chatting}
        onHide={this.props.chattingOpen.bind(this, "chat_close")}
        className="customModal verify_rounds"
      >
     <Modal.Header closeButton>
          <div className="titles">
            <div className="title">Chat rules</div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="boder-do">
            <div className="pd-bo">
              <p>
                {" "}
                By accessing or using the chat feature on our website, you agree
                to fully comply with all of the rules listed below. If you do
                not follow any portion of any rule, we reserve the right to
                temporarily or permanently ban you from the chat feature.
              </p>
              <p>
                <span>#1</span> You may not harass, insult, or post content that
                is offensive to other users.
              </p>
              <p>
                <span>#2</span> You may not link to or discuss any other Crypto
                or VIRL skin related websites.
              </p>
              <p>
                <span>#3</span> You may not ask for customer support in the
                chat.
              </p>
              <p>
                <span>#4</span> You may not request skins or virtual money from
                other users.
              </p>
              <p>
                <span>#5</span> You may not swear or use foul language.
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <span
            onClick={this.props.chattingOpen.bind(this, "chat_close")}
            className="faq_cancl"
          >
            Cancel
          </span>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ChatRule;
