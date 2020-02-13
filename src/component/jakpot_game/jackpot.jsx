import React,{ Component } from 'react';
import './jakpot.scss';
class Jakpot extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          winner: null
        }
        this.finishHandler = this.finishHandler.bind(this)
        this.handleClick = this.handleClick.bind(this);
      }  
      handleClick() { 
        this.setState({ winner: null });
        this.emptyArray();
        this._child1.forceUpdateHandler();
        this._child2.forceUpdateHandler();
        this._child3.forceUpdateHandler();
      }
    
      static loser = [
        'Not quite', 
        'Stop gambling', 
        'Hey, you lost!', 
        'Ouch! I felt that',      
        'Don\'t beat yourself up',
        'There goes the college fund',
        'I have a cat. You have a loss',
        'You\'re awesome at losing',
        'Coding is hard',
        'Don\'t hate the coder'
      ];
    
      static matches = [];
    
      finishHandler(value) {
        Jakpot.matches.push(value);  
    
        if (Jakpot.matches.length === 3) {
          const { winner } = this.state;
          const first = Jakpot.matches[0];
          let results = Jakpot.matches.every(match => match === first)
          this.setState({ winner: results });
        }
      }
    
      emptyArray() {
        Jakpot.matches = [];
      }
        render(){
            const { winner } = this.state;
            const getLoser = () => {       
            return Jakpot.loser[Math.floor(Math.random()*Jakpot.loser.length)]
            }
            let repeatButton = null;
            let winningSound = null;

            // if (winner !== null) {
            // repeatButton = <RepeatButton onClick={this.handleClick} />
            // }
            
            // if (winner) {
            // winningSound = <WinningSound />
            // }

            return(
                <div className="jacpotInner">
                    <div>
                    
                    <div className="spinnerctouter">
                   
                    <div className={`spinner-container`}>
                    <Spinner onFinish={this.finishHandler} ref={(child) => { this._child1 = child; }} timer="1000" />
                    <Spinner onFinish={this.finishHandler} ref={(child) => { this._child2 = child; }} timer="1400" />
                    <Spinner onFinish={this.finishHandler} ref={(child) => { this._child3 = child; }} timer="2200" />
                    {/* <div className="gradient-fade"></div> */}
                    </div>
                    
                    </div>
                    
                    <div className="jp-info-panel">
                        <div className="jp-panel-head">Last Winner</div>
                        <div className="jp-panel-body"> 
                        <img src="/static/media/avtar.41bfea0f.png" className="panel-ava showPopOver"/>
                            
                        </div>
                        <div className="jp-panel-foot">
                        <span className="jp-panel-info">Won: 
                            <span >{winner === null ? 'Waiting…' : winner ? '🤑 Pure skill! 🤑' : getLoser()}</span>
                        </span> 
                        </div>
                    </div>
                   
                    {winningSound}
                    {repeatButton}          
                </div>
                </div>
            )
        }
}
export default Jakpot;




class Spinner extends React.Component {  
    constructor(props){
      super(props);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };
  
    forceUpdateHandler(){
      this.reset();
    }; 
  
    reset() {
      if (this.timer) { 
        clearInterval(this.timer); 
      }  
  
      this.start = this.setStartPosition();
  
      this.setState({
        position: this.start,
        timeRemaining: this.props.timer        
      });
  
      this.timer = setInterval(() => {
        this.tick()
      }, 100);      
    }
  
    state = {
      position: 0,
      lastPosition: null
    }
    static iconHeight = 188;
    multiplier = Math.floor(Math.random()*(4-1)+1);
  
    start = this.setStartPosition();
    speed = Spinner.iconHeight * this.multiplier;    
  
    setStartPosition() {
      return ((Math.floor((Math.random()*9))) * Spinner.iconHeight)*-1;
    }
  
    moveBackground() {
      this.setState({ 
        position: this.state.position - this.speed,
        timeRemaining: this.state.timeRemaining - 100
      })
    }
  
    getSymbolFromPosition() {
      let { position } = this.state;
      const totalSymbols = 9;
      const maxPosition = (Spinner.iconHeight * (totalSymbols-1)*-1);
      let moved = (this.props.timer/100) * this.multiplier
      let startPosition = this.start;
      let currentPosition = startPosition;    
  
      for (let i = 0; i < moved; i++) {              
        currentPosition -= Spinner.iconHeight;
  
        if (currentPosition < maxPosition) {
          currentPosition = 0;
        }      
      }
  
      this.props.onFinish(currentPosition);
    }
  
    tick() {      
      if (this.state.timeRemaining <= 0) {
        clearInterval(this.timer);        
        this.getSymbolFromPosition();    
  
      } else {
        this.moveBackground();
      }      
    }
  
    componentDidMount() {
      clearInterval(this.timer);
  
      this.setState({
        position: this.start,
        timeRemaining: this.props.timer
      });
  
      this.timer = setInterval(() => {
        this.tick()
      }, 100);
    }
  
    render() {
      let { position, current } = this.state;   
  
      return (            
        <div 
          style={{backgroundPosition: '0px ' + position + 'px'}}
          className={`icons`}          
        />
      )
    }
  }
  

