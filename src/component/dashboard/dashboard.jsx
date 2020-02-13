import React, { Component } from 'react';
import Jakpot from '../jakpot_game/jackpot';
import SliderHome from '../home-top-slider/slider';
import {Card,Button} from 'react-bootstrap';
import Wheel from '../wheelgame/wheel';
import Products from '../products/product';

class Dashboard extends Component {
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
            <div className="main_page home">
                <div className="container-fluid">
                <div className="inner_wrapper">
                <div className="row">
                    <div className="col-md-12">
                    <div className="custom-slider-wrapper">
                    <SliderHome/>
                    </div>
                    </div>
                </div>
                 <div className="row">
                 <div className="col-md-9">
                 <div className="custom-slider-wrapper1">
                 <div className="row">
                    <div className="col-md-6">
                    <div className="game-player pl-border-lightgreen">
                   
                     <div className="game-player-inner">
                        <div className="pl-imge">
                        <img src="https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/78/7812376f067d6c67964a8739b05590c688aab6f8_full.jpg"/>  
                        
                        <div className="pl-accurecy pl-lightgreen">
                            88.9%
                        </div>
                        </div>
                        <div className="playesInfo">
                        <div className="paler_name"> 
                                    Test1
                                </div>
                                <div className="paler_desc"> 
                                deposited <span className="pl-price pl-lightgreen">$60</span> using 4
                                </div>
                         <div className="palerItems">Items</div> 
                         </div>
                     </div>
                    </div>
                    <div className="game-player pl-border-red">
                   
                     <div className="game-player-inner">
                        <div className="pl-imge">
                        <img src="https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/78/7812376f067d6c67964a8739b05590c688aab6f8_full.jpg"/>  
                        
                        <div className="pl-accurecy pl-red">
                            88.9%
                        </div>
                        </div>
                        <div className="playesInfo">
                        <div className="paler_name"> 
                                    Test1
                                </div>
                                <div className="paler_desc"> 
                                deposited <span className="pl-price pl-red">$60</span> using 4
                                </div>
                         <div className="palerItems">Items</div> 
                         </div>
                     </div>
                    </div>
                    <div className="game-player pl-border-moonlight">
                   
                   <div className="game-player-inner">
                      <div className="pl-imge">
                      <img src="https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/78/7812376f067d6c67964a8739b05590c688aab6f8_full.jpg"/>  
                      
                      <div className="pl-accurecy pl-moonlight">
                          88.9%
                      </div>
                      </div>
                      <div className="playesInfo">
                      <div className="paler_name"> 
                                  Test1
                              </div>
                              <div className="paler_desc"> 
                              deposited <span className="pl-price pl-moonlight">$60</span> using 4
                              </div>
                       <div className="palerItems">Items</div> 
                       </div>
                   </div>
                  </div>
                    <div className="game-player pl-border-pink">
                   
                     <div className="game-player-inner">
                        <div className="pl-imge">
                        <img src="https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/78/7812376f067d6c67964a8739b05590c688aab6f8_full.jpg"/>  
                        
                        <div className="pl-accurecy pl-pink">
                            88.9%
                        </div>
                        </div>
                        <div className="playesInfo">
                        <div className="paler_name"> 
                                    Test1
                                </div>
                                <div className="paler_desc"> 
                                deposited <span className="pl-price pl-pink">$60</span> using 4
                                </div>
                         <div className="palerItems">Items</div> 
                         </div>
                     </div>
                    </div>
                    <div className="game-player pl-border-blue">
                   
                   <div className="game-player-inner">
                      <div className="pl-imge">
                      <img src="https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/78/7812376f067d6c67964a8739b05590c688aab6f8_full.jpg"/>  
                      
                      <div className="pl-accurecy pl-blue">
                          88.9%
                      </div>
                      </div>
                      <div className="playesInfo">
                      <div className="paler_name"> 
                                  Test1
                              </div>
                              <div className="paler_desc"> 
                              deposited <span className="pl-price pl-blue">$60</span> using 4
                              </div>
                       <div className="palerItems">Items</div> 
                       </div>
                   </div>
                  </div>
                  <div className="game-player pl-border-cappuccino">
                   
                   <div className="game-player-inner">
                      <div className="pl-imge">
                      <img src="https://steamcdn-a.opskins.media/steamcommunity/public/images/avatars/78/7812376f067d6c67964a8739b05590c688aab6f8_full.jpg"/>  
                      
                      <div className="pl-accurecy pl-cappuccino">
                          88.9%
                      </div>
                      </div>
                      <div className="playesInfo">
                      <div className="paler_name"> 
                                  Test1
                              </div>
                              <div className="paler_desc"> 
                              deposited <span className="pl-price pl-cappuccino">$60</span> using 4
                              </div>
                       <div className="palerItems">Items</div> 
                       </div>
                   </div>
                  </div>
                    
                    </div>
                    <div className="col-md-6">
                    <Wheel items={this.places} onSelectItem={this.onSelectItem} />
                    </div>
                 </div>
                 
                 </div>

                 <div className="bets-tables">
                 <div className="col-md-6">
               </div>
                 </div>

                 </div>
                 <div className="col-md-3">
                 <div className="reslutInner">
                 <div className="deposit-btn">
                    <button className="btn button deposit">deposit</button> 
                    </div>
                 <div className="jp-info-panel">
                        <div className="jp-panel-head">Last Winner</div>
                        <div className="jp-panel-body"> 
                        <img src="/static/media/avtar.41bfea0f.png" className="panel-ava showPopOver"/>
                            
                        </div>
                        <div className="jp-panel-foot">
                        <span className="jp-panel-info">Won: 
                            <span >Winner</span>
                        </span> 
                        </div>
                    </div>
                 </div>
                 </div>
                 </div>

                 <div className="row">
                 <div className="col-md-12"> 
                 <Products/>
                 </div>
                </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Dashboard;