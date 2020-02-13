import React, { Component } from "react";
import logo from "../../assets/images/websultanate.png";
import { Link } from "react-router-dom";
import { Dropdown, Button, ProgressBar } from "react-bootstrap";
import profileimg from "../../assets/images/avtar.png";
import coins from "../../assets/images/coin-flip.png";
import querystring from "query-string";
import history from "../../history";
import { Modal } from "antd";
import BitcoinAddress from "../modals/bitcoinwallet";
import discord from "../../assets/images/discord.png";
import twitter from "../../assets/images/twitter.png";
import four7 from "../../assets/images/7777.png";
import Bitcoin from "../../assets/images/Bitcoin-Symbol.png";
import History from "../../assets/images/history.png";
import Logoff from "../../assets/images/logoff.png";
import Gold from "../../assets/images/Bitcoin-Symbol-gold.png";
import "./header.scss";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      profileurl: "",
      activecls1: "",
      activecls2: "active",
      visible: true,
      bitcoinwallet: false,
      isActive: false,
      chatControl: true
    };
  }
  loginWax = () => {
    localStorage.setItem(
      "bangToken",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YXhpZCI6Njc3NTY3OCwiYWRtaW4iOiI1ZGFlYjU4NTM4NjE5MTViNzAyMmMyYmUiLCJpYXQiOjE1NzM5MDM4MjcsImV4cCI6MTYwNTQzOTgyN30.5Epj_SStQ2JUKZV8tbItsjPf5uEcchn-1CioIgNnlYc"
    );
    localStorage.setItem(
      "profileurl",
      "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon"
    );
    localStorage.setItem("username", "Ashraf siddique");
    localStorage.setItem("userid", "1234567");
    this.props.changeAuth();
    let profilepic = localStorage.getItem("profileurl")
      ? localStorage.getItem("profileurl")
      : profileimg;

    let username = localStorage.getItem("username");
    this.setState({ username: username, profileurl: profilepic });
    window.history.pushState("page2", "Title", "/");
  };
  logOut = () => {
    localStorage.removeItem("bangToken");
    localStorage.removeItem("profileurl");
    localStorage.removeItem("username");
    localStorage.removeItem("userid");
    window.location.href = "/";
  };
  componentWillMount() {
    if (history.location.pathname.startsWith("/coinflip")) {
      this.setState({
        activecls1: "active",
        activecls2: ""
      });
    }
  }
  componentDidMount() {
    if (localStorage.getItem("bangToken")) {
      this.props.changeAuth();
      let profilepic = localStorage.getItem("profileurl")
        ? localStorage.getItem("profileurl")
        : profileimg;
      let username = localStorage.getItem("username");
      this.setState({ username: username, profileurl: profilepic });
    }
    const data = querystring.parse(window.location.search.toString());
    if (data.token && data.username && data.profilepic) {
      localStorage.setItem(
        "bangToken",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YXhpZCI6Njc3NTY3OCwiYWRtaW4iOiI1ZGFlYjU4NTM4NjE5MTViNzAyMmMyYmUiLCJpYXQiOjE1NzM5MDM4MjcsImV4cCI6MTYwNTQzOTgyN30.5Epj_SStQ2JUKZV8tbItsjPf5uEcchn-1CioIgNnlYc"
      );
      localStorage.setItem(
        "profileurl",
        "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon"
      );
      localStorage.setItem("username", "bang test");
      localStorage.setItem("userid", "1234567");
      this.props.changeAuth();
      let profilepic = localStorage.getItem("profileurl")
        ? localStorage.getItem("profileurl")
        : profileimg;

      let username = localStorage.getItem("username");
      this.setState({ username: username, profileurl: profilepic });
      window.history.pushState("page2", "Title", "/");
    } else if (data.isBlocked && data.message) {
      localStorage.setItem("isBlocked", data.isBlocked);
      localStorage.setItem("message", data.message);
      window.history.pushState("page2", "Title", "/");
    }
  }
  handleCancel = () => {
    this.setState({ visible: false });
    localStorage.removeItem("isBlocked");
    localStorage.removeItem("message");
  };

  Bitcoinwallet = e => {
    if (e == "openbitcoinmodal") {
      this.setState({ bitcoinwallet: true });
    } else if (e == "Bitcoinwallet_close") {
      this.setState({ bitcoinwallet: false });
    }
  };
  chatControl = () => {
    this.setState({
      chatControl: !this.state.chatControl
    });
    this.props.IsActiveChat(this.state.chatControl);
  };
  render() {
    return (
      <div className="header">
        {this.props.isAuth ? (
          <div className="container-fluid">
            <div className="row back-colo headerBar">
              <div className="col-md-8  col-xl-8 col-sm-8">
                <div className="action-bar isResponsive">
                  <ul>
                    <li>
                      <Link to="#" target="_blank">
                        {" "}
                        <img alt="" src={discord} />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        {" "}
                        <img alt="" src={twitter} />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" onClick={() => history.push("/faq")}>
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        onClick={this.props.handleVerifyRoundsPopup.bind(
                          this,
                          "verifyroundspopup_open",
                          undefined
                        )}
                      >
                        Fairness
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link to="#" onClick={this.props.termconditions}>
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 custom-header-sec1 col-sm-3">
                <div className="logo">
                  <Link
                    to="#"
                    onClick={() => {
                      history.push("/");
                      this.setState({ activecls2: "active", activecls1: "" });
                    }}
                  >
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                <div className="chatControl">
                  {this.props.ChatActive ? (
                    <i
                      className="fa fa-commenting chatIcon"
                      aria-hidden="true"
                      onClick={this.props.IsActiveChat(this.state.chatControl)}
                    />
                  ) : (
                    <i
                      className="fa fa-commenting chatIcon1"
                      aria-hidden="true"
                      onClick={this.props.IsActiveChat(this.state.chatControl)}
                    />
                  )}
                </div>
                <div className="isActiveHumburger">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <i
                        className="fa fa-bars"
                        style={{ color: "#534e4e" }}
                        aria-hidden="true"
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="loginDropdownCustom">
                      <div className="custommenu">
                        <ul className="menulist isActiveMenulist isShow">
                          <li>
                            <Dropdown.Item
                              to="#"
                              className={this.state.activecls2}
                              onClick={() => {
                                history.push("/highrollers");
                                this.setState({
                                  activecls2: "active",
                                  activecls1: ""
                                });
                              }}
                            >
                              <img src={four7} alt="High Rollers" />
                              <div
                                className="menu-name"
                                onClick={this.props.IsChatActive(
                                  this.state.isActive
                                )}
                              >
                                <span className="menulabel"> JACKPOT</span>
                              </div>
                            </Dropdown.Item>
                          </li>
                          <li>
                            <Dropdown.Item
                              to="#"
                              className={this.state.activecls1}
                              onClick={() => {
                                history.push("/coinflip");
                                this.setState({
                                  activecls1: "active",
                                  activecls2: ""
                                });
                              }}
                            >
                              <img src={coins} alt="Coinflip" />
                              <div
                                className="menu-name"
                                onClick={this.props.IsChatActive(
                                  this.state.isActive
                                )}
                              >
                                <span className="menulabel"> Coinflip</span>
                              </div>
                            </Dropdown.Item>
                          </li>
                        </ul>
                      </div>

                      <div className="action-bar isActionResponsive isShow">
                        <ul>
                          <li>
                            <Link to="#" onClick={() => history.push("/faq")}>
                              FAQ
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={this.props.handleVerifyRoundsPopup.bind(
                                this,
                                "verifyroundspopup_open",
                                undefined
                              )}
                            >
                              Fairness
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              Support
                            </Link>
                          </li>
                          <li>
                            <Link to="#" onClick={this.props.termconditions}>
                              Terms of Service
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Button
                  className="bang_btn_bg isResponsiveBang_btn_bg"
                  onClick={this.loginWax}
                >
                  Sign in with Wax
                </Button>
              </div>
              <div className="col-md-6 custom-header-sec2 col-sm-6">
                <div className="custommenu">
                  <ul className="menulist">
                    <li>
                      <Link
                        to="#"
                        className={this.state.activecls2}
                        onClick={() => {
                          history.push("/highrollers");
                          this.setState({
                            activecls2: "active",
                            activecls1: ""
                          });
                        }}
                      >
                        <img src={four7} alt="High Rollers" />
                        <div className="menu-name">
                          <span className="menulabel"> JACKPOT</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className={this.state.activecls1}
                        onClick={() => {
                          history.push("/coinflip");
                          this.setState({
                            activecls1: "active",
                            activecls2: ""
                          });
                        }}
                      >
                        <img src={coins} alt="Coinflip" />
                        <div className="menu-name">
                          <span className="menulabel"> Coinflip</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 custom-header-sec3 col-sm-3">
                <div className="menu">
                  <React.Fragment>
                    <Button
                      className="bang_btn_bg isActiveBang_btn_bg"
                      onClick={this.loginWax}
                    >
                      Sign in with Wax
                    </Button>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row back-colo headerBar">
              <div className="col-md-8  col-xl-8 col-sm-8">
                <div className="action-bar isResponsive">
                  <ul>
                    <li>
                      <Link to="#" target="_blank">
                        {" "}
                        <img alt="" src={discord} />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="https://twitter.com/bangdotgg" target="_blank">
                        {" "}
                        <img alt="" src={twitter} />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#" onClick={() => history.push("/faq")}>
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        onClick={this.props.handleVerifyRoundsPopup.bind(
                          this,
                          "verifyroundspopup_open",
                          undefined
                        )}
                      >
                        Fairness
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link to="#" onClick={this.props.termconditions}>
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4  col-xl-4 col-sm-4">
                <div className="row">
                  <div className="col-md-7">
                    <div className="progr">
                      <p>{this.props.currentlevel}</p>
                      <ProgressBar
                        now={this.props.headerxp}
                        max={this.props.level <= 10 ? 1000 : 2000}
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div
                      className="action-right isActionAvatar"
                      onClick={() => history.push("/account")}
                    >
                      <img src={localStorage.getItem("profileurl")} alt="" />{" "}
                      <span>{localStorage.getItem("username")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 custom-header-sec1 col-sm-3">
                <div className="logo">
                  <Link
                    to="#"
                    onClick={() => {
                      history.push("/");
                      this.setState({ activecls2: "active", activecls1: "" });
                    }}
                  >
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div>
                <div
                  className="action-right"
                  onClick={() => history.push("/account")}
                >
                  <img
                    src={localStorage.getItem("profileurl")}
                    className="isActionResponsiveAvatar"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 custom-header-sec2 col-sm-6">
                <div className="custommenu">
                  <ul className="menulist">
                    <li>
                      <Link
                        to="#"
                        className={this.state.activecls2}
                        onClick={() => {
                          history.push("/highrollers");
                          this.setState({
                            activecls2: "active",
                            activecls1: ""
                          });
                        }}
                      >
                        <img src={four7} alt="High Rollers" />
                        <div className="menu-name">
                          <span className="menulabel"> JACKPOT</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className={this.state.activecls1}
                        onClick={() => {
                          history.push("/coinflip");
                          this.setState({
                            activecls1: "active",
                            activecls2: ""
                          });
                        }}
                      >
                        <img src={coins} alt="Coinflip" />
                        <div className="menu-name">
                          <span className="menulabel"> Coinflip</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 custom-header-sec3 col-sm-3">
                <div className="chatControl">
                  {this.props.ChatActive ? (
                    <i
                      className="fa fa-commenting chatIcon"
                      aria-hidden="true"
                      onClick={this.props.IsActiveChat(this.state.chatControl)}
                    />
                  ) : (
                    <i
                      className="fa fa-commenting chatIcon1"
                      aria-hidden="true"
                      onClick={this.props.IsActiveChat(this.state.chatControl)}
                    />
                  )}
                </div>

                <div className="menu isHumburger">
                  <React.Fragment>
                    <div className="userProfilem">
                      <Button
                        variant="danger"
                        className="isDepositButton"
                        onClick={this.Bitcoinwallet.bind(
                          this,
                          "openbitcoinmodal"
                        )}
                      >
                        {" "}
                        <img src={Bitcoin} alt="" /> DEPOSIT BTC
                      </Button>
                    </div>
                    <div className="custom-loggedin-menu isCustomLoginMenu">
                      <span>
                        {" "}
                        <img src={Gold} alt="" /> ${this.props.USD}
                      </span>
                      <div className="loggedsett" />
                    </div>
                    <div
                      className="custom-loggedin-menu isActiveCustomLoginMenu"
                      onClick={this.Bitcoinwallet.bind(
                        this,
                        "openbitcoinmodal"
                      )}
                    >
                      <span>
                        {" "}
                        <img src={Gold} alt="" /> ${this.props.USD}
                      </span>
                      <div className="loggedsett" />
                    </div>
                  </React.Fragment>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <i className="fa fa-bars" aria-hidden="true" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="loginDropdownCustom">
                      <div className="custommenu">
                        <ul className="menulist isActiveMenulist isShow">
                          <li>
                            <Dropdown.Item
                              to="#"
                              className={this.state.activecls2}
                              onClick={() => {
                                history.push("/highrollers");
                                this.setState({
                                  activecls2: "active",
                                  activecls1: ""
                                });
                              }}
                            >
                              <img src={four7} alt="High Rollers" />
                              <div
                                className="menu-name"
                                onClick={this.props.IsChatActive(
                                  this.state.isActive
                                )}
                              >
                                <span className="menulabel"> JACKPOT</span>
                              </div>
                            </Dropdown.Item>
                          </li>
                          <li>
                            <Dropdown.Item
                              to="#"
                              className={this.state.activecls1}
                              onClick={() => {
                                history.push("/coinflip");
                                this.setState({
                                  activecls1: "active",
                                  activecls2: ""
                                });
                              }}
                            >
                              <img src={coins} alt="Coinflip" />
                              <div
                                className="menu-name"
                                onClick={this.props.IsChatActive(
                                  this.state.isActive
                                )}
                              >
                                <span className="menulabel"> Coinflip</span>
                              </div>
                            </Dropdown.Item>
                          </li>
                        </ul>
                      </div>
                      <div className="basicAction">
                        <Dropdown.Item
                          onClick={this.Bitcoinwallet.bind(
                            this,
                            "openbitcoinmodal"
                          )}
                        >
                          <img src={Bitcoin} alt="" /> BTC Cashier
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => history.push("/account")}>
                          <img src={History} alt="" /> Your history
                        </Dropdown.Item>
                        <Dropdown.Item onClick={this.logOut}>
                          <img src={Logoff} alt="" /> Logout
                        </Dropdown.Item>
                      </div>

                      <div className="action-bar isActionResponsive isShow">
                        <ul>
                          <li>
                            <Link to="#" onClick={() => history.push("/faq")}>
                              FAQ
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              onClick={this.props.handleVerifyRoundsPopup.bind(
                                this,
                                "verifyroundspopup_open",
                                undefined
                              )}
                            >
                              Fairness
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              target="_blank"
                            >
                              Support
                            </Link>
                          </li>
                          <li>
                            <Link to="#" onClick={this.props.termconditions}>
                              Terms of Service
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        )}
        {localStorage.hasOwnProperty("isBlocked") && (
          <Modal
            className="custom_Confirm_popup"
            visible={this.state.visible}
            centered
            title="Message"
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Ok
              </Button>
            ]}
          >
            {localStorage.hasOwnProperty("message") ? (
              <p>{localStorage.getItem("message")}</p>
            ) : (
              <p>You Blocked for some reason plesae contact to support</p>
            )}
          </Modal>
        )}

        {this.state.bitcoinwallet ? (
          <BitcoinAddress {...this.state} Bitcoinwallet={this.Bitcoinwallet} />
        ) : null}
      </div>
    );
  }
}

export default Header;
