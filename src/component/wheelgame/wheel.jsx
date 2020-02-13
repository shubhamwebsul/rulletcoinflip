import React from "react";
import "../../index.css";
import rulletspin from "../../assets/audio/rulletspin.wav";
import { Doughnut } from "react-chartjs-2";
import "./circular-image-label";
import rolletMarker from "../../assets/images/rollet-marker.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Firework from "../firework/firework";
export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chance: [],
      backcolors: [],
      borderColor: [],
      rotationTo: 0,
      imagess: [],
      totalpot: "",
      prectange: 100,
      countdowntimer: "",
      countdowntimerminutes: "00",
      countdowntimerseconds: "00",
      transitionTime: "",
      depositagain: false,
      profileColor: ""
    };

    this.audio = new Audio(rulletspin);
    this.chartReference = null;
    this.audioRef = null;
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.AllUser !== this.props.AllUser) {
      if (this.props.AllUser.length !== 0) {
        let oldColor = [];
        let oldImage = [];
        let oldChance = [];
        let oldborder = [];
        let i = 500;
        this.props.AllUser.forEach(element => {
          oldChance.push(element.chance / 100);
          oldborder.push("#000");
          oldColor.push(element.userColor);
          oldImage.push({ src: element.profilepic, width: 50, height: 50 });
        });

        await this.setState({
          backcolors: oldColor,
          imagess: oldImage,
          chance: oldChance,
          borderColor: oldborder,
          totalpot: this.props.totalPot,
          countdowntimer: this.props.dynamicTimer,
          depositagain: this.props.depositagain
        });
       this.GameResult(this.props.oldsss.windata);
    
      } else {
        this.setState({
          backcolors: [],
          imagess: [],
          chance: [],
          borderColor: [],
          totalpot: "",
          countdowntimer: "",
          transitionTime: "",
          rotationTo: 0,
          prectange: 100
        });
      }
    }
  }

  GameResult = async serverGenerated => {
    setTimeout(()=>{
      this.props.blockState();
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
      this.rotate(winnerRotateDegree);
      this.props.addWinnerClass(
        winmodule.winnerid,
        winnerColorIndex,
        profileColor
      );
      this.setState({ profileColor });
    },3000)
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
  };
  startSound = async () => {
    this.audioRef.play();
  };
  render() {
    const data = {
      datasets: [
        {
          data: this.state.chance.length !== 0 ? this.state.chance : [500],
          backgroundColor:
            this.state.backcolors.length !== 0
              ? this.state.backcolors
              : ["#212121"],
          borderColor: this.state.borderColor,
          borderWidth: 0
        }
      ]
    };
    const options = {
      cutoutPercentage: 70,
      plugins: {
        labels: {
          render: "image",
          images: this.state.imagess
        }
      },
      tooltips: {
        enabled: false
      }
    };
    return (
      <React.Fragment>
        <div className="wheelgamecss cutomjakpotwrapper">
          <div className="new-jackpot-sec-inner-info">
            {this.props.winnerID !== "" ? (
              <div className="winnner_decided">
                <Firework winnercolor={this.state.profileColor} />
              </div>
            ) : null}
            <CircularProgressbar
              strokeWidth={1.5}
              background={true}
              value={this.state.prectange}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `#f40000`,
                textColor: "#000000",
                trailColor: "#fff",
                backgroundColor: "#161621fc",
                borderWidth: "0px"
              })}
            />
            <div className="jackpot-in-results">
              <div className="new-jackpot-total">
                <p>POT VALUE</p>$
                <span className="current-pot">{this.state.totalpot}</span>
              </div>
              <div className="newtimer-outer">
                <div className="newtimer-inner" />
              </div>
              <h3>
                <span id="time">
                  {this.state.countdowntimerminutes} :{" "}
                  {this.state.countdowntimerseconds}
                </span>
              </h3>
              <div className="tauntShow" />
            </div>
          </div>
          <div
            className="customJakpothold"
            style={{
              transform: `rotate(${this.state.rotationTo}deg)`,
              transitionDuration: `${this.state.transitionTime}`
            }}
          >
            <div className="isResponsiveCircle">
              <Doughnut
                ref={reference => (this.chartReference = reference)}
                data={data}
                options={options}
                height={350}
                width={350}
              />
            </div>
          </div>
          <div className="spinner-outer">
            <div id="spinner" style={{ transform: "rotate(0deg)" }}>
              {" "}
              <img alt="marker" src={rolletMarker} />
            </div>
          </div>
        </div>
        <audio
          ref={input => {
            this.audioRef = input;
          }}
          src={rulletspin}
          style={{ display: "none" }}
        />
      </React.Fragment>
    );
  }
}
