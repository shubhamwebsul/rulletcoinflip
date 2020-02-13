import React, {Component} from 'react';
import Wheel from "./wheel"


class WheelGame extends Component {
  constructor(props){
    super(props);
    this.places = ['Player1', 'Player2', 'Player4', 'Player5', 'Player 6', 'Player 7'];
  }  
  onSelectItem=(el,el1)=>{
      console.log(el)
      console.log(el1)

  }
  render() { 
    return ( 
     
      <div>
        <Wheel items={this.places} onSelectItem={this.onSelectItem}/>
      </div>
     );
  }
}
 
export default WheelGame;

