import React, { Component } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import GGWHITEIMG from "../../assets/images/sidewhite.png";
import GGREDIMG from "../../assets/images/sidered.png";
import "react-notifications/lib/notifications.css";
import "./matches.css";


class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allcoinflipgame: [
        {
          _id: "5dc92d5017baa42af018258e",
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
          _id: "5dc92d5017baa42af018258e",
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
        }
      ],
      weds: "VS",
      listtimer: 0,
      gamehash: ""
    }
  }

  async componentDidMount() {
    console.log(this.state.allcoinflipgame)

  }

  
  render() {
    return (
      <React.Fragment>
        {this.state.allcoinflipgame.map((data, i) => {
          return (
            <div>
              <div className="cumatcheswrapper">
                <div className="team-v-tem">
                  {data.players.length === 1 ? (
                    <>
                      <img
                        className="user-1 showPopOver"
                        src={data.players[0].profilepic}
                        alt={data.players[0].username}
                      />
                      <div className="vers">vs</div>
                      <img
                        className="user-2 part-lobby-689417 showPopOver"
                        src={
                          data.players[0].coin === "betred"
                            ? GGWHITEIMG
                            : GGREDIMG
                        }
                        alt=""
                      />{" "}
                    </>
                  ) : (
                    <>
                      {data.players.map((pl, i) => {
                        return (
                          <>
                            <img
                              className="user-1 showPopOver"
                              src={pl.profilepic}
                              alt={pl.username}
                            />
                            {i === 0 ? <div className="vers">vs</div> : ""}
                          </>
                        );
                      })}
                    </>
                  )}
                </div>
                <div className="team-skinlist">
                  <div className="team-hlskins scroll">
                    {data.items.length > 5 ? (
                      <>
                        {data.items.slice(0, 5).map((item, i) => {
                          return (
                            <div className="cfskii">
                              <img
                                src={item.item_avatar}
                                title={item.item_name}
                                alt=""
                              />
                            </div>
                          );
                        })}

                        <span style={{ color: "white" }}>
                          +{data.items.length - 5}
                        </span>
                      </>
                    ) : (
                      <>
                        {data.items.map((item, i) => {
                          return (
                            <div className="cfskii">
                              <img
                                src={item.item_avatar}
                                title={item.item_name}
                                alt=""
                              />
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
                <div className="bang-cftopdiv isActiveResponsiveNumber">
                  <span class="twhite">
                    $<span class="currentamount">{data.totalpot}</span>
                  </span>
                  {data.players.length === 1 && (
                    <>
                      {" "}
                      <br />${data.lessto} - ${data.upto}
                    </>
                  )}
                </div>
                <div className="team-skin-values isResponsiveNumber">
                  <div className="bang-cftopdiv">
                    <span class="twhite">
                      $<span class="currentamount">{data.totalpot}</span>
                    </span>
                    {data.players.length === 1 && (
                      <>
                        {" "}
                        <br />${data.lessto} - ${data.upto}
                      </>
                    )}
                  </div>
                </div>

                <div className="team-skin-rightsc isResposiveHiddenButtonGroup">
                  {data.players.length === 2 && data.timer > 0 && (
                    <div className="timer-to">
                      <CircularProgressbar
                        strokeWidth={7}
                        background={false}
                        value={data.timer * 10}
                        text={data.timer}
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
                  {data.players.length === 1 &&
                    localStorage.getItem("userid") ==
                      data.players[0].userid && (
                      <a
                        className="provablyfairtopbtn"
                      >
                        <div id="" className="button provablyfair">
                          Cancel
                        </div>
                      </a>
                    )}
                  {data.players.length === 1 && (
                    <a className="cfanimswitch">
                      <div
                        className="button cfanimswitch"
                      >
                        Join
                      </div>
                    </a>
                  )}
                  <a
                    className="provablyfairtopbtn"
                  >
                    <div id="" className="button provablyfair">
                      watch
                    </div>
                  </a>
                </div>
              </div>

              <div className="isResponsiveActiveBottomGroup">
                <div className="isResponsiveActiveBottomButtonGroup">
                  {data.players.length === 2 && data.timer > 0 && (
                    <div className="timer-to">
                      <CircularProgressbar
                        strokeWidth={7}
                        background={false}
                        value={data.timer * 10}
                        text={data.timer}
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
                  {data.players.length === 1 &&
                    localStorage.getItem("userid") ==
                      data.players[0].userid && (
                      <button className="cancelCustomButton">
                        <div id="" className="button provablyfair">
                          Cancel
                        </div>
                      </button>
                    )}
                  {data.players.length === 1 && (
                    <button className="joinCustomButton">
                      <div
                        className="button cfanimswitch"
                      >
                        Join
                      </div>
                    </button>
                  )}
                  <button
                    className="watchCustomButton"
                    
                  >
                    <div id="" className="button provablyfair">
                      watch
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
export default Matches;
