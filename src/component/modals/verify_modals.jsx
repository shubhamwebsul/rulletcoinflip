import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./verify_modals.scss";
class VerifyRounds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vrifygame: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    let { verifyhash } = this.props;
    this.setState({ vrifygame: verifyhash });
  }

  render() {
    return (
      <Modal
        show={this.props.verifyroundspopup}
        onHide={this.props.handle_verifyroundspopup.bind(
          this,
          "verifyroundspopup_close"
        )}
        className="customModal verify_rounds"
      >
        <Modal.Header closeButton>
          <div className="titles">
            <div className="title">Provably Fair</div>
            <div className="subtitle">Verify rounds easily</div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="boder-do">
            <div className="pd-bo">
              <p>
                Please note this is a new system we added on the 13th of July,
                if you find any issues let us know immediately. Our "new new"
                Jackpot Provably Fair system no longer generates a random module
                in the beginning of each round, it also relies on data from the
                most reliable 3rd party website for generating random seeds,
                random.org, making our provably fair 100% legitimate where
                nobody has a way to predict or tamper with the outcome of games.
                This is the first site to use this 100% truly provably fair
                system.
              </p>
              <p>
                This new system generates a server seed and a salt, and it makes
                it into a hash presented to our users, making us unable to
                change these values on our end aswell, or the hashes would not
                add up.
              </p>
              <p>
                When the round ends, our system reaches out to Random.org (you
                can see when we did this on ours and their verification page
                too, beware of the possible timezone differences, anyway our
                system reaches out) for a randomly generated hash from their
                end.
              </p>
              <p>
                We make a string of our server seed and the random seed we got
                from random org (server_seed-random_seed) and we use ChanceJS to
                determine the winning module(%) of the game using this string.
              </p>
              <p>
                We also save the full result random.org returns to us so you can
                verify we haven't made multiple calls until we got a favorable
                outcome. Random.org has a serial system where it logs how many
                calls we have made to them in total. Sudden increases in those
                numbers would show. Please note all Jackpots and Coinflips run
                on the same serial systems, any small gaps mean Coinflip games
                or other Jackpot games (on our second pot) have happened
                inbetween. We also store what we used every single serial ID for
                to be able to prove this. Some coding below that might help
                explain this system:
              </p>
              <p>
                <b>var ChanceJS = require("chance"); </b>
                {`var server_seed <- Generated during round creation, saved in the database, encoded with the salt for safety purposes. 
                        var random_seed <- Generated just when the round ends, using random.org's API `}
              </p>
              <p>
                <b>var mod=server_seed+'-'+random_seed; </b>
              </p>
              <p>
                <b>var chance = new ChanceJS(mod); </b>
              </p>
              <p>
                {`var percentage = ((chance.floating({min: 0, max: 100, fixed: 6}))/100); <- This part generates the winning module from the server seed and all the user seeds. `}
              </p>
              <p>{`var ticket=sum*percentage; <- The total value of the jackpot * the newly generated percentage determines the winning ticket, the user who holds the ticket wins the pot. `}</p>
              <p>
                Upon entering a Game ID or a Game Hash you can verify the rounds
                on our site.{" "}
              </p>
              <p>Please simply enter the Game ID or Game Hash to verify it.</p>
              {this.props.verifieddata && (
                <>
                  <div className="headingdiv">
                    <h4>Hash</h4>
                    <div>
                      <i>
                        {" "}
                        This hash was generated when the game was added to the
                        database
                      </i>{" "}
                    </div>
                    <div> {this.props.hashcode} </div>
                  </div>
                  <div className="headingdiv">
                    <h4>Verified Hash</h4>
                    <div>
                      <i>
                        {" "}
                        Hash generated right now for verification purposes
                        SHA256(
                        {this.props.sha256})  
                      </i>{" "}
                    </div>
                    <div> {this.props.verifiedhashcode} </div>
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
                    <div> {this.props.servergeneretd} </div>
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
                    <div> {this.props.finalseed} </div>
                  </div>
                  <div className="headingdiv">
                    <h4>Random.org API verification JSON</h4>
                    <div>
                      <i>
                        {" "}
                        Enter this hash to https://api.random.org/verify with
                        the serial below to verify the round yourself  
                      </i>{" "}
                    </div>
                    <div> {this.props.jsondata} </div>
                  </div>
                  <div className="headingdiv">
                    <h4>Random.org API verification Signature</h4>
                    <div>
                      <i> Also required to verify our requests  </i>{" "}
                    </div>
                    <div> {this.props.signature} </div>
                  </div>
                  <div className="headingdiv">
                    <h4> Sum</h4>
                    <div>
                      <i> Total Sum  </i>{" "}
                    </div>
                    <div>${this.props.totalsum}</div>
                  </div>
                  <div className="headingdiv">
                    <h4>Module</h4>
                    <div>
                      <i>
                        The winning module determines which ticket wins the pot
                        (Jackpot Sum * Winning module)  
                      </i>
                    </div>
                    <div>{this.props.winmodule}</div>
                    <div>
                      {" "}
                      <i>
                        Winning ticket Deposited skins are all assigned tickets
                        depending on the order they were deposited in and their
                        value
                      </i>
                    </div>
                    <div>{this.props.ticket}</div>
                  </div>
                  <div className="headingdiv">
                    <h4>
                      {" "}
                      Game: {this.props.iddd} is verified and the winner is{" "}
                      <span className="highlight">{this.props.playername}</span>{" "}
                      with winning tickets {this.props.from} - {this.props.to}
                    </h4>
                  </div>
                  <div className="headingdiv">
                    {this.props.depositedItems.map(data => {
                      return (
                        <div className="model_items_img">
                          <img src={data.item_avatar} />
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Control
                type="text"
                name="vrifygame"
                value={this.state.vrifygame}
                onChange={this.handleChange}
                placeholder="Game ID or Hash"
              />
            </Form.Group>
            <Button
              onClick={this.props.handle_verify_game.bind(
                this,
                this.state.vrifygame
              )}
            >
              Verify Game
            </Button>
          </Form>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default VerifyRounds;
