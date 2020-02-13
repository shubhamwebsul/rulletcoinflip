import React, { Component } from "react";
import { Modal, Table } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import CoinFlipGame from "../coinflip_game/coinflip_game";
import avtarimg from "../../assets/images/avtar.png";
import GGWHITEIMG from "../../assets/images/ggwhite.png";
import GGREDIMG from "../../assets/images/ggred.png";
import gunr from "../../assets/images/gun-r.png";
import dollerr from "../../assets/images/doller-r.png";
import sidewhite from "../../assets/images/sidewhite.png";
import sidered from "../../assets/images/sidered.png";
import "./coinflipgamepopup.scss";


class CoinFlipGamePopUP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gametimer: false,
      timer: 10
    };
  }

  runGameTimer = async () => {
    let timeInterval1 = setInterval(async () => {
      let lastNumber = this.state.timer;
      let newNumber = lastNumber - 1;
      if (newNumber <= 0) {
        clearInterval(timeInterval1);
        if (newNumber === 0) {
          clearInterval(timeInterval1);
          this.setState({ gametimer: false, timer: 0 });
        }
      } else {
        this.setState({
          timer: newNumber
        });
      }
    }, 1000);
  };
  BeforeTimer = async () => {
    let timeInterval2 = setInterval(async () => {
      let lastNumber = this.state.timer;
      let newNumber = lastNumber - 1;
      if (newNumber <= 0) {
        clearInterval(timeInterval2);
        if (newNumber === 0) {
          clearInterval(timeInterval2);
          this.setState({ gametimer: false, timer: 0 });
          this.props.loadGame(this.props.gamesID);
        }
      } else {
        this.setState({
          timer: newNumber
        });
      }
    }, 1000);
  };

  async componentDidMount() {
    if (this.props.timerr > 0 && this.props.players.length > 1) {
      await this.setState({
        gametimer: true,
        timer: this.props.timerr
      });
      this.BeforeTimer();
    }
  }
  componentWillUnmount() {
    this.setState({
      gametimer: false,
      timer: 10
    });
  }

  render() {
    return (
      <Modal
        show={this.props.coinflip_modal}
        onHide={this.props.handleCoinFlipGamePopup.bind(this, "close")}
        className="customModal leaderboards coinflip coinflip-watch"
      >
        <Modal.Header>
          {this.props.players.map((data, index, array) => {
            return (
              <>
                <div className="information first-info">
                  <p>
                    <img src={gunr} />
                    <span>{data.itemscount}</span>
                    <img src={dollerr} />
                    <span>${data.itemsvalue.toFixed(2)}</span>
                  </p>
                </div>
                {index === 0 && <div className="game-center"></div>}
              </>
            );
          })}
          {this.props.players.length === 1 && (
            <div className="information sec-info">
              <p>
                <img src={gunr} />
                <span>0</span>
                <img src={dollerr} />
                <span>$0.00</span>
              </p>
            </div>
          )}
        </Modal.Header>
        <Modal.Body>
          <div className="win-pop-max">
            <div className="row">
              {this.props.players.map((data, i, array) => {
                return (
                  <>
                    <div className={`content_${i + 1} col-md-5`}>
                      <div className="user_details">
                        <div
                          className={`image_wrapper ${
                            parseInt(data.userid) == parseInt(this.props.winner)
                              ? this.props.winnerclass
                              : this.props.loserclass
                          }`}
                        >
                          <div className={`user${i + 1}`}>
                            <img src={data.profilepic} />
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
                    {i === 0 ? (
                      <div className="col-md-2">
                        <div className="gameing">
                          {array.length === 2 && !this.state.gametimer && (
                            <CoinFlipGame {...this.props} />
                          )}
                          {this.state.gametimer && (
                            <div className="timer game-timer">
                              {/* <Progress
                                type="circle"
                                strokeColor={{
                                  "0%": "#f40000",
                                  "100%": "#f40000"
                                }}
                                percent={this.state.timer * 10}
                                format={percent => `${percent}`}
                              /> */}
                              <CircularProgressbar
                                strokeWidth={7}
                                background={false}
                                value={this.state.timer * 10}
                                text={this.state.timer}
                                styles={buildStyles({
                                  rotation: 0.25,
                                  strokeLinecap: "butt",
                                  textSize: "20px",
                                  pathTransitionDuration: 0.5,
                                  pathColor: `#f40000`,
                                  textColor: "#ffffff",
                                  trailColor: "#fff",
                                  backgroundColor: "#161621fc",
                                  borderWidth: "0px"
                                })}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {array.length === 1 && (
                      <>
                        <div className={`content_2 open_lobby col-md-5`}>
                          <div className="user_details">
                            <div className="user2">
                              <img src={avtarimg} />
                              <div className="white-image-coin">
                                <img
                                  src={
                                    data.coin === "betred" ? sidewhite : sidered
                                  }
                                />
                              </div>
                            </div>
                            <div className="content">
                              <div className="name">Open Lobby</div>
                              <div className="chance" />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="customModalft">
          <div className="fix">
            <a
              href="#"
              onClick={this.props.verifyroundspopup.bind(
                this,
                "verifyroundspopup_open",
                this.props.gamehash
              )}
            >
              <p>Coinflip gamehash : {this.props.gamehash}</p>
            </a>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CoinFlipGamePopUP;
