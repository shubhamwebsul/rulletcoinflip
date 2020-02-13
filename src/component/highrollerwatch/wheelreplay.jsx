import React from "react";
import "../../index.css";
import { Doughnut, Pie, defaults } from "react-chartjs-2";
import "../wheelgame/circular-image-label";
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
      transitionTime: ""
    };

    this.chartReference = null;
  }
  componentDidUpdate(prevProps) {
    if (prevProps.AllUser !== this.props.AllUser) {
      if (this.props.AllUser.length !== 0) {
        let oldColor = [];
        let oldImage = [];
        let oldChance = [];
        let oldborder = [];
        let i = 500;
        this.props.AllUser.forEach(element => {
          oldChance.push(element.chance / 100);
          oldborder.push("#000000");
          oldColor.push(element.userColor);
          oldImage.push({ src: element.profilepic, width: 50, height: 50 });
        });

        this.setState({
          backcolors: oldColor,
          imagess: oldImage,
          chance: oldChance,
          borderColor: oldborder,
          totalpot: this.props.totalPot,
          countdowntimer: this.props.dynamicTimer
        });
      } else {
        this.setState({
          backcolors: [],
          imagess: [],
          chance: [],
          borderColor: [],
          totalpot: "",
          countdowntimer: "",
          transitionTime: "",
          rotationTo: 0
        });
      }
    }
  }

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
                <Firework winnerColor={this.props.profileColor}/>
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
                backgroundColor: "#eaeaea",
                borderWidth: "0px"
              })}
            />
            <div className="jackpot-in-results">
              <div className="new-jackpot-total">
                $<span className="current-pot">{this.state.totalpot}</span>
              </div>
              <div className="newtimer-outer">
                <div className="newtimer-inner" />
              </div>
              <div className="tauntShow" />
            </div>
          </div>
          <div
            className="customJakpothold"
            style={{
              transform: `rotate(${this.props.rotationTo}deg)`,
              transitionDuration: `${this.props.transitionTime}`
            }}
          >
            <div className="isResponsiveCircle1">
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
      </React.Fragment>
    );
  }
}
