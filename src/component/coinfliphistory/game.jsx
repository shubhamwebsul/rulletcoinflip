import React, { Component } from "react";
import "./game.css";
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageredposition: '0px 0px',
      differanitime: 5
    };
    this.myRef = React.createRef();
  }


  componentWillUnmount() {
    console.log("come");
    console.log(this.myRef);
    let node = this.myRef;
    node.remove();
  }


  componentDidMount() {
    this.startRedAnimation(0, 0)
    console.log('componentDidMount')
  }

  startRedAnimation = async (y, counter) => {
    if (counter <= 37) {
      await this.showRedAnimation(0, y)
      await this.showRedAnimation(250, y)
      await this.showRedAnimation(500, y)
      await this.showRedAnimation(750, y)
      await this.showRedAnimation(1000, y)
      await this.showRedAnimation(1250, y)
      await this.showRedAnimation(1500, y)
      await this.showRedAnimation(1750, y)
      await this.showRedAnimation(2000, y)
      await this.showRedAnimation(2250, y)
      let newY = y + 300;
      let newCounter = counter + 1
      this.startRedAnimation(newY,newCounter);
    }
  }


showRedAnimation = async (x, y) => {
  console.log('come.....')
  return new Promise((resolve, reject) => {
    setTimeout(async () => {

      let position = `-${x}px -${y}px`
      this.setState({
        imageredposition: position
      }, () => {
        resolve(true)
      })
    }, this.state.differanitime);
  })
}


render() {
  return (
    <div className="wrapper_games">
      <div className="coinflipgame">
        {this.props.winnerGif === "betred" ? (
          <div
            ref={element => (this.myRef = element)}
            style={
              { backgroundImage: `url(` + this.props.GGRED + `)`, 
              backgroundPosition: this.state.imageredposition,
            backgroundSize:'2500px 11400px' }}
            className="img-responsive1"
          />
        ) : (
            <div
              ref={element => (this.myRef = element)}
              style={{ backgroundImage: `url(` + this.props.GGWHITE + `)`,
              backgroundPosition: this.state.imageredposition,
              backgroundSize:'2500px 11400px' }}
              className="img-responsive1"
            />
          )}
      </div>
    </div>
  );
}
}

export default Game;
