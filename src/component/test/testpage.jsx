import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class TestPage extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            formula: '((chance.floating({min: 0, max: 100, fixed: 6}))/100);',
            hashcode: 'c281d3b36a39391e96d7a001b5491a4611a20d108fdcfd6fd0ef67a7d745d830',
            verifiedhashcode: 'c281d3b36a39391e96d7a001b5491a4611a20d108fdcfd6fd0ef67a7d745d830',
            servergeneretd: '834369fa79546974701215c461ddf1',
            deposited:[],
            finalseed:'',
            jsondata:'',
            signature:'',
            sha256:'',
            ticket:'',
            winner:''
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow=async(e)=> {
    }

    render() {
        return (

            <div className="main_page home">
                <div className="container-fluid">
                    <div className="inner_wrapper">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="custom-slider-wrapper conflip-top-section">

                                    <div className="bang-createbtncfse">

                                        <a href="javascript:void(0)" id="1" className="cfanimswitch" onClick={this.handleShow}>
                                            {/* <div className="button cfanimswitch">Player 1</div> */}
                                            Player 1
                                        </a>
                                        <a href="javascript:void(0)" id="2" className="provablyfairtopbtn" onClick={this.handleShow}>
                                            {/* <div id="" className="button provablyfair">Player 2</div> */}
                                            Player 2
                                        </a>
                                        <a href="javascript:void(0)" id="3" className="history-btn" onClick={this.handleShow}>
                                            {/* <div id="" className="button mycoinflipgames">Player 3</div> */}
                                            Player 3
                                        </a>

                                        <a href="javascript:void(0)" id="4" className="conflip-default-btn" onClick={this.handleShow}>
                                            {/* <div id="" className="button createvgo">Player 4</div> */}
                                            Player 4
                                        </a>
                                    </div>


                                </div>
                            </div>
                                <div className="col-md-6">
    {this.state.deposited.map((el)=>{
        return <div className="depositm"><ul>
            <li>
                <div className="playerd">
                Player id :-
                    <span>{el.playerid}</span>
                </div>
                <div className="priced">
                Price :-
                    <span>{el.price}</span>
                </div>
            </li>
        </ul></div>
    })}
                                </div>

                        </div>

                    </div>
                </div>

<div className="winningmod">
                <Modal size="lg" show={this.state.show} onHide={this.handleClose} className="winmodal win-now">
                    <Modal.Header closeButton>
                        <Modal.Title>Provably Fair</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        var ChanceJS = require("chance");
var server_seed Generated during round creation, saved in the database, encoded with the salt for safety purposes.
var random_seed  Generated just when the round ends, using random.org's API

var mod=server_seed+'-'+random_seed;

var chance = new ChanceJS(mod);
var percentage = {this.state.formula} This part generates the winning module from the server seed and all the user seeds.
                        var ticket=sum*percentage;  The total value of the jackpot * the newly generated percentage determines the winning ticket, the user who holds the ticket wins the pot.
                        Upon entering a Game ID or a Game Hash you can verify the rounds on our site.
                        
                        <div className="headingdiv">
                            <h4>Hash</h4>
                            <div><i> This hash was generated when the game was added to the database</i> </div>
                            <div> {this.state.hashcode} </div>
                        </div>

                        <div className="headingdiv">
                            <h4>Verified Hash</h4>
                            <div><i> Hash generated right now for verification purposes SHA256({this.state.sha256})  </i> </div>
                            <div> {this.state.verifiedhashcode} </div>
                        </div>
                        <div className="headingdiv">
                            <h4>Server Generated Seed</h4>
                            <div><i> Hash generated by our server, hashed using a salt and displayed to you. Used together with the random.org Seed to generate the winning module  </i> </div>
                            <div> {this.state.servergeneretd} </div>
                        </div>

                        <div className="headingdiv">
                            <h4>Random.org Seed</h4>
                            <div><i> Hash generated by Random.org as the round ended, we use this hash to determine the winning module  </i> </div>
                            <div> {this.state.finalseed} </div>
</div>

<div className="headingdiv">
                            <h4>Random.org API verification JSON</h4>
                            <div><i> Enter this hash to https://api.random.org/verify with the serial below to verify the round yourself   </i> </div>
                            <div> {this.state.jsondata} </div>
</div>

<div className="headingdiv">

                            <h4>Random.org API verification Signature</h4>
                            <div><i> Also required to verify our requests   </i> </div>
                            <div> {this.state.signature} </div>
                            </div>

                            <div className="headingdiv">
                            <h4>Jackpot Sum</h4>
                            <div><i> Total Jackpot Sum   </i> </div>
                            <div>${this.state.totalsum}</div>
</div>

<div className="headingdiv">
                            <h4>Module</h4>
                            <div><i>The winning module determines which ticket wins the pot (Jackpot Sum * Winning module)   </i></div>
                            <div>{this.state.winmodule}</div>
                            <div> <i>Winning ticket Deposited skins are all assigned tickets depending on the order they were deposited in and their value</i></div>
                            <div>{this.state.ticket}</div>
</div>
                            

                            <div className="headingdiv">
                            <h4>Winner is :- {this.state.winner}</h4>
                            </div>

                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>
                </div>
            </div>
        )
    }
}
export default TestPage;