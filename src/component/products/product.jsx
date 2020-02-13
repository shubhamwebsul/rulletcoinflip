import React, { Component } from "react";
import { Modal, Button, Accordion, Card } from "react-bootstrap";
import Dice from "../../assets/images/dice.png";
import "./product.scss";
import {
  Accordion as Ac,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldGames: [],
      show: false,
      formula: "((chance.floating({min: 0, max: 100, fixed: 6}))/100);",
      hashcode:
        "c281d3b36a39391e96d7a001b5491a4611a20d108fdcfd6fd0ef67a7d745d830",
      verifiedhashcode:
        "c281d3b36a39391e96d7a001b5491a4611a20d108fdcfd6fd0ef67a7d745d830",
      servergeneretd: "834369fa79546974701215c461ddf1",
      depositedItems: [],
      finalseed: "",
      jsondata: "",
      signature: "",
      sha256: "",
      ticket: "",
      winner: "",
      from: "",
      to: "",
      playername: "",
      iddd: ""
    };
  }
  openHashModel = windata => {
    let allItems = [];
    windata.arr.forEach(player => {
      player.items.forEach(items => {
        allItems.push(items);
      });
    });

    setTimeout(() => {
      this.setState({
        depositedItems: allItems,
        hashcode: windata.srver_hash,
        verifiedhashcode: windata.srver_hash,
        servergeneretd: windata.server_seed,
        finalseed: windata.random_seed,
        jsondata: JSON.stringify(windata.random_obj),
        signature: windata.random_signature,
        sha256: windata.secret,
        ticket: windata.ticket,
        winner: windata.winner,
        totalsum: windata.sum,
        winmodule: windata.percentage,
        show: true,
        from: windata.from ? windata.from : "--",
        to: windata.to ? windata.to : "--",
        playername: windata.playername ? windata.playername : "--",
        iddd: windata.iddd ? windata.iddd : "--"
      });
    }, 100);
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  componentDidMount() {
    this.props.alloldGames.forEach(el => {
      el.collpase = false;
    });
  }
  render() {
    return (
      <div className="high">
        <div className="row product">
          <div className="col-md-12">
            <Ac allowZeroExpanded={true}>
              {this.props.alloldGames.map((alldata, i) => {
                return (
                  <AccordionItem key={i}>
                    <Card>
                      <Card.Header>
                        <div className="ac-hed-pt">
                          <div className="pwinavat">
                            <img
                              src={alldata.winner.profilepic}  alt=""
                              className="showPopOver"
                            />
                          </div>
                          <div className="pwindet">
                            <div className="pwinname">
                              {alldata.winner.username}
                            </div>
                            <div>
                              has won the pot valued at{" "}
                              <span
                                style={{
                                  color: `${alldata.winner.profileColor}`
                                }}
                              >
                                ${alldata.windata.sum.toFixed(2)}
                              </span>{" "}
                              with{" "}
                              <span
                                style={{
                                  color: `${alldata.winner.profileColor}`
                                }}
                              >
                                {alldata.winner.chance.toFixed(2)}%
                              </span>{" "}
                              to win
                            </div>
                          </div>
                        </div>
                        <div className="pwindet2">
                          <div>
                            {" "}
                            <img
                              src={Dice} alt=""
                              style={{
                                backgroundColor: `${alldata.winner.profileColor}`
                              }}
                            />
                            Winning Ticket : {alldata.windata.ticket}
                          </div>
                          <div>
                            <a
                              href="javascript:;"
                              className="jphistoryhash"
                              onClick={this.openHashModel.bind(
                                this,
                                alldata.windata
                              )}
                            >
                              {alldata.gamehash}
                            </a>
                          </div>
                        </div>
                        <span className="btn-link">
                          <a
                            href={`/highrollerreplay?hash=${alldata.gamehash}`}
                            target="_balnk"
                          >
                            <i
                              className="fa fa-repeat"
                              style={{
                                color: `${alldata.winner.profileColor}`
                              }}
                              aria-hidden="true"
                            />
                          </a>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <i
                                className="fa fa-chevron-down"
                                style={{
                                  color: `${alldata.winner.profileColor}`
                                }}
                                aria-hidden="true"
                              />
                            </AccordionItemButton>
                          </AccordionItemHeading>
                        </span>
                      </Card.Header>
                    </Card>

                    <AccordionItemPanel>
                      <Card.Body>
                        <div className="product-main-container">
                          {alldata.items.map((datas, i) => {
                            return (
                              <div className="prod-grid-outer" key={i}>
                                <div className="prod-grid">
                                  <div className="prodcut-image">
                                    <img src={datas.item_avatar} alt="" />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </Card.Body>
                      {/* <hr className="cardBorder"/> */}
                    </AccordionItemPanel>
                    <hr className="cardBorder" />
                  </AccordionItem>
                );
              })}
            </Ac>
          </div>
        </div>
        <Modal
          size="lg"
          show={this.state.show}
          onHide={this.handleClose}
          className="winmodal customModal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Provably Fair</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="boder-do">
              <div className="pd-bo">
                <div className="paragraph">
                  var ChanceJS = require("chance"); var server_seed Generated
                  during round creation, saved in the database, encoded with the
                  salt for safety purposes. var random_seed Generated just when
                  the round ends, using random.org's API var
                  mod=server_seed+'-'+random_seed; var chance = new
                  ChanceJS(mod); var percentage = {this.state.formula} This part
                  generates the winning module from the server seed and all the
                  user seeds. var ticket=sum*percentage; The total value of the
                  jackpot * the newly generated percentage determines the
                  winning ticket, the user who holds the ticket wins the pot.
                  Upon entering a Game ID or a Game Hash you can verify the
                  rounds on our site.
                </div>
                <div className="headingdiv">
                  <h4>Hash</h4>
                  <div>
                    <i>
                      {" "}
                      This hash was generated when the game was added to the
                      database
                    </i>{" "}
                  </div>
                  <div> {this.state.hashcode} </div>
                </div>
                <div className="headingdiv">
                  <h4>Verified Hash</h4>
                  <div>
                    <i>
                      {" "}
                      Hash generated right now for verification purposes SHA256(
                      {this.state.sha256})  
                    </i>{" "}
                  </div>
                  <div> {this.state.verifiedhashcode} </div>
                </div>
                <div className="headingdiv">
                  <h4>Server Generated Seed</h4>
                  <div>
                    <i>
                      {" "}
                      Hash generated by our server, hashed using a salt and
                      displayed to you. Used together with the random.org Seed
                      to generate the winning module  
                    </i>{" "}
                  </div>
                  <div> {this.state.servergeneretd} </div>
                </div>
                <div className="headingdiv">
                  <h4>Random.org Seed</h4>
                  <div>
                    <i>
                      {" "}
                      Hash generated by Random.org as the round ended, we use
                      this hash to determine the winning module  
                    </i>{" "}
                  </div>
                  <div> {this.state.finalseed} </div>
                </div>
                <div className="headingdiv">
                  <h4>Random.org API verification JSON</h4>
                  <div>
                    <i>
                      {" "}
                      Enter this hash to{" "}
                      <a href="https://api.random.org/verify" target="_blank">
                        https://api.random.org/verify
                      </a>{" "}
                      with the serial below to verify the round yourself  
                    </i>{" "}
                  </div>
                  <div> {this.state.jsondata} </div>
                </div>
                <div className="headingdiv">
                  <h4>Random.org API verification Signature</h4>
                  <div>
                    <i> Also required to verify our requests  </i>{" "}
                  </div>
                  <div> {this.state.signature} </div>
                </div>
                <div className="headingdiv">
                  <h4>Jackpot Sum</h4>
                  <div>
                    <i> Total Jackpot Sum  </i>{" "}
                  </div>
                  <div>${this.state.totalsum}</div>
                </div>
                <div className="headingdiv">
                  <h4>Module</h4>
                  <div>
                    <i>
                      The winning module determines which ticket wins the pot
                      (Jackpot Sum * Winning module)  
                    </i>
                  </div>
                  <div>{this.state.winmodule}</div>
                  <div>
                    {" "}
                    <i>
                      Winning ticket Deposited skins are all assigned tickets
                      depending on the order they were deposited in and their
                      value
                    </i>
                  </div>
                  <div>{this.state.ticket}</div>
                </div>
                <div className="headingdiv">
                  <h4>
                    Game: {this.state.iddd} is verified and the winner is{" "}
                    <span className="highlight">{this.state.playername}</span>{" "}
                    with winning tickets {this.state.from} - {this.state.to}
                  </h4>
                </div>
                <div className="headingdiv">
                  {this.state.depositedItems.map((data, i) => {
                    return (
                      <div className="model_items_img" key={i}>
                        <img src={data.item_avatar} alt="" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Products;
