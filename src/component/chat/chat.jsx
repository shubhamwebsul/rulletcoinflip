import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Picker } from "emoji-mart";
import ChatRule from "../modals/chatrule";
import minilogo from "../../assets/images/favicon.png";
import "emoji-mart/css/emoji-mart.css";
import "react-notifications/lib/notifications.css";
import "./chat.scss";
import { NotificationContainer, NotificationManager } from "react-notifications";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [{
        "_id": "5de775d8f3b4f4199655d2f4",
        "message": "test",
        "imgurl": "https://www.gravatar.com/avatar/34bc9ae4ee97af564df25b152760ce8c?d=identicon&r=pg&s=120",
        "username": "genzr",
        "userid": "6287740",
        "copymsg": "test",
        "level": 1,
        "time": "2019-12-04T09:01:12.094Z",
        "__v": 0
      },
      {
        "_id": "5de7760ff3b4f4199655d2f5",
        "message": "test",
        "imgurl": "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
        "username": "vandal_Bang.GG",
        "userid": "1199197",
        "copymsg": "test",
        "level": 1,
        "time": "2019-12-04T09:02:07.995Z",
        "__v": 0
      },
      {
        "_id": "5de783c5f3b4f4199655d2f9",
        "message": "dfssd",
        "imgurl": "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
        "username": "OP Skins 3",
        "userid": "6736312",
        "copymsg": "dfssd",
        "level": 1,
        "time": "2019-12-04T10:00:37.693Z",
        "__v": 0
      },
      {
        "_id": "5de783c9f3b4f4199655d2fa",
        "message": "sfsdgsdgsdhfjhsjfhsdkjhkjfhkdsjjbjsdhjfhsdjhfsdjkfdsf",
        "imgurl": "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
        "username": "OP Skins 3",
        "userid": "6736312",
        "copymsg": "sfsdgsdgsdhfjhsjfhsdkjhkjfhkdsjjbjsdhjfhsdjhfsdjkfdsf",
        "level": 1,
        "time": "2019-12-04T10:00:41.348Z",
        "__v": 0
      },
      {
        "_id": "5de785dff3b4f4199655d301",
        "message": "test",
        "imgurl": "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
        "username": "vandal_Bang.GG",
        "userid": "1199197",
        "copymsg": "test",
        "level": 1,
        "time": "2019-12-04T10:09:35.616Z",
        "__v": 0
      },
      {
        "_id": "5de786d1f3b4f4199655d302",
        "message": "testing",
        "imgurl": "https://www.gravatar.com/avatar/059424410da2bcba87b32cb4525f6099?d=identicon&r=pg&s=120",
        "username": "Milkshake",
        "userid": "6287665",
        "copymsg": "testing",
        "level": 1,
        "time": "2019-12-04T10:13:37.516Z",
        "__v": 0
      },
      {
        "_id": "5de7cbd355fed931de34b9df",
        "message": "yes",
        "imgurl": "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg",
        "username": "opskinysuperucet",
        "userid": "6809622",
        "copymsg": "yes",
        "level": 1,
        "time": "2019-12-04T15:08:03.075Z",
        "__v": 0
      },
      {
        "_id": "5de7e76355fed931de34b9e0",
        "message": "Hello",
        "imgurl": "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/7d/7dd51e943061d5ac0f7aded765e09765ddfd6531_full.jpg",
        "username": "twitch.tv/raunchez",
        "userid": "5071479",
        "copymsg": "Hello",
        "level": 1,
        "time": "2019-12-04T17:05:39.851Z",
        "__v": 0
      },
      {
        "_id": "5de7e8af55fed931de34b9e2",
        "message": "why u took my credits xD",
        "imgurl": "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/13/131a51f133c5fd4850c0811e6752a798b8f89522_full.jpg",
        "username": "July",
        "userid": "2194295",
        "copymsg": "why u took my credits xD",
        "level": 1,
        "time": "2019-12-04T17:11:11.851Z",
        "__v": 0
      },
      {
        "_id": "5de8bfec738c956e37fcc037",
        "message": "haha first beta is over for now july",
        "imgurl": "https://www.gravatar.com/avatar/059424410da2bcba87b32cb4525f6099?d=identicon&r=pg&s=120",
        "username": "Milkshake",
        "userid": "6287665",
        "copymsg": "haha first beta is over for now july",
        "level": 1,
        "time": "2019-12-05T08:29:32.333Z",
        "__v": 0
      },
      {
        "_id": "5deba609e13e164e1f16dd54",
        "message": "fill me :D",
        "imgurl": "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/13/131a51f133c5fd4850c0811e6752a798b8f89522_full.jpg",
        "username": "July",
        "userid": "2194295",
        "copymsg": "fill me :D",
        "level": 1,
        "time": "2019-12-07T13:15:53.140Z",
        "__v": 0
      },
      {
        "_id": "5deba611e13e164e1f16dd55",
        "message": "for second one",
        "imgurl": "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/13/131a51f133c5fd4850c0811e6752a798b8f89522_full.jpg",
        "username": "July",
        "userid": "2194295",
        "copymsg": "for second one",
        "level": 1,
        "time": "2019-12-07T13:16:01.635Z",
        "__v": 0
      },
      {
        "_id": "5df0cbc1fc71bb63af485360",
        "message": "dfsdf",
        "imgurl": "https://www.gravatar.com/avatar/458f2adb72c2856d24e4f2c2bd73623d?d=identicon&r=pg&s=32",
        "username": "User 6920905",
        "userid": "6920905",
        "copymsg": "dfsdf",
        "level": 1,
        "time": "2019-12-11T10:58:09.291Z",
        "__v": 0
      },
      {
        "_id": "5df0cbc7fc71bb63af485361",
        "message": "sdfsdfsdf",
        "imgurl": "https://www.gravatar.com/avatar/458f2adb72c2856d24e4f2c2bd73623d?d=identicon&r=pg&s=32",
        "username": "User 6920905",
        "userid": "6920905",
        "copymsg": "sdfsdfsdf",
        "level": 1,
        "time": "2019-12-11T10:58:15.185Z",
        "__v": 0
      },
      {
        "_id": "5df0cbcdfc71bb63af485362",
        "message": "testsetest",
        "imgurl": "https://www.gravatar.com/avatar/458f2adb72c2856d24e4f2c2bd73623d?d=identicon&r=pg&s=32",
        "username": "User 6920905",
        "userid": "6920905",
        "copymsg": "testsetest",
        "level": 1,
        "time": "2019-12-11T10:58:21.493Z",
        "__v": 0
      }],
      username: "",
      connctedUser: "",
      isActiveemoji: false,
      imgurl: "",
      chatting: false,
      chatControl: false
    };
  
  }
  sendMessage = () => {
    var s = new RegExp(/^\s+$/);
    let messagelength = this.state.message.toString().length;
    if (this.state.message !== "" && this.state.message !== undefined && !s.test(this.state.message)) {
      if (messagelength <= 150) {
        let oldChatArray;
        let chatData = {
          message: this.state.message,
          username: localStorage.getItem("username"),
          imgurl: localStorage.getItem("profileurl"),
          level:"66"
        };
        oldChatArray = [...this.state.messages];
        oldChatArray.push(chatData);
        this.setState({ messages: oldChatArray });
        if (this.state.messages.length !== 0) {
          document.querySelector(".chat_listli:last-child").scrollIntoView({
            behavior: "smooth"
          });
        }
        this.setState({ message: "" });
      } else {
        NotificationManager.error("Your message is to long!", "Message", 3000);
      }
    }
  };
  sendmessagee = e => {
    if (e.charCode === 13) {
      e.preventDefault();
      if (!localStorage.getItem("bangToken")) {
        NotificationManager.error("Please login to start chatting!", "Message", 3000);
      } else {
        e.preventDefault();
        this.sendMessage();
      }
    }
  };
  async componentDidMount() {
      if (this.state.messages.length !== 0) {
        document.querySelector(".chat_listli:last-child").scrollIntoView({
          behavior: "auto"
        });   
    }
  }
  handleEmojiPicker = e => {
    this.setState({ isActiveemoji: !this.state.isActiveemoji });
  };
  addEmoji = e => {
    let oldmesg = this.state.message;
    this.setState({
      message: oldmesg + e.native
    });
  };

  chattingOpen = e => {
    if (e === "chat_open") {
      this.setState({
        chatting: true
      });
    } else if (e === "chat_close") {
      this.setState({
        chatting: false
      });
    }
  };
  chatControl = () => {
    console.log('????????', this.state.chatControl)
    this.setState({
      chatControl: !this.state.chatControl
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className={this.props.ChatActive ? "chat chat_active" : "chat"}>
          <div className={this.props.chatIsActive ? "chat_active" : "chat"}>
            <div
              className={this.state.isActiveemoji ? "imojistatus active" : "impojistatus inactive"}
              onClick={() => {
                this.setState({ isActiveemoji: false });
              }}
            />

            <div className="wrapper">
              <div className="chat_section">
                <Chatlist {...this.state} sendMessage={this.sendMessage} />
              </div>
              <div className="chat_footer">
                <div className="inner_wrapper">
                  <Form>
                    <Form.Group controlId="chat_message" className="custom-chantbox">
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={this.state.message}
                        placeholder="Hit Enter To Send"
                        onChange={e => this.setState({ [e.target.name]: e.target.value })}
                        onKeyPress={this.sendmessagee}
                      />
                      <div className="chatsendBtnCt">
                        {" "}
                        <div className="emojipicker" onClick={this.handleEmojiPicker}>
                          <i className="fa fa-smile-o" />
                        </div>
                      </div>
                    </Form.Group>
                  </Form>
                  {this.state.isActiveemoji && <Picker onSelect={this.addEmoji} onHide={this.handleEmojiPicker} />}
                </div>
              </div>
              <div className="chatfotter-bottom">
                <div className="links">
                  <span>
                    <i className="fa fa-user" aria-hidden="true" />
                    <span className="to-num">{this.state.connctedUser}</span>
                  </span>
                  <span className="chat-rule" onClick={this.chattingOpen.bind(this, "chat_open")}>
                    Chat Rules
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.chatting ? <ChatRule chatting={this.state.chatting} chattingOpen={this.chattingOpen} /> : null}
        <NotificationContainer />
      </React.Fragment>
    );
  }
}
export default Chat;
class Chatlist extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ul className="chat_list">
          {this.props.messages.map((msg, i) => {
            let imgurl = msg.imgurl ? msg.imgurl : minilogo;
            let username = msg.username.length > 7 ? msg.username.substring(0, 10) + "..." : msg.username;
            return (
              <li className={`chat_listli ${!msg.imgurl || msg.imgurl === "false" ? "anouncewinner" : ""}`} key={i}>
                <div className="chat_li">
                  <div className="usericon" style={{ backgroundImage: "url(" + imgurl + ")" }} />
                  <div className="chat_cont">
                    <div className="username">
                      <p>{username}</p>
                      {msg.imgurl ? (
                        <span
                          className="user-next"
                          style={{
                            backgroundColor: `${msg.level !== undefined && msg.level <= 10 ? "gray" : "#f93e3f"}`
                          }}
                        >
                          {msg.level}
                        </span>
                      ) : null}
                    </div>
                    <div className="message">{msg.message}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
