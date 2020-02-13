import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import history from "../src/history";
import Home from "./component/home/home";
import Header from "./component/header/header";
import Chat from "./component/chat/chat";
import "./App.css";
import Dashboard from "./component/dashboard/dashboard";
import faq from "./component/faq/faq";
import TermsModal from "./component/terms-condition-modal/modal";
import "react-notifications/lib/notifications.css";
import {
  NotificationManager
} from "react-notifications";
import Social from "./component/social/social";
import CoinFlipHistory from "./component/coinfliphistory/coinfliphistory";
import FAQ from "./component/modals/FAQ";
import Highrollerreplay from "./component/highrollerwatch/highrollerreplay";
import "./Responsive.css";
import BitcoinWalletForGame from "./component/modals/bitcoinwalletforgame";
import WithdrawandXP from "./component/withdrawandxp/withdrawandXP";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatIsActive: true,
      tncShow: false,
      isAuth: true,
      waxItmesShow: false,
      headeramount: "",
      isAdminLoggedin: false,
      highroller: "",
      coinflip: "",
      gameid: "",
      coinflipammount: "",
      faqmodal: false,
      active_navbar: 'inactive_panel',
      upto: "",
      lessto: "",
      bitcoinwalletForGame: false,
      headerxp: 0,
      currentlevel: "",
      USD: 0,
      verifyroundspopup: false,
      depositedItems: [],
      hashcode: "",
      verifiedhashcode: "",
      servergeneretd: "",
      finalseed: "",
      jsondata: "",
      signature: "",
      sha256: "",
      ticket: "",
      winner: "",
      totalsum: "",
      winmodule: "",
      show: false,
      verifieddata: false,
      level: "",
      verifyhash: "",
      from: "",
      to: "",
      playername: "",
      iddd: "",
      chooseaside: false,
      actleft: "",
      actright: "",
      ChatActive: false,
      chatControl:false
    };

  }

  handleChatPanel = e => {
    if (e === "show_chat_panel") {
      this.setState({ chatIsActive: true });
    }
    if (e === "hide_chat_panel") {
      this.setState({ chatIsActive: false });
    }
  };
  changeAuth = () => {
    this.setState({ isAuth: false });
  };
  changeAdminAuth = () => {
    this.setState({ isAdminLoggedin: true });
  };

  tncModalShow = e => {
    if (e === "tncModalClose") {
      this.setState({ tncShow: false });
    }
  };
  waxModalShow = e => {
    if (e === "waxModalClose") {
      this.setState({ waxItmesShow: false });
    }
  };

  headerXPprogress = async () => {
      this.setState({ headerxp: 800, level: 3, currentlevel:`level 7`, USD:500 })
  }

  componentDidMount() {
    let terms = sessionStorage.getItem("terms") ? true : false;
    if (terms == true) {
      this.setState({ tncShow: false });
    } else {
      setTimeout(() => {
        this.setState({ tncShow: true });
      }, 500);
    }
    this.headerXPprogress()
  }


  waxitems = (e, id, upto, lessto, side) => {
    if (localStorage.getItem("bangToken")) {
    
    } else {
      NotificationManager.error(
        "Please login to deposit items",
        "Message",
        5000
      );
    }
  };

  HeaderAmount = eamount => {

    this.setState({ headeramount: eamount });
  };
  coinflipHeadeAmmount = (ammount) => {
    this.setState({ coinflipammount: ammount })
  }
  termconditions = () => {
    this.setState({ tncShow: true });
  }
  faqmodalOpen = (event) => {
    if (event === "faqmodal_open") {
      this.setState({ faqmodal: true })
    }
    if (event === "faqmodal_close") {
      this.setState({ faqmodal: false })
    }
  }
  showNavbar = () => {
    if (this.state.active_navbar === 'active') {
      this.setState({
        active_navbar: 'inactive_panel'
      })
    } else {
      this.setState({
        active_navbar: 'active'
      })
    }
  };
  BitcoinwalletForGame = (e, e1) => {
    if (e === "Bitcoinwallet_open") {
      this.setState({
        bitcoinwalletForGame: true
      })
    }
    else if (e === "Bitcoinwallet_close") {
      this.setState({
        bitcoinwalletForGame: false
      })
    }
  }
  handleVerifyRoundsPopup = (e, e1) => {
    if (e === "verifyroundspopup_close") {
      this.setState({
        verifyroundspopup: false,
        verifieddata: false,
        verifyhash: ""
      });
    }
    if (e === "verifyroundspopup_open") {
      this.setState({
        verifyroundspopup: true,
        verifyhash: e1 !== undefined ? e1 : ""
      });
    }
  };
  handle_verify_game = async e => {

  };

  chooseSide = (event) => {
    if (event === "modal_open") {
      this.setState({ chooseaside: true })
    }
    if (event === "modal_close") {
      this.setState({
        chooseaside: false,
        actleft: "",
        actright: ""
      })
    }
  }
  selectSide = (e) => {
    if (e === "coinwhite") {
      this.setState({
        actleft: "active-left",
        actright: ""
      })
    } else if (e === "coinred") {
      this.setState({ actright: "active-right", actleft: "" })
    }
  }

  update(value) {
    return () => {
      this.setState({
        ChatActive: value
      });
   }
  }
  isChange(value) {
    return () => {
      this.setState({
        ChatActive: !this.state.ChatActive
      });
      
   }
  }
  render() {
    return (
      <div className="App">
        <Router history={history}>
        
              <React.Fragment>
                <Header {...this.state} changeAuth={this.changeAuth} IsChatActive={this.update.bind(this)} IsActiveChat={this.isChange.bind(this)} termconditions={this.termconditions} handleVerifyRoundsPopup={this.handleVerifyRoundsPopup} />
                <div
                  className={
                    this.state.chatIsActive ? "page chat_active" : "page"
                  }
                >
                  <div className="custom-socialside">
                    <Social />
                  </div>
                  <Chat
                    ChatActive = {this.state.ChatActive}
                    chatIsActive={this.state.chatIsActive}
                    handleChatPanel={this.handleChatPanel}
                    faqmodalOpen={this.faqmodalOpen}

                  />
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Home
                        waxitems={this.waxitems}
                        HeaderAmount={this.HeaderAmount}
                        verifyroundspopup={this.handleVerifyRoundsPopup}
                        headerXPprogress={this.headerXPprogress}
                      />
                    )}
                  />

                  <Route
                    path="/highrollers"
                    render={() => (
                      <Home
                        waxitems={this.waxitems}
                        HeaderAmount={this.HeaderAmount}
                        verifyroundspopup={this.handleVerifyRoundsPopup}
                        headerXPprogress={this.headerXPprogress}
                      />
                    )}
                  />
             
                  <Route path="/account" component={WithdrawandXP} />
                  <Route
                    path="/coinflip"
                    render={() => <CoinFlipHistory  />}
                  />
                  <Route
                    path="/coinfliphistory"
                    render={() => <CoinFlipHistory />}
                  />
                  <Route path="/highrollerreplay" render={() => <Highrollerreplay />} />
                  <Route path="/faq" component={faq} />
                </div>
                <TermsModal
                  tncModalShow={this.tncModalShow}
                  tncShow={this.state.tncShow}
                />
                {this.state.faqmodal && <FAQ {...this.state} faqmodalOpen={this.faqmodalOpen} />}
                {this.state.bitcoinwalletForGame && <BitcoinWalletForGame {...this.state} BitcoinwalletForGame={this.BitcoinwalletForGame} />}
              </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
