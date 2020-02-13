import React, { Component } from "react";
import {
  Button,
  Form,
  Table,
  ProgressBar,
  ButtonToolbar,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import Profile from "../../assets/images/profile-user.png";
import doller from "../../assets/images/doller.png";
import Bitcoin from "../../assets/images/Bitcoin-Symbol.png";
import Gun from "../../assets/images/gun.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import "./withdrawandxp.scss";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

class WithdrawandXP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingData: {},
      playerData: [],
      playerSentTransaction: [],
      playerRecivedTransaction: [],
      xpbox: [
        { xp: 0, rake: 10, level: 1 },
        { xp: 1000, rake: 9.75, level: 2 },
        { xp: 1000, rake: 9.5, level: 3 },
        { xp: 1000, rake: 9.25, level: 4 },
        { xp: 1000, rake: 9, level: 5 },
        { xp: 1000, rake: 8.75, level: 6 },
        { xp: 1000, rake: 8.5, level: 7 },
        { xp: 1000, rake: 8.25, level: 8 },
        { xp: 1000, rake: 8, level: 9 },
        { xp: 1000, rake: 7.75, level: 10 },
        { xp: 2000, rake: 7.5, level: 11 },
        { xp: 2000, rake: 7.25, level: 12 },
        { xp: 2000, rake: 7, level: 13 },
        { xp: 2000, rake: 6.75, level: 14 },
        { xp: 2000, rake: 6.5, level: 15 },
        { xp: 2000, rake: 6.25, level: 16 },
        { xp: 2000, rake: 6, level: 17 },
        { xp: 2000, rake: 5.75, level: 18 },
        { xp: 2000, rake: 5.5, level: 19 },
        { xp: 2000, rake: 5.25, level: 20 }
      ],
      lvl: 0,
      exactlvl: 0,
      totalperxp: "",
      ammount: "",
      destinationaddress: "",
      estimated_network_fee: "",
      estimatedMsg: "",
      bitcoinusd: "",
      bitcoinConvertedUsd: 0,
      playerstat: {
        code: 200,
        settingData: {
          username: "User 6775678",
          onsitewallet: 10853.33424242172,
          avatar:
            "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
          totalbets: 69.37,
          totalskinswagered: 0,
          level: "1",
          USD: 93.51,
          profit: 18.95,
          winnings: 77.49,
          xpperlevel: 69.36999999999998
        },
        playerData: [
          {
            id: "5dfcd6da",
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
            winlost: "Win",
            totalpot: "2.87",
            date: "12/20/2019"
          },
          {
            id: "5dfcd4f8",
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
            winlost: "Win",
            totalpot: "5.02",
            date: "12/20/2019"
          },
          {
            id: "5dfcce02",
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
            winlost: "Lost",
            totalpot: "2.87",
            date: "12/20/2019"
          },
          {
            id: "5dfccc93",
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
            winlost: "Lost",
            totalpot: "2.15",
            date: "12/20/2019"
          },
          {
            id: "5dfc7305",
            items: [
              {
                username: "OP Skins 3",
                useravtar:
                  "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
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
                item_price: 0.36,
                item_name: "BTC",
                profileColor: "#ff6af4",
                id: "bangbtc"
              }
            ],
            winlost: "Lost",
            totalpot: "1.07",
            date: "12/20/2019"
          },
          {
            id: "5dfc7181",
            items: [
              {
                username: "User 6775678",
                useravtar:
                  "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 2.13,
                item_name: "BTC",
                profileColor: "#ffed5e",
                id: "bangbtc"
              },
              {
                username: "OP Skins 3",
                useravtar:
                  "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 0.36,
                item_name: "BTC",
                profileColor: "#2daefd",
                id: "bangbtc"
              }
            ],
            winlost: "Win",
            totalpot: "2.49",
            date: "12/20/2019"
          },
          {
            id: "5dfc7042",
            items: [
              {
                username: "OP Skins 3",
                useravtar:
                  "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 0.71,
                item_name: "BTC",
                profileColor: "#49f770",
                id: "bangbtc"
              },
              {
                username: "User 6775678",
                useravtar:
                  "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 0.28,
                item_name: "BTC",
                profileColor: "#763fbc",
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
                profileColor: "#763fbc",
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
                profileColor: "#763fbc",
                id: "bangbtc"
              }
            ],
            winlost: "Win",
            totalpot: "2.41",
            date: "12/20/2019"
          },
          {
            id: "5dfc6a51",
            items: [
              {
                username: "OP Skins 3",
                useravtar:
                  "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 1.42,
                item_name: "BTC",
                profileColor: "#ffaf42",
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
                profileColor: "#763fbc",
                id: "bangbtc"
              }
            ],
            winlost: "Lost",
            totalpot: "2.13",
            date: "12/20/2019"
          },
          {
            id: "5dfc6792",
            items: [
              {
                username: "OP Skins 3",
                useravtar:
                  "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 0.71,
                item_name: "BTC",
                profileColor: "#763fbc",
                id: "bangbtc"
              },
              {
                username: "User 6775678",
                useravtar:
                  "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 0.5,
                item_name: "BTC",
                profileColor: "#faf8dd",
                id: "bangbtc"
              }
            ],
            winlost: "Win",
            totalpot: "1.21",
            date: "12/20/2019"
          },
          {
            id: "5dfc656c",
            items: [
              {
                username: "OP Skins 3",
                useravtar:
                  "https://www.gravatar.com/avatar/b266228af848fe741794ec819764b8f8?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 0.71,
                item_name: "BTC",
                profileColor: "#49f770",
                id: "bangbtc"
              },
              {
                username: "User 6775678",
                useravtar:
                  "https://www.gravatar.com/avatar/a3322f3de33a0935b5973dc90b2137e4?d=identicon&r=pg&s=120",
                item_avatar:
                  "https://bang-images.s3.eu-north-1.amazonaws.com/BitcoinLogo.png",
                item_price: 0.63,
                item_name: "BTC",
                profileColor: "#00d7ff",
                id: "bangbtc"
              }
            ],
            winlost: "Win",
            totalpot: "1.34",
            date: "12/20/2019"
          }
        ],
        playerSentTransaction: [],
        playerRecivedTransaction: [],
        bitcoinusd: 8615.38
      }
    };
  }

  async componentDidMount() {
    await this.playerstatistics();
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleAmountChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    let value = parseInt(e.target.value);
    let btc = value / 1000000;
    let exchangerate = this.state.bitcoinusd;
    let USD = parseFloat(exchangerate) * parseFloat(btc);
    this.setState({ bitcoinConvertedUsd: !Number.isNaN(USD) ? USD : 0 });
  };

  withdrawBTC = async () => {
    let { ammount, destinationaddress } = this.state;
    if (!isNaN(ammount) && destinationaddress !== "") {
      NotificationManager.success("requested successfully", "Message", 4000);
      this.setState({
        ammount: "",
        destinationaddress: ""
      });
    } else {
      NotificationManager.error("Fields not valid !!", "Message", 4000);
    }
  };

  playerstatistics = async () => {
    let {
      code,
      settingData,
      playerData,
      playerSentTransaction,
      playerRecivedTransaction,
      bitcoinusd
    } = this.state.playerstat;
    if (code === 200) {
      let lvl = parseInt(settingData.level);
      let xpperlevel =
        settingData.xpperlevel !== undefined ? settingData.xpperlevel : 0;
      let totalperxp = `${xpperlevel}/${lvl <= 10 ? "1000" : "2000"}`;
      lvl = parseInt(lvl);
      this.setState({
        settingData,
        playerData,
        playerSentTransaction,
        playerRecivedTransaction,
        lvl,
        totalperxp,
        bitcoinusd
      });
    }
  };

  render() {
    return (
      <div className="main_page home-profile">
        <div className="container-fluid">
          <div className="inner_wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="isAvatarResponsive">
                  <img
                    src={this.state.settingData.avatar}
                    className="isAvatarResposiveIcon"
                    alt=""
                  />{" "}
                  <span className="isAvatarResponsiveText">
                    {" "}
                    {this.state.settingData.username}
                  </span>{" "}
                  <span className="current isAvatarResponsiveText">
                    level:{" "}
                    <span style={{ color: "red" }}>
                      {this.state.settingData.level}
                    </span>
                  </span>
                </div>
                <div className="isResponsiveProgress">
                  <ProgressBar
                    variant="danger"
                    now={this.state.settingData.xpperlevel}
                    max={this.state.lvl <= 10 ? 1000 : 2000}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="profile">
                  <div className="first">
                    <img src={Profile} alt="" /> <span>Statistic</span>
                  </div>
                  <div className="second">
                    <ul>
                      <li>
                        <img src={this.state.settingData.avatar} alt="" />
                        <span> {this.state.settingData.username}</span>
                        <span className="current">
                          current level:
                          <span>{this.state.settingData.level}</span>
                        </span>
                      </li>
                      <li>
                        <img src={doller} alt="" />
                        <span>
                          Total Wagered: ${this.state.settingData.totalbets}
                        </span>
                      </li>
                      <li>
                        <img src={doller} alt="" />
                        <span>
                          Total won: ${this.state.settingData.winnings}
                        </span>
                      </li>
                      <li>
                        <img src={doller} alt="" />
                        <span>
                          Total Profit: ${this.state.settingData.profit}
                        </span>
                      </li>
                      <li>
                        <img src={Gun} alt="" />
                        <span>
                          Skins Wagered:{" "}
                          {this.state.settingData.totalskinswagered}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="isResponsiveItem">
                  <img src={doller} alt="" className="isResposiveIcon" />
                  {"  "}
                  <span>
                    Total Wagered: ${this.state.settingData.totalbets}
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="isResponsiveItem">
                  <img src={doller} alt="" className="isResposiveIcon" />
                  {"  "}
                  <span>Total won: ${this.state.settingData.winnings}</span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="isResponsiveItem">
                  <img src={doller} alt="" className="isResposiveIcon" />
                  {"  "}
                  <span>Total Profit: ${this.state.settingData.profit}</span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="isResponsiveItem">
                  <img src={Gun} alt="" className="isResposiveIcon" />
                  {"  "}
                  <span>
                    Skins Wagered: {this.state.settingData.totalskinswagered}
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="third">
                  <div className="scroll">
                    <ProgressBar
                      variant="danger"
                      now={this.state.settingData.xpperlevel}
                      max={this.state.lvl <= 10 ? 1000 : 2000}
                    />
                    <p className="isProgressbarText">
                      <span>
                        level
                        <span className="colo">
                          {this.state.settingData.level}
                        </span>
                      </span>
                      <span className="right">{this.state.totalperxp} xp</span>
                    </p>
                    <div className="round">
                      <ul>
                        {this.state.xpbox.map(data => {
                          return (
                            <li
                              className={
                                data.level === this.state.lvl && "in-bor"
                              }
                            >
                              <ButtonToolbar>
                                <OverlayTrigger
                                  overlay={
                                    <Tooltip>
                                      <p>Jackpot rake: {data.rake}%</p>
                                      <p>Coinflip rake: {data.rake}%</p>
                                    </Tooltip>
                                  }
                                >
                                  <div>
                                    <p>{data.level}</p>
                                    <p>{data.xp} xp</p>
                                  </div>
                                </OverlayTrigger>
                              </ButtonToolbar>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="profile">
                  <div className="first-2">
                    <img src={second} alt="" />{" "}
                    <span>
                      Withdraw{" "}
                      <span>
                        Your Balance:{" "}
                        {parseFloat(
                          this.state.settingData.onsitewallet
                        ).toFixed(2)}{" "}
                        ($
                        {this.state.settingData.USD})
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row four">
                  <div className="col-md-4">
                    <Form className="bit">
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>BITCOIN ADDRESS</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Destination address"
                          name="destinationaddress"
                          value={this.state.destinationaddress}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col-md-4">
                    <Form className="bit">
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>AMOUNT</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter amount in bits"
                          name="ammount"
                          value={this.state.ammount}
                          onChange={this.handleAmountChange}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col-md-4">
                    <div className="bit-but">
                      <div className="isActiveResposiveText">
                        Your withdrawal will also have 0.00005000 subtracted to
                        cover the transaction fee.
                      </div>
                      <Button variant="danger" onClick={this.withdrawBTC}>
                        {" "}
                        <img src={Bitcoin} alt="" /> WITHDRAW BTC{" "}
                        {this.state.bitcoinConvertedUsd > 0
                          ? this.state.bitcoinConvertedUsd.toFixed(2)
                          : ""}
                      </Button>
                      <p className="isHiddenResponsiveText">
                        Your withdrawal will also have 0.00005000 subtracted to
                        cover the transaction fee.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="profile">
                  <div className="first">
                    <img src={third} alt="" /> <span>History</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="fifth">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="tran-his">
                        <p>Transaction history</p>
                        <Table>
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Amount</th>
                              <th>Type</th>
                              <th>Status</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.playerSentTransaction.map(data => {
                              return (
                                <tr>
                                  <td>{data.txid.substring(0, 6)}</td>
                                  <td>{data.amount_sent}</td>
                                  <td>{data.type}</td>
                                  <td>{data.confirmations}</td>
                                  <td>{data.time}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tran-his">
                        <p>Jackpot history</p>
                        <Table>
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Amount</th>
                              <th>Status</th>
                              <th>Item</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.playerData.map(data => {
                              return (
                                <tr>
                                  <td>{data.id}</td>
                                  <td>{data.totalpot}</td>
                                  <td>{data.winlost}</td>
                                  {data.items.length > 5 ? (
                                    <td>
                                      {data.items.slice(0, 5).map(item => {
                                        return <img src={item.item_avatar} />;
                                      })}
                                      <span>+{data.items.length - 5}</span>
                                    </td>
                                  ) : (
                                    <td>
                                      {data.items.map(item => {
                                        return <img src={item.item_avatar} />;
                                      })}
                                    </td>
                                  )}

                                  <td>{data.date}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
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
export default WithdrawandXP;
