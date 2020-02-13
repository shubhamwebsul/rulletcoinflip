import React, { Component } from "react";
import { Modal, Form, Col, Button, InputGroup, FormControl, Tab, Tabs } from "react-bootstrap";
import "react-notifications/lib/notifications.css";
import copy from "copy-to-clipboard";
import "./bitcoinwallet.scss";
import { NotificationContainer, NotificationManager } from "react-notifications";

class BitcoinAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userbitcoinaddress: "",
      useravlbalance: 0,
      bitcoindata: false,
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
      this.setState({
        userbitcoinaddress: "jhgfewhurweui734657643754ghsdsd",
        useravlbalance: 44,
        bitcoindata: true,
      });
  };
  copyAddress = async () => {
    await copy(this.state.userbitcoinaddress);
    NotificationManager.success("Address copied", "Message", 3000);
  };
  render() {
    return (
      <>
        <Modal
          show={this.props.bitcoinwallet}
          onHide={this.props.Bitcoinwallet.bind(this, "Bitcoinwallet_close")}
          className="customModal serial_db bitcoin_popup wallet"
        >
          <Modal.Header closeButton className="bitcoinCloseButton" />
          <Modal.Body>
            <div className="wll-new">
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="DEPOSIT">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="max-h">
                        <label htmlFor="BIT-DEPO-ADD">BITCOIN DEPOSIT ADDRESS:</label>
                        <InputGroup className="mb-3">
                          <FormControl
                            type="text"
                            readOnly={true}
                            value={this.state.userbitcoinaddress}
                            aria-describedby="basic-addon2"
                          />
                          <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={this.copyAddress}>
                              <i className="fa fa-copy" aria-hidden="true" />
                            </Button>
                          </InputGroup.Append>
                        </InputGroup>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="barcode-depo">
                        <img
                          style={{ maxWidth: "150px", margin: "auto" }}
                          src={`https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl= ${this.state.userbitcoinaddress}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="WITHDRAW" />
              </Tabs>
            </div>
          </Modal.Body>
          <Modal.Footer className="bitcoin_footer">
            <div className="depo-cre">
              <p>
                Your deposit will be credited after <span>1</span> confirmation.{" "}
              </p>
            </div>
          </Modal.Footer>
        </Modal>
        <div />
      </>
    );
  }
}
export default BitcoinAddress;
