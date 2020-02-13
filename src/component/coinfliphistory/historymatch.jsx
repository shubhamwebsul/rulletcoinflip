import React, { Component } from "react";
import GGREDIMG from "../../assets/images/ggred.png";
import GGWHITEIMG from "../../assets/images/ggwhite.png";
import coinflip from "../../assets/images/coin-flip.png";
import Gun from "../../assets/images/gun.png";
import Player from "../../assets/images/player.png";
import doller from "../../assets/images/doller.png";
import history from "../../history";
import "react-notifications/lib/notifications.css";
import "./historymatch.scss";
class HistoryMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allcoinflipgame: [{
        _id: "5dc92d5017baa42af018258ett",
        players: [
          {
            itemscount: 1,
            itemsvalue: 1.83,
            chance: 50,
            username: "Milkshake",
            userid: 6287665,
            profilepic:
              "https://www.gravatar.com/avatar/059424410da2bcba87b32cb4525f6099?d=identicon&r=pg&s=120",
            coin: "betred"
          },
          {
            itemscount: 1,
            itemsvalue: 1.83,
            username: "vandal_Bang.GG",
            userid: 1199197,
            profilepic:
              "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
            coin: "betwhite",
            chance: 50
          }
        ],
        payout: false,
        gamerunning: true,
        wins: true,
        totalpot: 3.66,
        gamedate: "2019-11-11T09:43:44.000Z",
        gamehash:
          "a70f974b4cad28ea478ba4ce389f9513d5ea99ee7e19925478767ba84753b409",
        secret: "f8ef94e6dafb3cef937a3a0abde79751558ffbb8",
        upto: 1.92,
        lessto: 1.74,
        timer: 0,
        cancel: false,
        __v: 0,
        endTime: "2019-11-11T09:43:50.000Z",
        winner: "6287665",
        items: [
          {
            username: "Milkshake",
            useravtar:
              "https://www.gravatar.com/avatar/059424410da2bcba87b32cb4525f6099?d=identicon&r=pg&s=120",
            item_avatar:
              "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
            item_price: 1.83,
            item_name: "BTC",
            id: "bangbtc"
          },
          {
            username: "Milkshake",
            useravtar:
              "https://www.gravatar.com/avatar/059424410da2bcba87b32cb4525f6099?d=identicon&r=pg&s=120",
            item_avatar:
              "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
            item_price: 1.83,
            item_name: "BTC",
            id: "bangbtc"
          },
          {
            username: "Milkshake",
            useravtar:
              "https://www.gravatar.com/avatar/059424410da2bcba87b32cb4525f6099?d=identicon&r=pg&s=120",
            item_avatar:
              "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
            item_price: 1.83,
            item_name: "BTC",
            id: "bangbtc"
          }
        ]
        
      },
      {
        _id: "5dc92d5017baa42af018258et",
        players: [
          {
            itemscount: 1,
            itemsvalue: 1.83,
            chance: 50,
            username: "Milkshake",
            userid: 6287665,
            profilepic:
              "https://www.gravatar.com/avatar/059424410da2bcba87b32cb4525f6099?d=identicon&r=pg&s=120",
            coin: "betred"
          },
          {
            itemscount: 1,
            itemsvalue: 1.83,
            username: "vandal_Bang.GG",
            userid: 1199197,
            profilepic:
              "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
            coin: "betwhite",
            chance: 50
          }
        ],
        payout: false,
        gamerunning: true,
        wins: true,
        totalpot: 3.66,
        gamedate: "2019-11-11T09:43:44.000Z",
        gamehash:
          "a70f974b4cad28ea478ba4ce389f9513d5ea99ee7e19925478767ba84753b409",
        secret: "f8ef94e6dafb3cef937a3a0abde79751558ffbb8",
        upto: 1.92,
        lessto: 1.74,
        timer: 0,
        cancel: false,
        __v: 0,
        endTime: "2019-11-11T09:43:50.000Z",
        winner: "6287665",
        items: [
          {
            username: "vandal_Bang.GG",
            useravtar:
              "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
            item_avatar:
              "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
            item_price: 1.83,
            item_name: "BTC",
            id: "bangbtc"
          },
          {
            username: "vandal_Bang.GG",
            useravtar:
              "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
            item_avatar:
              "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
            item_price: 1.83,
            item_name: "BTC",
            id: "bangbtc"
          },
          {
            username: "vandal_Bang.GG",
            useravtar:
              "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
            item_avatar:
              "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
            item_price: 1.83,
            item_name: "BTC",
            id: "bangbtc"
          }
        ]
      }],
      weds: "VS",
      listtimer: 0,
      gamehash: "",
      totalpots: "",
      lengths: "",
      countjoinable: ""
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <div className="history isHiddenHistory">
              <img src={coinflip} alt="" />{" "}
              <span>
                <p>Coinflip</p>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="second">
              <ul>
                <li>
                  <img src={doller} alt="" />
                  <span>Total Value: ${this.state.totalpots}</span>
                </li>
                <li>
                  <img src={Player} alt="" />
                  <span>Lobbies: {this.state.countjoinable}</span>
                </li>
                <li>
                  <img src={Gun} alt="" />
                  <span>Total Items {this.state.lengths}</span>
                </li>
                <li className="s-last" onClick={() => history.push("/coinflip")}>
                  <span>LOBBIES</span>
                </li>
                <li
                  className="last"
                  // onClick={this.props.waxitems.bind(this, "coinflip", "")}
                >
                  <span>CREATE GAME</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="history-2">
              <img src={coinflip} alt="" />{" "}
              <span>
                <p>Coinflip History</p>
              </span>
            </div>
            <div>
              <button className="isResposiveHistoryButton" onClick={() => history.push("/coinflip")}>
                LOBBIES
              </button>
            </div>
          </div>
        </div>
        {this.state.allcoinflipgame.map((data, i) => {
          return (
            <div key={i}>
              <div className="cumatcheswrapper">
                <div className="team-v-tem">
                  {data.players.length === 1 ? (
                    <>
                      <img className="user-1 showPopOver" src={data.players[0].profilepic} alt={data.players[0].username} />
                      <div className="vers">vs</div>
                      <img
                        className="user-2 part-lobby-689417 showPopOver"
                        src={data.players[0].coin === "betred" ? GGWHITEIMG : GGREDIMG}
                        alt=""
                      />{" "}
                    </>
                  ) : (
                    <>
                      {data.players.map((pl, i) => {
                        return (
                          <>
                            <img className="user-1 showPopOver" src={pl.profilepic} alt={pl.username} />
                            {i === 0 ? <div className="vers">vs</div> : ""}
                          </>
                        );
                      })}
                    </>
                  )}
                </div>
                <div className="team-skin-values">
                  <div className="bang-cftopdiv">
                    <span className={"betred" === "betred" ? "tred" : "twhite"}>
                      $<span className="currentamount">{data.totalpot}</span>
                    </span>
                  </div>
                </div>
                <div className="team-skinlist">
                  <div className="team-hlskins">
                    {data.items.length > 5 ? (
                      <>
                        {data.items.slice(0, 5).map((item, i) => {
                          return (
                            // <div className="cfskii">
                            <img
                              src={item.item_avatar}
                              title={item.item_name}
                              alt=""
                              style={{ width: "50px", height: "50px", marginLeft: "10px" }}
                              key={i}
                            />
                            // </div>
                          );
                        })}

                        <span style={{ color: "white" }}>+{data.items.length - 5}</span>
                      </>
                    ) : (
                      <>
                        {data.items.map((item, i) => {
                          return (
                            // <div className="cfskii">
                            <img
                              key={i}
                              src={item.item_avatar}
                              title={item.item_name}
                              alt=""
                              style={{ width: "50px", height: "50px", marginLeft: "10px" }}
                            />
                            // </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>

                <div className="team-skin-rightsc isResponsiveHistoryMatchHide">
                  <div className="ggred">
                    {"betred" === "betred" ? <img src={GGREDIMG} alt="" /> : <img src={GGWHITEIMG} alt="" />}
                  </div>
                  <a className="provablyfairtopbtn" onClick={this.props.handleCoinFlipGamePopup.bind(this, "open", data._id)}>
                    <div id="" className="button provablyfair">
                      watch
                    </div>
                  </a>
                </div>
              </div>
              <div className="BottomHistoryMatch" />
            </div>
          );
        })}
        <div className="row">
          <div className="col-md-12">
            <div className="isResponsiveItem">
              <img src={doller} alt="" className="isResposiveIcon" />
              {"  "}
              <span>Total Value: ${this.state.totalpots}</span>
            </div>
          </div>
          <div className="col-md-12">
            <div className="isResponsiveItem">
              <img src={Player} alt="" className="isResposiveIcon" />
              {"  "}
              <span>Lobbies: {this.state.countjoinable}</span>
            </div>
          </div>
          <div className="col-md-12">
            <div className="isResponsiveItem">
              <img src={Gun} alt="" className="isResposiveIcon" />
              {"  "}
              <span>Total Items {this.state.lengths}</span>
            </div>
          </div>
          <div className="col-md-12">
            <button className="isResposiveButton">
              CREATE GAME
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HistoryMatch;
