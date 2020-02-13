import React, { Component } from "react";
import queryString from "query-string";
import Wheel from "./wheelreplay";
import rulletspin from "../../assets/audio/rulletspin.wav";
import afterspin from "../../assets/audio/afterspin.wav";
import Diceg from "../../assets/images/dice-g.png";
import Gun from "../../assets/images/gun.png";
const allWinnerBomb = [
  {
    "#00d7ff": "hue-rotate(-213deg) contrast(100%) saturate(9)"
  },

  { "#ff6af4": "hue-rotate(-102deg) contrast(130%) saturate(9)" },

  { "#763fbc": "hue-rotate(-132deg) contrast(100%) saturate(9)" },

  { "#faf8dd": "sepia(90%)" },

  { "#cc99ff": "hue-rotate(-81deg) contrast(101%) saturate(1)" },

  { "#ff3155": "hue-rotate(-49deg) contrast(101%) saturate(8)" },

  { "#ffaf42": "hue-rotate(20deg) contrast(101%) saturate(8)" },

  { "#ffed5e": "hue-rotate(-330deg) contrast(96%) saturate(8)" },

  {
    "#49f770": "hue-rotate(-244deg) contrast(104%) brightness(113%) saturate(8)"
  },

  {
    "#2daefd": "hue-rotate(-214deg) contrast(104%) brightness(113%) saturate(8)"
  }
];

class Highrollerreplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboardspopup: false,
      verifyroundspopup: false,
      serialdatabasepopup: false,
      totalPot: 0,
      AllUser: [],
      Allitems: [],
      profilePic: "",
      allgames: [
        {
          _id: "5dfcd6da434fdb3d2a06a392",
          players: [
            {
              itemscount: 1,
              itemsvalue: 0.72,
              chance: 25.0871080139373,
              profileColor: "#ff3155",
              username: "OP Skins 3",
              userid: 6736312,
              profilepic:
                "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
              items: [
                {
                  username: "OP Skins 3",
                  useravtar:
                    "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
                  item_avatar:
                    "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                  item_price: 0.72,
                  item_name: "BTC",
                  profileColor: "#ff3155",
                  id: "bangbtc"
                }
              ],
              colorIndex: 5
            },
            {
              itemscount: 3,
              itemsvalue: 2.15,
              chance: 74.9128919860627,
              profileColor: "#ffed5e",
              username: "User 6775678",
              userid: 6775678,
              profilepic:
                "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
              items: [
                {
                  username: "User 6775678",
                  useravtar:
                    "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
                  item_avatar:
                    "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                  item_price: 0.71,
                  item_name: "BTC",
                  profileColor: "#ffed5e",
                  id: "bangbtc"
                },
                {
                  username: "User 6775678",
                  useravtar:
                    "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
                  item_avatar:
                    "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                  item_price: 0.72,
                  item_name: "BTC",
                  profileColor: "#ffed5e",
                  id: "bangbtc"
                },
                {
                  username: "User 6775678",
                  useravtar:
                    "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
                  item_avatar:
                    "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                  item_price: 0.72,
                  item_name: "BTC",
                  profileColor: "#ffed5e",
                  id: "bangbtc"
                }
              ],
              colorIndex: 6
            }
          ],
          payout: false,
          depositagain: true,
          gamerunning: false,
          totalpot: 2.87,
          gamedate: "2019-12-20T14:12:42.692Z",
          gamehash:
            "80a98c5b5ab489239f5303c9da5baff161b83e394e3f9dab9e6ea99c32a4d86b",
          timer: 0,
          secret: "54216d88552080eeb5c33f9049f49ba86f2c2bbc",
          __v: 0,
          windata: {
            secret: "54216d88552080eeb5c33f9049f49ba86f2c2bbc",
            srver_hash:
              "80a98c5b5ab489239f5303c9da5baff161b83e394e3f9dab9e6ea99c32a4d86b",
            server_seed:
              "$2b$10$pDgF11HEMTJSiOljmlOIcuPkN2MNMnrkACZb3WXmB2lsdiveNLtzq",
            random_seed: "-xq611y119w7nqqR715v",
            mod:
              "$2b$10$pDgF11HEMTJSiOljmlOIcuPkN2MNMnrkACZb3WXmB2lsdiveNLtzq--xq611y119w7nqqR715v",
            random_obj: {
              method: "generateSignedStrings",
              hashedApiKey:
                "NfPAZFIxeCpuDnA/Z9Rpg5yux60NGPAi9cIHBG9BoANeC2TDqJn2HiRpB+3hYKiu/T0Kw7Jjj86899KoEfcJCA==",
              n: 1,
              length: 20,
              characters: "bcdfghjklmnpqrstvwxyz123456789-HR-151734",
              replacement: true,
              data: ["-xq611y119w7nqqR715v"],
              license: {
                type: "developer",
                text:
                  "Random values licensed strictly for development and testing only",
                infoUrl: null
              },
              userData: null,
              completionTime: "2019-12-20 14:15:23Z",
              serialNumber: 1347
            },
            random_signature:
              "XdiRC95+Ig+8P4uckplC0KmUzd/XUnHdwDJ6Qq4ZR3IQNfWYkmUcLVaNyhU4slZcbbqQoFxel7BV3Cd5jXBiPujv5bV8GPexH8pjIElcEkBzGj2J6hdSeBfey82Vi1E3ZBy7FaBYjmb7+rEtVGRSkxTGlLbOfqai1RSuVfHhNs8ZV0UYUQDZFsDQNqLI6FhqYy6z9VgAfFCOwR7UaNSIF/HNxJg8dpC/DGb0hBz8FanWgdes4jv3xkI7nUiOGx04+4Ciz+eX/s8l2zSCKhQ3k8IwG0f8RvbHGZ0HKBoeuMmSGfApyr9Lt+WqeWX0XK1vBv2afs005m7xXUqFn7292O2ony3lgjQaLXa2yTf/nI/f4URLBmXcsmPDECWXZrsBrowZZvJh+p6tLVjiEetn7wJPHOXt1iBm5JkQt9oQWIsKaSERSZeg5XXWacXzfp122lLkEVxCLlg6NvHY8LHhHALnKdEqMzl8lXni3eDPraCrTLAekxOGVEfZvBVMCy1WfXhGT7PsqPkcigBMO33Omj9krZ7lbG84+grhRCEg1s3hb63MPKjxhW9QvgyVpa32GyagADJsHraITzozbIx6i1MAyKZTguGS6OadN6k8RqxjFGO2ITVSIJNMAYt0e5YEY0c+YCAcWgwR+J2ynuZphb1adLmlbhOmMYJ2TbcVg2Q=",
            ticket: 1.2498467429,
            sum: 2.87,
            percentage: 0.43548667,
            winner:
              "Game: 5dfcd6da is verified and the winner is User 6775678 with winning tickets 0.72 - 1.43",
            arr: [
              {
                itemscount: 1,
                itemsvalue: 0.72,
                chance: 25.0871080139373,
                profileColor: "#ff3155",
                username: "OP Skins 3",
                userid: 6736312,
                profilepic:
                  "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
                items: [
                  {
                    username: "OP Skins 3",
                    useravtar:
                      "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
                    item_avatar:
                      "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                    item_price: 0.72,
                    item_name: "BTC",
                    profileColor: "#ff3155",
                    id: "bangbtc"
                  }
                ],
                colorIndex: 5
              },
              {
                itemscount: 3,
                itemsvalue: 2.15,
                chance: 74.9128919860627,
                profileColor: "#ffed5e",
                username: "User 6775678",
                userid: 6775678,
                profilepic:
                  "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
                items: [
                  {
                    username: "User 6775678",
                    useravtar:
                      "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
                    item_avatar:
                      "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                    item_price: 0.71,
                    item_name: "BTC",
                    profileColor: "#ffed5e",
                    id: "bangbtc"
                  },
                  {
                    username: "User 6775678",
                    useravtar:
                      "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
                    item_avatar:
                      "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                    item_price: 0.72,
                    item_name: "BTC",
                    profileColor: "#ffed5e",
                    id: "bangbtc"
                  },
                  {
                    username: "User 6775678",
                    useravtar:
                      "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
                    item_avatar:
                      "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                    item_price: 0.72,
                    item_name: "BTC",
                    profileColor: "#ffed5e",
                    id: "bangbtc"
                  }
                ],
                colorIndex: 6
              }
            ],
            winnerid: "6775678",
            from: "0.72",
            to: "1.43",
            playername: "User 6775678",
            iddd: "5dfcd6da"
          },
          winner: "6775678"
        }
      ],
      gameid: "",
      hash: "",
      alloldGames: [],
      lasttotal: 0,
      lastwinner: "",
      lastwinnername: "",
      percentage: "",
      depositedAmount: "",
      dynamicTimer: "",
      useridforfilter: "",
      winnerID: "",
      loser: "",
      winner: "winner",
      winnerColor: "",
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
      verifieddata: false,
      showmatch: false,
      rotationTo: 0,
      transitionTime: "",
      show: false,
      profileColor: ""
    };
    this.audio = new Audio(rulletspin);
    this.winaudio = new Audio(afterspin);
  }

  async componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    var query = window.location.search.substr(1);
    var resultval = {};
    query.split("&").forEach(function(part) {
      var item = part.split("=");
      resultval[item[0]] = decodeURIComponent(item[1]);
    });
    let payload = {
      hash: resultval.hash
    };
    let filterUserData = this.state.allgames.filter(
      el => el.gamehash === payload.hash
    );
    if (filterUserData.length > 0) {
      this.setIntervalFunction(filterUserData[0]);
    }
  };

  setIntervalFunction = UserData => {
    let a = 0;
    let count = 0;
    let setIntervalfunction = setInterval(() => {
      let oldDataState = [...this.state.AllUser];
      let AllData = UserData.players;
      let totalpot = UserData.totalpot.toFixed(2);
      if (AllData.length > 0) {
        let element = AllData;
        let itemsValue = element[a].itemsvalue.toFixed(2);
        let pic;
        let url = queryString.parseUrl(element[a].profilepic);
        if (url.query.s !== undefined) {
          pic = element[a].profilepic.slice(0, -2) + 120;
        } else {
          pic = element[a].profilepic;
        }
        oldDataState.push({
          userid: element[a].userid,
          profilepic: pic,
          username: element[a].username,
          itemlength: element[a].itemscount,
          itemsvalue: itemsValue,
          userColor: element[a].profileColor,
          chance: element[a].chance
        });
        this.setState({
          AllUser: oldDataState,
          totalPot: totalpot
        });
        if (a === element.length - 1) {
          clearInterval(setIntervalfunction);
          this.GameResult(UserData.windata);
        }
      }
      a++;
    }, 1500);
  };

  GameResult = serverGenerated => {
    let winmodule = serverGenerated;
    let filterUserData = winmodule.arr.filter(
      el => parseInt(el.userid) === parseInt(winmodule.winnerid)
    );
    let indexOfwinner = winmodule.arr.findIndex(
      data => parseInt(data.userid) === parseInt(winmodule.winnerid)
    );

    let playerChance = filterUserData[0].chance;
    let winnerColorIndex = filterUserData[0].colorIndex;
    let profileColor = filterUserData[0].profileColor;
    const previousDegreeSum = this.calculateDegree(
      winmodule.arr,
      indexOfwinner
    );
    let winnerRotateDegree =
      (previousDegreeSum + playerChance / (Math.floor(Math.random() * 3) + 2)) *
      3.6;

    winnerRotateDegree = 360 * 10 + winnerRotateDegree;
    setTimeout(() => {
      this.rotate(winnerRotateDegree);
      this.addWinnerClass(winmodule.winnerid, winnerColorIndex, profileColor);
      this.setState({ profileColor });
    }, 1000);
  };

  calculateDegree = (arr, length) => {
    let sumOfDegree = 0;
    for (var i = 0; i < length; i++) {
      sumOfDegree += arr[i].chance;
    }
    return sumOfDegree;
  };

  rotate = async ticket => {
    let spins = ticket;
    this.setState({ rotationTo: -spins, transitionTime: "7.5s" });
    try {
      console.log("play");
      await this.audio.play();
    } catch (error) {}
  };

  addWinnerClass = (id, winnerIndex, profileColor) => {
    let winnercolorValue = null;
    allWinnerBomb.forEach(el => {
      const key = Object.keys(el);
      if (key[0] === profileColor) {
        const value = Object.values(el);
        winnercolorValue = value[0];
      }
    });

    setTimeout(async () => {
      let winid = id;
      await this.setState({
        winnerID: winid,
        loser: "loser",
        winnerColor: winnercolorValue
      });
      try {
        await this.winaudio.play();
      } catch (error) {}
    }, 7500);

    setTimeout(() => {
      this.setState({
        AllUser: [],
        totalPot: 0,
        show: true,
        loser: "",
        winner: "",
        winnerID: "",
        winnerColor: ""
      });
    }, 20000);
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <div className="main_page home">
        <div className="container-fluid">
          <div className="inner_wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="custom-slider-wrapper1 reply-watch">
                  <div className="row">
                    <div className="col-md-5">
                      {this.state.AllUser.map(data => {
                        return (
                          <div
                            className={`game-player pl-border-lightgreen ${
                              parseInt(data.userid) ===
                              parseInt(this.state.winnerID)
                                ? this.state.loser
                                : this.state.winner
                            }`}
                          >
                            <div
                              className="r-border"
                              style={{ border: `2px solid ${data.userColor}` }}
                            />
                            <div className="game-player-inner">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="pl-imge">
                                    <div className="user-image">
                                      <img src={data.profilepic} alt="" />
                                    </div>
                                    <div className="paler_name">
                                      {data.username}
                                      <p>
                                        has deposited{" "}
                                        <span
                                          className="pl-price pl-lightgreen"
                                          style={{ color: `${data.userColor}` }}
                                        >
                                          ${data.itemsvalue}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="playesInfo">
                                    <div className="pl-accurecy pl-lightgreen">
                                      <img src={Diceg} alt="Your percentage" />
                                      {Math.round(data.chance)}%
                                    </div>
                                    <div className="palerItems">
                                      <img src={Gun} alt="" /> {data.itemlength}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="col-md-7 custom_74">
                      <div className="row">
                        <div className="">
                          <Wheel
                            {...this.state}
                            addWinnerClass={this.addWinnerClass}
                            blockState={this.blockState}
                          />
                          <div className="col-md-12">
                            <div className="hash_code">
                              <span>
                                {this.state.hash !== "" ? "Round Hash" : ""}
                              </span>
                              <span className="text">{this.state.hash}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Highrollerreplay;
