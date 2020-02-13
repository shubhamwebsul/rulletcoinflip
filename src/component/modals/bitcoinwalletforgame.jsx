import React, { Component } from "react";
import { Modal, Form, Col, Button } from "react-bootstrap";
import "react-notifications/lib/notifications.css";
import Loader from "react-loader-spinner";

class BitcoinWalletForGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userbitcoinaddress: "",
      username: "",
      userid: "",
      userbitcoinid: "",
      useravlbalance: "",
      userpendingbalance: "",
      usertransactions: [],
      profilepic: "",
      userbitcoilabel: "",
      amount: "",
      bitcoindata: false,
      warrning: false,
      banggaddress: "",
      bitloader: false
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    this.GetBitcoinData();
  }
  GetBitcoinData = async () => {
  
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.bitcoinwalletForGame}
          onHide={this.props.BitcoinwalletForGame.bind(this, "Bitcoinwallet_close")}
          className="customModal verify_rounds serial_db bitcoin_popup"
        >
          <Modal.Header closeButton>
            <div className="titles">
              <div className="title">Private bitcoin wallet</div>
            </div>
          </Modal.Header>
          <Modal.Body>
            {this.state.bitloader && (
              <div className="customLodaret">
                <Loader type="Bars" color="#f40000" height="60" width="60" />
              </div>
            )}
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="fromOriginAddress">
                  <Form.Label>Your wallet Address</Form.Label>
                  <div className="address_space">
                    <Form.Control
                      type="text"
                      readonly="true"
                      value={this.state.userbitcoinaddress}
                    />
                    <Button onClick={this.copyAddress}>
                      <span>
                        <i className="fa fa-copy" aria-hidden="true" />
                      </span>
                      <span></span>
                    </Button>
                  </div>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formRecipientAddress">

                </Form.Group>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer className="bitcoin_footer">
           
          </Modal.Footer>
        </Modal>
        <div></div>
      </>
    );
  }
}

export default BitcoinWalletForGame;
