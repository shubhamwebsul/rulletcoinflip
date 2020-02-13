import React, { Component } from "react";
import SliderHome from "../home-top-slider/slider";
import Wheel from "../wheelgame/wheel";
import queryString from "query-string";
import Products from "../products/product";
import LeaderBoards from "../modals/leaderboards";
import winaudio from "../../assets/audio/gg_win2.mp3";
import rulletspin from "../../assets/audio/rulletspin.wav";
import winneraudio from "../../assets/audio/forwinner.mp3";
import afterspin from "../../assets/audio/afterspin.wav";
import four7 from "../../assets/images/7777.png";
import tripleg from "../../assets/images/777-g.png";
import noti from "../../assets/images/noti.png";
import Diceg from "../../assets/images/dice-g.png";
import doller from "../../assets/images/doller.png";
import player from "../../assets/images/player.png";
import trophy from "../../assets/images/trophy.png";
import gunR from "../../assets/images/gun-r.png";
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboardspopup: false,
      serialdatabasepopup: false,
      totalPot: 0,
      allstat: {
        code: 200,
        gameData: [
          {
            players: [
              {
                itemscount: 1,
                itemsvalue: 0.72,
                chance: 25.087108013937282,
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
                chance: 74.91289198606272,
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
              },
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
            winner: {
              itemscount: 3,
              itemsvalue: 2.15,
              chance: 74.91289198606272,
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
            },
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
              ticket: 1.2498467429000002,
              sum: 2.87,
              percentage: 0.43548667,
              winner:
                "Game: 5dfcd6da is verified and the winner is User 6775678 with winning tickets 0.72 - 1.43",
              arr: [
                {
                  itemscount: 1,
                  itemsvalue: 0.72,
                  chance: 25.087108013937282,
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
                  chance: 74.91289198606272,
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
            gamehash:
              "80a98c5b5ab489239f5303c9da5baff161b83e394e3f9dab9e6ea99c32a4d86b",
            totalpot: 2.87
          },
          {
            players: [
              {
                itemscount: 1,
                itemsvalue: 0.72,
                chance: 14.342629482071715,
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
                itemscount: 1,
                itemsvalue: 4.3,
                chance: 85.65737051792829,
                profileColor: "#49f770",
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
                    item_price: 4.3,
                    item_name: "BTC",
                    profileColor: "#49f770",
                    id: "bangbtc"
                  }
                ],
                colorIndex: 7
              }
            ],
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
              },
              {
                username: "User 6775678",
                useravtar:
                  "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 4.3,
                item_name: "BTC",
                profileColor: "#49f770",
                id: "bangbtc"
              }
            ],
            winner: {
              itemscount: 1,
              itemsvalue: 4.3,
              chance: 85.65737051792829,
              profileColor: "#49f770",
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
                  item_price: 4.3,
                  item_name: "BTC",
                  profileColor: "#49f770",
                  id: "bangbtc"
                }
              ],
              colorIndex: 7
            },
            windata: {
              secret: "51a4bbea48e86ec151e6a12df6a9d45071f7a552",
              srver_hash:
                "a22439316fe979ab54b87a56a969a20b231c1151aff788fa449fc85a8b521c96",
              server_seed:
                "$2b$10$VAOchCfN0rh4glQkuZNxXOvS/VURQV1mP6pL.rtB0Gpc9BBHo3a0q",
              random_seed: "42H61cgR31ztsm7s-w5-",
              mod:
                "$2b$10$VAOchCfN0rh4glQkuZNxXOvS/VURQV1mP6pL.rtB0Gpc9BBHo3a0q-42H61cgR31ztsm7s-w5-",
              random_obj: {
                method: "generateSignedStrings",
                hashedApiKey:
                  "NfPAZFIxeCpuDnA/Z9Rpg5yux60NGPAi9cIHBG9BoANeC2TDqJn2HiRpB+3hYKiu/T0Kw7Jjj86899KoEfcJCA==",
                n: 1,
                length: 20,
                characters: "bcdfghjklmnpqrstvwxyz123456789-HR-151734",
                replacement: true,
                data: ["42H61cgR31ztsm7s-w5-"],
                license: {
                  type: "developer",
                  text:
                    "Random values licensed strictly for development and testing only",
                  infoUrl: null
                },
                userData: null,
                completionTime: "2019-12-20 14:06:20Z",
                serialNumber: 1346
              },
              random_signature:
                "qM/ytbBu9vWRnzABg0iYuNCi0O5membUzgFeIrruzs4tgc8shjpWyKsyBXqxVKYU0Wg31ORAsIko/Z/rSISCv5ZNDn+grZrWn5CfwSfj+xOSYy7fbfY9b7mj2s2VRHg0A6l/PXFCHAFILdi0gjgYoOtthbXO0Z8QvvLu0MCaI3F7194H4R4fjHN2f0oMx1fOzms/SuvT4OkXuFrHpNzkjj6Ca7SQRKWCq9FfbjVij9wrEJp/KguPqHI/wfnzSubm1U848ysNO8vhi3uf6rk1VLBaeeQTKBWmo8he+Lg6bOed7COV7DAz36Q+LOpdGzhkrQk72qjAW82RcpszTNPztqjrqrZyzaZI73bAZ1Xy9o+UkmSrWUfXGv8JonIf1M/XbvLMfUqQuwsW2Wa9XUn8iYiTvkXb0FAMSwrYdMqRsHr0+hl/++/52cGsGuEbFLizIwv9w7pzVBW0Z94ectkSphs+VvpTenioIdTsqOhwK+FaBef2kRAnRQo8lmIbTOXnb5xl+ffOthXftRgHdbchAWM8YguyapBbUmudKaZzx7yAphZuFagR3kShYHwZ1g3g+lk0JNAmVXuRigsjBpDrWLPy+IdNOGXcKgaGJhFex+PddcJPQiGhzF6iK27QYSuDjsD7iOcNPAO29xH6cCOS0hy/DdMvT/pAsXBAGaC+TI0=",
              ticket: 4.0135094274,
              sum: 5.02,
              percentage: 0.7995038700000001,
              winner:
                "Game: 5dfcd4f8 is verified and the winner is User 6775678 with winning tickets 0.72 - 5.02",
              arr: [
                {
                  itemscount: 1,
                  itemsvalue: 0.72,
                  chance: 14.342629482071715,
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
                  itemscount: 1,
                  itemsvalue: 4.3,
                  chance: 85.65737051792829,
                  profileColor: "#49f770",
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
                      item_price: 4.3,
                      item_name: "BTC",
                      profileColor: "#49f770",
                      id: "bangbtc"
                    }
                  ],
                  colorIndex: 7
                }
              ],
              winnerid: "6775678",
              from: "0.72",
              to: "5.02",
              playername: "User 6775678",
              iddd: "5dfcd4f8"
            },
            gamehash:
              "80a98c5b5ab489239f5303c9da5baff161b83e394e3f9dab9e6ea99c32a4d86b",
            totalpot: 5.02
          },
          {
            players: [
              {
                itemscount: 1,
                itemsvalue: 0.72,
                chance: 25.087108013937282,
                profileColor: "#2daefd",
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
                    item_price: 0.72,
                    item_name: "BTC",
                    profileColor: "#2daefd",
                    id: "bangbtc"
                  }
                ],
                colorIndex: 9
              },
              {
                itemscount: 1,
                itemsvalue: 2.15,
                chance: 74.91289198606272,
                profileColor: "#ff6af4",
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
                    item_price: 2.15,
                    item_name: "BTC",
                    profileColor: "#ff6af4",
                    id: "bangbtc"
                  }
                ],
                colorIndex: 1
              }
            ],
            items: [
              {
                username: "User 6775678",
                useravtar:
                  "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 0.72,
                item_name: "BTC",
                profileColor: "#2daefd",
                id: "bangbtc"
              },
              {
                username: "OP Skins 3",
                useravtar:
                  "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 2.15,
                item_name: "BTC",
                profileColor: "#ff6af4",
                id: "bangbtc"
              }
            ],
            winner: {
              itemscount: 1,
              itemsvalue: 2.15,
              chance: 74.91289198606272,
              profileColor: "#ff6af4",
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
                  item_price: 2.15,
                  item_name: "BTC",
                  profileColor: "#ff6af4",
                  id: "bangbtc"
                }
              ],
              colorIndex: 1
            },
            windata: {
              secret: "f1e1c9b45688967d9b297635d9c92f77caf0019c",
              srver_hash:
                "2929916d6585a36479b5df8294fd867f361b0753e6d0dd92fecf1ae82ef1e626",
              server_seed:
                "$2b$10$buaWdUzQ8Y9sWFVJvgWMauucjUTZHvVYKsc0WWxQgzCInc2JAWGbm",
              random_seed: "w5bkz8641t947hrgygkf",
              mod:
                "$2b$10$buaWdUzQ8Y9sWFVJvgWMauucjUTZHvVYKsc0WWxQgzCInc2JAWGbm-w5bkz8641t947hrgygkf",
              random_obj: {
                method: "generateSignedStrings",
                hashedApiKey:
                  "NfPAZFIxeCpuDnA/Z9Rpg5yux60NGPAi9cIHBG9BoANeC2TDqJn2HiRpB+3hYKiu/T0Kw7Jjj86899KoEfcJCA==",
                n: 1,
                length: 20,
                characters: "bcdfghjklmnpqrstvwxyz123456789-HR-151734",
                replacement: true,
                data: ["w5bkz8641t947hrgygkf"],
                license: {
                  type: "developer",
                  text:
                    "Random values licensed strictly for development and testing only",
                  infoUrl: null
                },
                userData: null,
                completionTime: "2019-12-20 13:36:49Z",
                serialNumber: 1345
              },
              random_signature:
                "GeF1FBVPa/r//YHI6kqXBTkwPb1SGgFLDIdg9VeY+CHosM1kHSc0YS1JKTWSwm33q11VQPLiqom4Z7GSlvk0FWxAgv8/35BgpIwQ0SfkupnyqPOIBkKjMznCcTGww3vWLzptViA3+O64Vo3qXvSXK03l/B02gbf5pixpCQT3/e0hplKIVu+t7qDptO4TfCT+KirnPd7W4n29iDuXFT0D6Hmm+A5RlNeAfOYsXWd6HjeKR74SHp9cKh8nrU/4JnsG/hI8PDeqoNmI+9LeLKY1w5uRLZQAD9TjHmatHDm2/L0rutjG2GNMwY+Nr3einkFon+kjD3wiUvnwuNxuF4Llkr89tw37Anwu5/fZZjjVvVOYoj5RaISD9YiFjq4fPMpuZtuUXcv3InXlejI37xJHqkWN/r44jMkCpPlXsRRgSvXxdS+dMTnbnflD5I3jL05F8epquzTpybezbC0CPNQvoHxgIGXA9lCvYoCsLY5P0aeRvdgTQ5xFJJ7OHQEYwGfuM2jibVf8+I4tPmfgfEIS8Qv07zRiXOieoCzz3DfMyGXBJdwBWGuSW61qsf2y9ajB80bLkwROmRIB0wycpAhcFoOaG6rIHUY2NSkZIXWZbsMN4+urShqGKh/LyDUjCEA7UG3XoYVSutYveXUa7pSViq0zGojXOxYy/SozAT1T6II=",
              ticket: 1.3851812772,
              sum: 2.87,
              percentage: 0.48264156,
              winner:
                "Game: 5dfcce02 is verified and the winner is OP Skins 3 with winning tickets 0.72 - 2.87",
              arr: [
                {
                  itemscount: 1,
                  itemsvalue: 0.72,
                  chance: 25.087108013937282,
                  profileColor: "#2daefd",
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
                      item_price: 0.72,
                      item_name: "BTC",
                      profileColor: "#2daefd",
                      id: "bangbtc"
                    }
                  ],
                  colorIndex: 9
                },
                {
                  itemscount: 1,
                  itemsvalue: 2.15,
                  chance: 74.91289198606272,
                  profileColor: "#ff6af4",
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
                      item_price: 2.15,
                      item_name: "BTC",
                      profileColor: "#ff6af4",
                      id: "bangbtc"
                    }
                  ],
                  colorIndex: 1
                }
              ],
              winnerid: "6736312",
              from: "0.72",
              to: "2.87",
              playername: "OP Skins 3",
              iddd: "5dfcce02"
            },
            gamehash:
              "80a98c5b5ab489239f5303c9da5baff161b83e394e3f9dab9e6ea99c32a4d86b",
            totalpot: 2.87
          },
          {
            players: [
              {
                itemscount: 1,
                itemsvalue: 1.43,
                chance: 66.51162790697674,
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
                    item_price: 1.43,
                    item_name: "BTC",
                    profileColor: "#ff3155",
                    id: "bangbtc"
                  }
                ],
                colorIndex: 5
              },
              {
                itemscount: 1,
                itemsvalue: 0.72,
                chance: 33.48837209302326,
                profileColor: "#ff6af4",
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
                    item_price: 0.72,
                    item_name: "BTC",
                    profileColor: "#ff6af4",
                    id: "bangbtc"
                  }
                ],
                colorIndex: 1
              }
            ],
            items: [
              {
                username: "OP Skins 3",
                useravtar:
                  "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 1.43,
                item_name: "BTC",
                profileColor: "#ff3155",
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
                profileColor: "#ff6af4",
                id: "bangbtc"
              }
            ],
            winner: {
              itemscount: 1,
              itemsvalue: 1.43,
              chance: 66.51162790697674,
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
                  item_price: 1.43,
                  item_name: "BTC",
                  profileColor: "#ff3155",
                  id: "bangbtc"
                }
              ],
              colorIndex: 5
            },
            windata: {
              secret: "e8be83c70a9d62e4e36064a6779fc0c61686817e",
              srver_hash:
                "d1faf0a66251f3311fa968614feb783121352455ff9843f242beb69ab0379d24",
              server_seed:
                "$2b$10$D/5nhwn58kSq9d0VPjts1eQ8vNHLwHp.fbcMesR3hwryQlD4oNXe.",
              random_seed: "-rwg5sfb-wR-h1gwRs1n",
              mod:
                "$2b$10$D/5nhwn58kSq9d0VPjts1eQ8vNHLwHp.fbcMesR3hwryQlD4oNXe.--rwg5sfb-wR-h1gwRs1n",
              random_obj: {
                method: "generateSignedStrings",
                hashedApiKey:
                  "NfPAZFIxeCpuDnA/Z9Rpg5yux60NGPAi9cIHBG9BoANeC2TDqJn2HiRpB+3hYKiu/T0Kw7Jjj86899KoEfcJCA==",
                n: 1,
                length: 20,
                characters: "bcdfghjklmnpqrstvwxyz123456789-HR-151734",
                replacement: true,
                data: ["-rwg5sfb-wR-h1gwRs1n"],
                license: {
                  type: "developer",
                  text:
                    "Random values licensed strictly for development and testing only",
                  infoUrl: null
                },
                userData: null,
                completionTime: "2019-12-20 13:30:50Z",
                serialNumber: 1344
              },
              random_signature:
                "XYFEOKa56s46fBP+57NSpXColoM8HMXoqgqIr2eh3kGxc6vRV1rGO1Q1vFLLQPsHV3gN4sQbCLnN/koK5wltlgW8DArqosN7MECatzSXRm0TkoKbtWff5WI1GV3rZ3RQpuLDRJurODu5ECenqR+sBYj1kvA4yplIgnzEy/J/TLqfu1H1bOG76iuyrKqfmhgBobHDb0BItaU+QLI99De0aPWxmGOXlxeNVsJ9SdFeLhGaZ+DEmAUQU55yh2AMCvUvXWoAT8nsF5ySwDW7Z7GjKjL69NCYo7bq7BAIaOqkd1Gr6qLKSl9yTEHlQ3DdPUQ+y9URXRx1GbnGRb2qu+ysa5LzZYfqqrQiDGlaCSSfPc0qnBYQjdAnZkJ6pD0HsXsdvI0xND7zf3GVkZpIXn8Q606rR9YlAnDHbsqUog+Ia1+Si6uMPISMXHLyaH/FA3gofVV5IbIZQf6VFfIauVwyzWlUZ+m0keHM3wyqnrXhI7w3d4cXZLP/CjI09h2tNo3WtPDb4cQfSzVuCYlqrd06t+ZbRW5fECxrNu7F/uzYn8/8oR2sSQZkQuyVfc6HQfShki8LpN9A5pkMIqaQEepzKwt+tOj/BxaiP5ta+tXPR65dg76op56BQ48ZnF21Q/GKVmbAGJJT076NULmBulC89MagM7jKRlln/Gl3J3t9w1E=",
              ticket: 0.3237246185,
              sum: 2.15,
              percentage: 0.15056959,
              winner:
                "Game: 5dfccc93 is verified and the winner is OP Skins 3 with winning tickets 0 - 1.43",
              arr: [
                {
                  itemscount: 1,
                  itemsvalue: 1.43,
                  chance: 66.51162790697674,
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
                      item_price: 1.43,
                      item_name: "BTC",
                      profileColor: "#ff3155",
                      id: "bangbtc"
                    }
                  ],
                  colorIndex: 5
                },
                {
                  itemscount: 1,
                  itemsvalue: 0.72,
                  chance: 33.48837209302326,
                  profileColor: "#ff6af4",
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
                      item_price: 0.72,
                      item_name: "BTC",
                      profileColor: "#ff6af4",
                      id: "bangbtc"
                    }
                  ],
                  colorIndex: 1
                }
              ],
              winnerid: "6736312",
              from: "0",
              to: "1.43",
              playername: "OP Skins 3",
              iddd: "5dfccc93"
            },
            gamehash:
              "80a98c5b5ab489239f5303c9da5baff161b83e394e3f9dab9e6ea99c32a4d86b",
            totalpot: 2.15
          },
          {
            players: [
              {
                itemscount: 1,
                itemsvalue: 0.36,
                chance: 33.33333333333333,
                profileColor: "#ff6af4",
                username: "vandal_Bang.GG",
                userid: 1199197,
                profilepic:
                  "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
                items: [
                  {
                    username: "vandal_Bang.GG",
                    useravtar:
                      "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
                    item_avatar:
                      "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                    item_price: 0.36,
                    item_name: "BTC",
                    profileColor: "#ff6af4",
                    id: "bangbtc"
                  }
                ],
                colorIndex: 1
              },
              {
                itemscount: 1,
                itemsvalue: 0.72,
                chance: 66.66666666666666,
                profileColor: "#ffaf42",
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
                    profileColor: "#ffaf42",
                    id: "bangbtc"
                  }
                ],
                colorIndex: 5
              }
            ],
            items: [
              {
                username: "vandal_Bang.GG",
                useravtar:
                  "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 0.36,
                item_name: "BTC",
                profileColor: "#ff6af4",
                id: "bangbtc"
              },
              {
                username: "OP Skins 3",
                useravtar:
                  "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 0.72,
                item_name: "BTC",
                profileColor: "#ffaf42",
                id: "bangbtc"
              }
            ],
            winner: {
              itemscount: 1,
              itemsvalue: 0.72,
              chance: 66.66666666666666,
              profileColor: "#ffaf42",
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
                  profileColor: "#ffaf42",
                  id: "bangbtc"
                }
              ],
              colorIndex: 5
            },
            windata: {
              secret: "606bb90027d378c98eff91085e65cf3e1f70c0be",
              srver_hash:
                "40e203a321e244db278fb60accea12adebf24f3a55c7c06610a2138174989a9a",
              server_seed:
                "$2b$10$EhJy40ZJE1AN9GFRrHYXI.Ogs3YFctAeJgOIsEWrdjBxYCR3Wh.6i",
              random_seed: "r4xdh1m721k55k-dz-gH",
              mod:
                "$2b$10$EhJy40ZJE1AN9GFRrHYXI.Ogs3YFctAeJgOIsEWrdjBxYCR3Wh.6i-r4xdh1m721k55k-dz-gH",
              random_obj: {
                method: "generateSignedStrings",
                hashedApiKey:
                  "NfPAZFIxeCpuDnA/Z9Rpg5yux60NGPAi9cIHBG9BoANeC2TDqJn2HiRpB+3hYKiu/T0Kw7Jjj86899KoEfcJCA==",
                n: 1,
                length: 20,
                characters: "bcdfghjklmnpqrstvwxyz123456789-HR-151734",
                replacement: true,
                data: ["r4xdh1m721k55k-dz-gH"],
                license: {
                  type: "developer",
                  text:
                    "Random values licensed strictly for development and testing only",
                  infoUrl: null
                },
                userData: null,
                completionTime: "2019-12-20 13:26:28Z",
                serialNumber: 1343
              },
              random_signature:
                "s0bEvFFHmJHiU7VgSefhkIx7Q8a1pEKrurwBvHBT2UZtx9OTFAjiXiyrufcpdqPhX8gbQ9NfsqPsNfhsXA5yGNF6ySVCFRgIqEGnsYIBsA7+ZcTjhmODA5CmwJt8Kukrm7NvqUPm5G/rXwUfEt8RkG8T30OwEDR4tA/UkRWlnKLd4kmVYRrkxCjYjmrUgb+9kqUd2UXRmnQR28JqAfWS8MgqGQTR0me+Ytrg3pzo0kCLOCdKcXh9objcXJZamAirLEoHQNSW8/A8ELYga6pFpqi/1tsN5d8KmtIt1meO+tW6RzkBUA5c/RXckosgu+vMjlNqTuLB8SwNtTkTokAKjcwxMxWD7LzTVXh0UiN7+6YPvrZ467+N8QXLxFpmYM1vNf9rxMZM2U8MXz1oIuJ+3YpD21/1uB1SlsqMdiuo0cC0WvztTGXhmPiFCNPYco81mKnmDK87ig68g0AKr8Dm9sD13KJ2uaFONv/H1Aicqg4BPo438I08hO5Kn8Sps+mb0yIxHB8IvDdMMLdl4afpPghRX+0JH8J3XC8i37f6mzSC1inScNbWdwECCLeWCYBeP3K4MD5mu42wPQ/VSzEp5/9ScpquK7bXpjDSdcB95EeNT6zUvw7uXygyOyl83aSChgeisq/As3Leb+frDV49zn7wCzfHiZhvkEv1dyt1M9M=",
              ticket: 0.4957979652,
              sum: 1.08,
              percentage: 0.45907219,
              winner:
                "Game: 5dfca7fa is verified and the winner is OP Skins 3 with winning tickets 0.36 - 1.08",
              arr: [
                {
                  itemscount: 1,
                  itemsvalue: 0.36,
                  chance: 33.33333333333333,
                  profileColor: "#ff6af4",
                  username: "vandal_Bang.GG",
                  userid: 1199197,
                  profilepic:
                    "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
                  items: [
                    {
                      username: "vandal_Bang.GG",
                      useravtar:
                        "https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/af/af40a736fe1744bd7945516b3dda8c17071066fd_full.jpg",
                      item_avatar:
                        "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                      item_price: 0.36,
                      item_name: "BTC",
                      profileColor: "#ff6af4",
                      id: "bangbtc"
                    }
                  ],
                  colorIndex: 1
                },
                {
                  itemscount: 1,
                  itemsvalue: 0.72,
                  chance: 66.66666666666666,
                  profileColor: "#ffaf42",
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
                      profileColor: "#ffaf42",
                      id: "bangbtc"
                    }
                  ],
                  colorIndex: 5
                }
              ],
              winnerid: "6736312",
              from: "0.36",
              to: "1.08",
              playername: "OP Skins 3",
              iddd: "5dfca7fa"
            },
            gamehash:
              "80a98c5b5ab489239f5303c9da5baff161b83e394e3f9dab9e6ea99c32a4d86b",
            totalpot: 1.08
          }
        ],
        lastwinnerData: {
          username: "User 6775678",
          profilepic:
            "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
          totalpot: "2.87"
        }
      },
      AllUser: [],
      Allitems: [],
      profilePic: "",
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
      showmatch: false,
      coin_popup: false,
      jackpot_popupOpen: false,
      winnerchance: "",
      winnerpot: "",
      running: false,
      depositagain: false,
      oldmatchhash: "",
      oldsss: {
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
    };
    this.winaudio = new Audio(winaudio);
    this.winneraudio = new Audio(winneraudio);
    this.rulletspin = new Audio(rulletspin);
    this.afterspin = new Audio(afterspin);
  }
  waxitems = () => {
    this.setState({ waxItemsModal: true });
  };
  handleLeaderBoardsPopup = e => {
    if (e === "leaderboardspopup_close") {
      this.setState({
        leaderboardspopup: false
      });
    }
    if (e === "leaderboardspopup_open") {
      this.setState({
        leaderboardspopup: true
      });
    }
  };

  handleSerialDatabasePopup = e => {
    if (e === "serialdatabasespopup_close") {
      this.setState({
        serialdatabasepopup: false
      });
    }
    if (e === "serialdatabasespopup_open") {
      this.setState({
        serialdatabasepopup: true
      });
    }
  };
  async componentDidMount() {
    this.getUser();
    this.getOldGameDetails();
  }

  getOldGameDetails = async () => {
    let { gameData, lastwinnerData } = this.state.allstat;
    this.setState({
      alloldGames: gameData,
      lasttotal: lastwinnerData.totalpot,
      lastwinner: lastwinnerData.profilepic,
      lastwinnername: lastwinnerData.username,
      random: Math.random(),
      showmatch: true
    });
  };

  getUser = async () => {

        let oldDataState = [];
        let oldItemsSate = [];
        let AllData = this.state.oldsss.players;
        let totalpot = this.state.oldsss.totalpot.toFixed(2);
        let gameId = this.state.oldsss._id;
        let gamehash = this.state.oldsss.gamehash;
        let timevalue = this.state.oldsss.timer;
        let depositagain = this.state.oldsss.depositagain ? true : false;
        if (AllData.length > 0) {
          let curuserid = localStorage.getItem("userid");
          let currentUser = AllData.filter(
            el => parseInt(el.userid) === parseInt(curuserid)
          );
          let currenUserData =
            currentUser[0] !== undefined ? currentUser[0] : "";
          let curItemsValue =
            currenUserData.itemsvalue !== "" &&
            currenUserData.itemsvalue !== undefined
              ? currenUserData.itemsvalue.toFixed(2)
              : "0.00";
          let curPercentage =
            currenUserData.chance !== "" && currenUserData.chance !== undefined
              ? Math.round(currenUserData.chance)
              : "0.00";

          AllData.forEach(element => {
            let itemsValue = element.itemsvalue.toFixed(2);
            let pic;
            let url = queryString.parseUrl(element.profilepic);
            if (url.query.s !== undefined) {
              pic = element.profilepic.slice(0, -2) + 120;
            } else {
              pic = element.profilepic;
            }
            oldDataState.push({
              userid: element.userid,
              profilepic: pic,
              username: element.username,
              itemlength: element.itemscount,
              itemsvalue: itemsValue,
              userColor: element.profileColor,
              chance: element.chance
            });
            element.items.forEach(idata => {
              oldItemsSate.push({
                item_avtar: idata.item_avatar,
                useravtar: idata.useravtar,
                item_price: idata.item_price,
                item_name: idata.item_name,
                userColor: idata.profileColor
              });
            });
          });
          this.props.HeaderAmount(totalpot);
          this.setState({
            AllUser: oldDataState,
            Allitems: oldItemsSate,
            totalPot: totalpot,
            gameid: gameId,
            hash: gamehash,
            depositedAmount: curItemsValue,
            percentage: curPercentage,
            dynamicTimer: timevalue,
            winnerchance: curPercentage,
            winnerpot: totalpot,
            depositagain: depositagain,
            oldmatchhash: gamehash
          });
        }
  };
  blockState = () => {
    this.setState({
      running: true
    });
  };

  addWinnerClass = async (id, winnerIndex, profileColor) => {
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
      this.setState({
        winnerID: winid,
        loser: "loser",
        winnerColor: winnercolorValue
      });
      try {
        await this.afterspin.play();
      } catch (error) {
        console.log(error);
      }
      if (winid == localStorage.getItem("userid")) {
        this.setState({ jackpot_popupOpen: true });
        this.props.headerXPprogress();
      }
    }, 7500);

    setTimeout(async () => {
      let totalpot = "";
      this.props.HeaderAmount(totalpot);
      this.setState({
        AllUser: [],
        Allitems: [],
        totalPot: 0,
        gameid: "",
        hash: "",
        depositedAmount: "",
        percentage: "",
        dynamicTimer: "",
        loser: "",
        winner: "",
        winnerID: "",
        winnerColor: "",
        running: false,
        depositagain: false
      });
      await this.getOldGameDetails();
      await this.getUser();
    }, 12000);
  };
  render() {
    return (
      <div className="main_page home">
        <div className="container-fluid">
          <div className="inner_wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="previous-first">
                  <img src={gunR} alt="" />{" "}
                  <span>
                    <p>{this.state.Allitems.length} items</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="custom-slider-wrapper">
                  <SliderHome {...this.state} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <div className="custom-slider-wrapper1">
                  <div className="row">
                    <div className="col-md-4 isChatHiddenResponsive">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="previous">
                            <img src={four7} alt="High Rollers" />
                            <span>
                              <p>Current Game</p>
                            </span>
                          </div>
                        </div>
                      </div>

                      {this.state.AllUser.map((data, i) => {
                        return (
                          <div
                            className={`game-player pl-border-lightgreen ${
                              parseInt(data.userid) ===
                              parseInt(this.state.winnerID)
                                ? this.state.winner
                                : this.state.loser
                            }`}
                            key={i}
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
                                    <div className="palerItems">
                                      <img src={Gun} alt="" /> {data.itemlength}
                                    </div>
                                    <div className="pl-accurecy pl-lightgreen">
                                      <img src={Diceg} alt="Your percentage" />
                                      {Math.round(data.chance)}%
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="p-second">
                            <img src={four7} alt="High Rollers" />
                            <span>
                              <p>Previous Games</p>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-12">
                          {this.state.showmatch ? (
                            <Products {...this.state} />
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 custom_74">
                      <div className="row">
                        <div className="">
                          <Wheel
                            {...this.state}
                            addWinnerClass={this.addWinnerClass}
                            blockState={this.blockState}
                          />
                          <div className="col-md-12">
                            <div className="hash_code">
                              <div>
                                {this.state.hash !== "" ? "Round Hash" : ""}
                              </div>
                              <div className="text">{this.state.hash}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bets-tables">
                  <div className="col-md-6" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="reslutInner">
                  <div className="previous-sec">
                    <img src={noti} alt="High Rollers" />
                    {/* <span>Game info */}
                    <p>Game info</p>
                    {/* </span> */}
                  </div>
                  <div className="deposit-btn">
                    <div
                      className="jakpot-depo"
                      onClick={this.props.waxitems.bind(this, "highroller", "")}
                    >
                      JACKPOT DEPOSIT
                    </div>
                  </div>
                  <div className="pgyp">
                    <span>
                      <img src={Diceg} alt="Your percentage" />
                      Your percentage{" "}
                      {this.state.percentage !== ""
                        ? this.state.percentage
                        : "0.00"}
                      %
                    </span>
                  </div>
                  <div className="pgyp">
                    <span>
                      <img src={tripleg} alt="game" />
                      Game id:
                      {this.state.gameid !== ""
                        ? this.state.gameid.toString().substring(0, 8)
                        : ""}
                    </span>
                  </div>
                  <div className="pgyp">
                    <span>
                      <img src={doller} alt="deposite" />
                      Deposited amount $
                      {this.state.depositedAmount !== ""
                        ? this.state.depositedAmount
                        : "0.00"}
                    </span>
                  </div>
                  <div className="pgyp">
                    <span>
                      <img src={player} alt="players" />
                      Players in {this.state.AllUser.length}
                    </span>
                  </div>
                  <div
                    className="pgyp"
                    onClick={this.handleLeaderBoardsPopup.bind(
                      this,
                      "leaderboardspopup_open"
                    )}
                  >
                    <img src={trophy} alt="" /> LEADERBOARD
                  </div>
                </div>
                <div className="button_section" />
              </div>
              <div className="col-md-4 isChatShowResponsive">
                <div className="row">
                  <div className="col-md-12">
                    <div className="previous">
                      <img src={four7} alt="High Rollers" />
                      <span>
                        <p>Current Game</p>
                      </span>
                    </div>
                  </div>
                </div>

                {this.state.AllUser.map((data, i) => {
                  return (
                    <div
                      className={`game-player pl-border-lightgreen ${
                        parseInt(data.userid) === parseInt(this.state.winnerID)
                          ? this.state.winner
                          : this.state.loser
                      }`}
                      key={i}
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
                              <div className="palerItems">
                                <img src={Gun} alt="" /> {data.itemlength}
                              </div>
                              <div className="pl-accurecy pl-lightgreen">
                                <img src={Diceg} alt="Your percentage" />
                                {Math.round(data.chance)}%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="row">
                  <div className="col-md-12">
                    <div className="p-second">
                      <img src={four7} alt="High Rollers" />
                      <span>
                        <p>Previous Games</p>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    {this.state.showmatch ? <Products {...this.state} /> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LeaderBoards
          leaderboardspopup={this.state.leaderboardspopup}
          handle_leaderboardspopup={this.handleLeaderBoardsPopup}
        />
      </div>
    );
  }
}

export default Home;
