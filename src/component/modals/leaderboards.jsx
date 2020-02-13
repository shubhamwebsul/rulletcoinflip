import React, { Component } from "react";
import { Modal, Table } from "react-bootstrap";
import coins from "../../assets/images/coin-flip.png";
import triple from "../../assets/images/777.png";
import "./leaderboards.scss";
import "./modals.scss";

class LeaderBoards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboard: [],
      selectedGame: "High rollers",
      activeHighroller: "act-highroller",
      activecoinFlip: ""
    };
  }
  componentDidMount() {
    this.renderLeaderboardData("highroller");
  }
  renderLeaderboardData = async type => {

  };

  selectGame = e => {
    this.setState({ selectedGame: e });
    if (e === "highroller") {
      this.renderLeaderboardData(e);
      this.setState({ activeHighroller: "act-highroller", activecoinFlip: "" });
    } else if (e === "coinflip") {
      this.renderLeaderboardData(e);
      this.setState({ activeHighroller: "", activecoinFlip: "act-coinflip" });
    }
  };
  render() {
    return (
      <Modal
        show={this.props.leaderboardspopup}
        onHide={this.props.handle_leaderboardspopup.bind(this, "leaderboardspopup_close")}
        className="customModal leaderboards"
      >
        {this.state.leaderboard.length > 0 && (
          <React.Fragment>
            <Modal.Header closeButton>
              <div className="content_1 custom_content_1 col-md-3">
                <div className="Weekly">
                  <p>Weekly Leaderboards</p>
                </div>
              </div>
              <div className="content_2 custom_content_2 col-md-8">
                <div className="custommenu">
                  <ul className="menulist">
                    <li onClick={this.selectGame.bind(this, "highroller")}>
                      <img src={triple} alt="High Rollers" className={`jackpot-middle ${this.state.activeHighroller}`} />
                      <div className="menu-name">
                        <span className="menulabel"> JACKPOT</span>
                      </div>
                    </li>
                    <li onClick={this.selectGame.bind(this, "coinflip")}>
                      <img src={coins} alt="Coinflip" className={`coinflip-middle ${this.state.activecoinFlip}`} />
                      <div className="menu-name">
                        <span className="menulabel"> Coinflip</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="content_1 col-md-4">
                  <Table striped variant="dark">
                    <thead>
                      <tr>
                        <th colSpan={4}>Most won this week $</th>
                      </tr>
                    </thead>
                  </Table>
                </div>
                <div className="content_2 col-md-4 isResponsiveLeaderboardHiddenTitle">
                  <Table striped variant="dark">
                    <thead>
                      <tr>
                        <th colSpan={4}> Most played this week $</th>
                      </tr>
                    </thead>
                  </Table>
                </div>
                <div className="content_2 col-md-4 isResponsiveLeaderboardHiddenTitle">
                  <Table striped variant="dark">
                    <thead>
                      <tr>
                        <th colSpan={4}>
                          {this.state.activecoinFlip === "act-coinflip" ? "Most coinflips won" : "Luckiest win this week (%)"}
                        </th>
                      </tr>
                    </thead>
                  </Table>
                </div>
              </div>
              <div className="row">
                <div className="content_1 col-md-4">
                {/* <div className="isResponsiveActiveLeaderboardsTitle">
                Most won this week $
                  </div> */}
                  <Table striped bordered variant="dark">
                    {/* <thead>
                            <tr>
                                <th colSpan={4}>Luckiest Winners (This Week)</th>  
                            </tr>
                        </thead> */}
                    <tbody>
                      {this.state.leaderboard[2].newMaxWinnerArr.map((el, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>
                              <span
                                className="avtar"
                                style={{
                                  backgroundImage: "url(" + el.profilepic + ")"
                                }}
                              />
                            </td>
                            <td>{el.username}</td>
                            <td>
                              <span>$</span>
                              {el.userWinning.toFixed(2)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
                <div className="content_2 col-md-4">
                  
                  <div className="isResponsiveActiveLeaderboardsTitle">
                    Most played this week $
                  </div>
                  
                  
                  <Table striped bordered variant="dark">
                    {/* <thead>
                            <tr>
                                <th colSpan={4}>Most Amount Won (This Week)</th>  
                            </tr>
                        </thead> */}
                    <tbody>
                      {this.state.leaderboard[0].newMaxPlayedUsers.map((el, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>
                              <span
                                className="avtar"
                                style={{
                                  backgroundImage: "url(" + el.profilepic + ")"
                                }}
                              />
                            </td>
                            <td>{el.username}</td>
                            <td>
                              <span>$</span>
                              {el.itemsvalue.toFixed(2)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
                <div className="content_2 col-md-4">
                  <div className="isResponsiveActiveLeaderboardsTitle">
                  {this.state.activecoinFlip === "act-coinflip" ? "Most coinflips won" : "Luckiest win this week (%)"}
                  </div>
                  <Table striped bordered variant="dark">
                    {/* <thead>
                            <tr>
                                <th colSpan={4}>Most Amount Won (This Week)</th>  
                            </tr>
                        </thead> */}
                    <tbody>
                      {this.state.leaderboard[1].newLowestPWinners.map((el, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>
                              <span
                                className="avtar"
                                style={{
                                  backgroundImage: "url(" + el.profilepic + ")"
                                }}
                              />
                            </td>
                            <td>{el.username}</td>
                            <td>
                              {el.lowpercentage}
                              {/* <span>%</span> */}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </div>
            </Modal.Body>
          </React.Fragment>
        )}

        {/* <Modal.Footer className="customModalft">
                    <DropdownButton id="select_game" title={this.state.selectedGame}>
                        <Dropdown.Item onClick={this.selectGame.bind(this, 'highroller')}>High rollers</Dropdown.Item>
                        <Dropdown.Item onClick={this.selectGame.bind(this, 'coinflip')}>Coinflip</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="primary" onClick={this.props.handle_leaderboardspopup.bind(this, "leaderboardspopup_close")}>Close</Button>
                </Modal.Footer> */}
      </Modal>
    );
  }
}

export default LeaderBoards;
