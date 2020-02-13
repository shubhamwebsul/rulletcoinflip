import React, { Component } from "react";
import HistoryMatch from "./historymatch";
import CoinflipHistoryPopup from "./historymatchpopup";
import GGREDD from "../../assets/images/redframes.png";
import GGWHITEE from "../../assets/images/whiteframes.png";
import history from "../../history";
let seceondTimeout;
let cdata = [
  {
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
        coin: "betred",
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
        itemscount: 1,
        itemsvalue: 1.83,
        username: "vandal_Bang.GG",
        userid: 1199197,
        profilepic:
          "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
        coin: "betwhite",
        chance: 50,
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
    winner: "6287665"
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
        coin: "betred",
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
      },
      {
        itemscount: 1,
        itemsvalue: 1.83,
        username: "vandal_Bang.GG",
        userid: 1199197,
        profilepic:
          "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
        coin: "betwhite",
        chance: 50,
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
    winner: "6287665"
  }
];

class CoinFlipHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinflip_modal: false,
      spinvalue: 0,
      spintime: 0,
      players: [],
      gamehash: "",
      winner: "",
      winnerGif: "",
      winnerclass: "",
      loserclass: "",
      gamesID: "",
      totalpots: "",
      lengths: "",
      countjoinable: "",
      verifyroundspopup: false,
      GGRED: GGREDD,
      GGWHITE: GGWHITEE
    };
  }

  handleCoinFlipGamePopup = async (e, id, timer) => {
    if (e === "close") {
      this.setState({
        coinflip_modal: false,
        gamesID: "",
        winnerclass: "",
        loserclass: "",
        winner: ""
      });
      clearTimeout(seceondTimeout);
    }
    if (e === "open") {
      this.loadGame(id);
    }
  };

  setTimeoutFunction = winner => {
    let losers = "loser";
    let winners = "winner";
    seceondTimeout = setTimeout(async () => {
      this.setState({
        winner: winner,
        winnerclass: winners,
        loserclass: losers
      });
    }, 3500);
  };
  loadGame = async id => {
    let winData = cdata.filter(el => el._id === id);
    let winnerGif = null;
    if (winData[0].players.length === 2) {
      let filterWinnerData = winData[0].players.filter(
        el => parseInt(el.userid) === parseInt(winData[0].winner)
      );
      winnerGif = filterWinnerData[0].coin;
      let winner = filterWinnerData[0].winner;
      if (winData[0].timer === 0) {
        this.setTimeoutFunction(winner);
      }
    }
    this.setState({
      coinflip_modal: true,
      players: winData[0].players,
      gamehash: winData[0].gamehash,
      winnerGif: winnerGif,
      gamesID: winData[0]._id
    });
  };
  
  render() {
    return (
      <div className="main_page home">
        <div className="container-fluid">
          <div className="inner_wrapper">
            <div className="row">
              <div className="col-md-12 spaceBottom40">
                <HistoryMatch  
                  handleCoinFlipGamePopup={this.handleCoinFlipGamePopup}
                />
              </div>
            </div>
          </div>
        </div>
        {this.state.coinflip_modal ? (
          <CoinflipHistoryPopup
            {...this.state}
            handleCoinFlipGamePopup={this.handleCoinFlipGamePopup}
          />
        ) : null}
      </div>
    );
  }
}
export default CoinFlipHistory;
