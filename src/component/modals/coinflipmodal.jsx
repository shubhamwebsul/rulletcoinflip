import React, { Component } from "react";
import { Modal, Button, Nav } from "react-bootstrap";
import "./conflip.scss";
import winner from "../../assets/images/winner.png";
class CoinflipModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal
        show={this.props.coinflipp}
        onHide={this.props.coinflipp.bind(this, "coinflipp_close")}
        className="customModal verify_rounds serial_db coin_modal winn_popup"
      >
        <Modal.Header closeButton>
          <div className="titles title_head">
            <div className="title">Winner</div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <div className="picture">
                <img
                  src={
                    localStorage.getItem("profileurl")
                      ? localStorage.getItem("profileurl")
                      : winner
                  }
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="win-con">
                <h4>BANG!</h4>
                <p>
                  You are the winner of your coinflip with{" "}
                  {this.props.otherName}!
                </p>
                <p>
                  <Nav
                    className="justify-content-center winning_link"
                    activeKey="#"
                  >
                    <Nav.Item>
                      <Nav.Link
                        href="https://trade.wax.io/trade-offers"
                        style={{ color: "red" }}
                        target="_blank"
                      >
                        CLAIM WINNINGS
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </p>
                <p className="tip">
                  Winning bits will be deposited to your on-site wallet
                  automatically
                </p>
                <a
                  onClick={this.props.verifyroundspopup.bind(
                    this,
                    "verifyroundspopup_open",
                    this.props.gamehash
                  )}
                  href="#"
                >
                  {" "}
                  <p className="tip">coinflip hash:- {this.props.gamehash}</p>
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default CoinflipModal;
