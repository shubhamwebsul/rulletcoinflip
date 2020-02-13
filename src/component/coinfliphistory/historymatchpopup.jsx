import React, { Component } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import Game from "./game";
import GGREDIMG from "../../assets/images/ggred.png";
import GGWHITEIMG from "../../assets/images/ggwhite.png";
import gunr from "../../assets/images/gun-r.png";
import dollerr from "../../assets/images/doller-r.png";
import "./historymachpopup.scss";
class CoinflipHistoryPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    
      <Modal
        show={this.props.coinflip_modal}
        onHide={this.props.handleCoinFlipGamePopup.bind(this, "close")}
        className="customModal leaderboards coinflip coinflip-history"
      >
      {console.log(this.props.winner)}
        <Modal.Header>
          {this.props.players.map((data, index, array) => {
            return (
              <>
                <div className="information isResponsiveHistoryMatchPopup">
                  <p>
                    <img src={gunr} alt=""/>
                    <span>{data.itemscount}</span>
                    <img src={dollerr} alt=""/>
                    <span>${data.itemsvalue.toFixed(2)}</span>
                  </p>
                </div>
                {index === 0 && <div className="game-center"></div>}
              </>
            );
          })}
        </Modal.Header>
        <Modal.Body>
          <div className="win-pop-max isResponsiveModalBodyHistorymatchHide">
            <div className="row">
              {this.props.players.map((data, i, array) => {
                return (
                  <>
                    <div className={`content_${i + 1} col-md-5`}>
                      <div className="user_details">
                        <div
                          className={`image_wrapper ${
                            parseInt(data.userid) ===
                            parseInt(this.props.winner)
                              ? this.props.winnerclass
                              : this.props.loserclass
                          }`}
                        >
                          <div className={`user${i + 1}`}>
                            <img src={data.profilepic} alt="" />
                          </div>
                          {data.coin === "betred" ? (
                            <span
                              style={{
                                backgroundImage: "url(" + GGREDIMG + ")"
                              }}
                            />
                          ) : (
                            <span
                              style={{
                                backgroundImage: "url(" + GGWHITEIMG + ")"
                              }}
                            />
                          )}
                        </div>
                        <div className="content">
                          <div className="name">{data.username}</div>
                          <div className="chance">
                            {data.chance.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                      <div className="content__">
                        <Table striped bordered variant="dark">
                          <tbody>
                            {data.items.map(data1 => {
                              return (
                                <tr>
                                  <td>
                                    <span
                                      className="dot"
                                      style={{
                                        backgroundColor:
                                          data1.item_name === "BTC"
                                            ? "#ff9400"
                                            : "#f52251"
                                      }}
                                    ></span>
                                    <span
                                      className="avtar"
                                      style={{
                                        backgroundImage:
                                          "url(" + data1.item_avatar + ")"
                                      }}
                                    />
                                  </td>
                                  <td>
                                    {/* <p>0.03746251 </p> */}
                                    <p
                                      style={{
                                        color:
                                          data1.item_name === "BTC"
                                            ? "#ff9400"
                                            : "#f52251"
                                      }}
                                    >
                                      {data1.item_name.substring(0, 10)}
                                    </p>
                                  </td>
                                  <td>
                                    <span
                                      style={{
                                        color:
                                          data1.item_name === "BTC"
                                            ? "#ff9400"
                                            : "#f52251"
                                      }}
                                    >
                                      $
                                    </span>
                                    {data1.item_price}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div className="gameing">
                        {array.length === 2 && i === 0 && (
                          <Game {...this.props} />
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="win-pop-max isResponsiveModalBodyHistorymatchActive">
            <div className="row">
              {this.props.players.map((data, i, array) => {
                return (
                  <>
                    <div className={`content_${i + 1}`}>
                      <div className="user_details">
                        <div
                          className={`image_wrapper ${
                            parseInt(data.userid) ===
                            parseInt(this.props.winner)
                              ? this.props.winnerclass
                              : this.props.loserclass
                          }`}
                        >
                          <div className={`user${i + 1}`}>
                            <img src={data.profilepic} alt="" style={{width:"65px"}} />
                          </div>
                          {data.coin === "betred" ? (
                            <span
                              style={{
                                backgroundImage: "url(" + GGREDIMG + ")"
                              }}
                            />
                          ) : (
                            <span
                              style={{
                                backgroundImage: "url(" + GGWHITEIMG + ")"
                              }}
                            />
                          )}
                        </div>
                        <div className="content">
                          <div className="name">{data.username}</div>
                          <div className="chance">
                            {data.chance.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                      <div className="content__">
                        <Table striped bordered variant="dark">
                          <tbody>
                            {data.items.map(data1 => {
                              return (
                                <tr>
                                  <td>
                                    <span
                                      className="dot"
                                      style={{
                                        backgroundColor:
                                          data1.item_name === "BTC"
                                            ? "#ff9400"
                                            : "#f52251"
                                      }}
                                    ></span>
                                    <span
                                      className="avtar"
                                      style={{
                                        backgroundImage:
                                          "url(" + data1.item_avatar + ")"
                                      }}
                                    />
                                  </td>
                                  <td>
                                    {/* <p>0.03746251 </p> */}
                                    <p
                                      style={{
                                        color:
                                          data1.item_name === "BTC"
                                            ? "#ff9400"
                                            : "#f52251"
                                      }}
                                    >
                                      {data1.item_name.substring(0, 10)}
                                    </p>
                                  </td>
                                  <td>
                                    <span
                                      style={{
                                        color:
                                          data1.item_name === "BTC"
                                            ? "#ff9400"
                                            : "#f52251"
                                      }}
                                    >
                                      $
                                    </span>
                                    {data1.item_price}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>
                    </div>

                    {/* <div className="col-md-2"> */}
                      <div className="gameing">
                        {array.length === 2 && i === 0 && (
                          <Game {...this.props} />
                        )}
                      </div>
                    {/* </div> */}
                  </>
                );
              })}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="customModalft">
          {/* <Button variant="primary">Close</Button> */}
          <div className="fix">
            <p>Coinflip gamehash : {this.props.gamehash}</p>
            <p>Game id: {this.props.gamesID}</p>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CoinflipHistoryPopup;
