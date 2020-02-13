import React, { Component } from "react";
import sidered from "../../assets/images/sidered.png";
import sidewhite from "../../assets/images/sidewhite.png";
import { Modal, Button } from "react-bootstrap";
import { NotificationManager } from "react-notifications";

export default class Chosseside extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  selectOne = () => {
    if (this.props.actleft || this.props.actright) {
      let side = this.props.actright ? this.props.actright : this.props.actleft;
      this.props.waxitems("coinflip", "", "", "", side);
      this.props.chooseSide("modal_close");
    } else {
      NotificationManager.error("Please choose a side !!");
    }
  };
  render() {
    return (
      <div>
        <Modal
          show={this.props.chooseaside}
          onHide={this.props.chooseSide.bind(this, "modal_close")}
          className="customModal chooseaside"
        >
          <Modal.Header closeButton>
            <div class="bang-deposit-header">
              <h3 className="modal-title-new">Choose a side</h3>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="side-new">
              <div className="row">
                <div
                  className="col-md-6"
                  onClick={this.props.selectSide.bind(this, "coinwhite")}
                >
                  <div className="main-left">
                    <div className={`left-fade ${this.props.actleft}`}>
                      <div className="main-image">
                        <img src={sidewhite} />
                      </div>
                      <div className="main-text">
                        <p>White Coin</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6"
                  onClick={this.props.selectSide.bind(this, "coinred")}
                >
                  <div className="main-right">
                    <div className={`right-fade ${this.props.actright}`}>
                      <div className="main-image">
                        <img src={sidered} />
                      </div>
                      <div className="main-text">
                        <p>Red Coin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bitcoin_footer">
            <div className="choose-side-foot">
              <Button variant="secondary" onClick={this.selectOne}>
                Next
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
